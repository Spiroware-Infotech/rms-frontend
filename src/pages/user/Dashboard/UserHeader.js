import React, { useEffect, useState } from 'react';
import { avatar_img } from '../../../utils/constant';
import { getToken, getTokenType } from '../../../utils/helper/helper';

const UserHeader = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchUserData = async () => {
    const token = getToken();
    const tokenType = getTokenType();
    const userId = localStorage.getItem("userId");

    if (!token || !tokenType || !userId) {
      console.error("Missing token/userId");
      setLoading(false);
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenType} ${token}`,
    };

    try {
      // Fetch profile
      const profileRes = await fetch(`https://spiroware.com/reviewssystem/api/v1/user/${userId}`, { headers });

      const profileText = await profileRes.text();
      console.log("🧾 Raw profile response:", profileText);

      let profileJson = {};
      try {
        profileJson = JSON.parse(profileText);
      } catch (e) {
        console.error("❌ Failed to parse profile JSON:", e);
        setLoading(false);
        return;
      }

      if (!profileJson.success || !profileJson.data) {
        console.error("❌ Invalid profile data");
        setLoading(false);
        return;
      }

      // Fetch reviews
      let stats = { reviews: 0, reads: 0, useful: 0 };
      const reviewsRes = await fetch(`https://spiroware.com/reviewssystem/api/v1/user/reviews/${userId}`, { headers });

      if (reviewsRes.ok) {
        const reviewsText = await reviewsRes.text();
        try {
          const reviewsJson = JSON.parse(reviewsText);
          const reviews = reviewsJson?.data || [];
          stats = {
            reviews: reviews.length,
            reads: reviews.length,
            useful: reviews.reduce((acc, r) => acc + (r.likes || 0), 0),
          };
        } catch (err) {
          console.warn("⚠️ Could not parse reviews:", err);
        }
      }

      const { firstname, lastname, country } = profileJson.data;
      setUserData({
        firstname: firstname || "Guest",
        lastname: lastname || "",
        country: country || "India",
        stats,
      });

    } catch (err) {
      console.error("❌ Exception in fetchUserData:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
}, []);


  if (loading || !userData) return <div className="text-center mt-4">Loading profile...</div>;

  return (
    <main className="margin_main_container">
    <div className="user_summary" style={{ marginTop: "0px", paddingTop: "0px" }}>
      <div className="wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex align-items-center gap-3">
              <figure>
                <img src={avatar_img} alt="User" className="rounded-circle" style={{ width: 80, height: 80 }} />
              </figure>
              <div>
                <h1 className="text-white">{userData.firstname} {userData.lastname}</h1>
                <span className="text-white-50">{userData.country}</span>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <ul className="list-inline text-white d-flex justify-content-end gap-4">
                <li><strong>{userData.stats.reviews}</strong><i className="icon_star"></i> Reviews</li>
                <li><strong>{userData.stats.reads}</strong><i className="icon-user-1"></i> Reads</li>
                <li><strong>{userData.stats.useful}</strong><i className="icon_like_alt"></i> Useful</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</main>
  );
};

export default UserHeader;
