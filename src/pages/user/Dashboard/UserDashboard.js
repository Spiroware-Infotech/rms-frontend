import React, { useEffect, useState } from 'react';
import { avatar_img } from "../../../utils/constant";
import { getToken, getTokenType } from '../../../utils/helper/helper';
import { Link } from "react-router-dom";
import UserHeader from './UserHeader';


const fetchUserData = async () => {
  const token = getToken();
  const tokenType = getTokenType();
  const userId = localStorage.getItem("userId");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenType} ${token}`,
  };
  


  let userProfile = {
    firstname: "",
    lastname: "",
    country: "",
  };

  let reviews = [];
  let stats = { reviews: 0, reads: 0, useful: 0 };
  

  try {
    // Fetch user profile
    const userRes = await fetch(`https://spiroware.com/reviewssystem/api/v1/user/${userId}`, {
      headers,
    });
    const userData = await userRes.json();
    if (userRes.ok && userData.success) {
      userProfile = {
        firstname: userData.data.firstname,
        lastname: userData.data.lastname,
        country: userData.data.country,
      };
    } else {
      console.error("❌ Failed to fetch user profile:", userData.message);
    }

    // Fetch user reviews
    const reviewsRes = await fetch(`https://spiroware.com/reviewssystem/api/v1/user/reviews/${userId}`, {
      headers,
    });
    const reviewsData = await reviewsRes.json();

    if (reviewsRes.ok && reviewsData.success) {
      reviews = Array.isArray(reviewsData.data) ? reviewsData.data : [];
      stats.reviews = reviews.length;
      stats.reads = reviews.length;
      stats.useful = reviews.reduce((sum, r) => sum + (r.likes || 0), 0);
    } else {
      console.error("❌ Failed to fetch reviews:", reviewsData.message);
    }
  } catch (err) {
    console.error("❌ Error fetching dashboard data:", err);
  }

  return {
    ...userProfile,
    reviews,
    stats,
  };
};

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState("");

  useEffect(() => {
    fetchUserData().then(setUserData);
  }, []);

  const handleDelete = async (reviewId) => {
    const userId = localStorage.getItem("userId");
    console.log("Trying to delete review with:", { userId, reviewId });

    const token = getToken();
    const tokenType = getTokenType();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenType} ${token}`,
    };

    try {
      const res = await fetch(
        `https://spiroware.com/reviewssystem/api/v1/user/review/delete/${userId}/${reviewId}`,
        { method: "DELETE", headers }
      );

      const result = await res.json();
      if (res.ok && result.success) {
        setUserData((prev) => {
          const deletedReview = prev.reviews.find((r) => r.revId === reviewId);
          return {
            ...prev,
            reviews: prev.reviews.filter((r) => r.revId !== reviewId),
            stats: {
              reviews: prev.stats.reviews - 1,
              reads: prev.stats.reads - 1,
              useful: prev.stats.useful - (deletedReview.likes || 0),
            },
          };
        });
        setDeleteMessage("✅ Review deleted successfully!");
        setTimeout(() => setDeleteMessage(""), 3000);
      } else {
        console.error(result.message || "Failed to delete review.");
      }
    } catch (err) {
      console.error("DELETE error:", err);
    }
  };

  const renderStars = (count) => (
    <>
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`icon_star${i < count ? "" : " empty"}`}></i>
      ))}
    </>
  );

  if (!userData) return <div>Loading...</div>;

  return (
    <main className="margin_main_container">
      <UserHeader />
      {/* <div className="user_summary">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <figure>
                  <img src={avatar_img} alt="User" />
                </figure>
                <h1>{userData.firstname} {userData.lastname}</h1>
                <span>{userData.country}</span>
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong>{userData.stats.reviews}</strong><i className="icon_star"></i> Reviews</li>
                  <li><strong>{userData.stats.reads}</strong><i className="icon-user-1"></i> Reads</li>
                  <li><strong>{userData.stats.useful}</strong><i className="icon_like_alt"></i> Useful</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-8">
            {deleteMessage && <div className="alert alert-success">{deleteMessage}</div>}
            {userData.reviews.length === 0 ? (
              <div>No reviews found.</div>
            ) : (
              userData.reviews.map((review) => (
                <div className="review_card" key={review.revId}>
                  <div className="row">
                    <div className="col-md-2 user_info">
                      <figure><img src={avatar_img} alt="User" /></figure>
                      <h5>Review: "{review.subject}"</h5>
                    </div>
                    <div className="col-md-10 review_content">
                      <div className="clearfix add_bottom_15">
                        <span className="rating">
                          {renderStars(review.rating)}
                          <em>{review.rating != null ? review.rating.toFixed(2) : "0.00"}/5.00</em>
                        </span>
                        <em>Published: {new Date(review.submittedAt).toLocaleDateString()}</em>
                      </div>
                      <h4>"{review.subject}"</h4>
                      <p>{review.comment}</p>
                      <p>Likes: {review.likes}, Dislikes: {review.dislikes}</p>
                      <div>
                        {review.taglines?.map((tag, idx) => (
                          <span key={idx} className="badge bg-secondary me-1">{tag}</span>
                        ))}
                      </div>
                      <ul>
                        <li>
                          <a href="#0" className="btn_delete" onClick={() => window.confirm("Are you sure?") && handleDelete(review.revId)}>
                            <i className="icon-trash"></i> Delete
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-edit-3"></i> Edit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-lg-4">
            <div className="box_general general_info">
              <Link to="/user/editdetails"><h3>Edit Your Personal Details<i className="pe-7s-help1"></i></h3></Link>
              <p>Edit your details here.</p>
              <hr />
              <Link to="/user/changepassword"><h3>Change Your Password<i className="pe-7s-help1"></i></h3></Link>
              <p>Change here.</p>
              <hr />
              <h3>Delete a review <i className="pe-7s-help1"></i></h3>
              <p>Manage and delete your reviews from here.</p>
              <hr />
              <h3>Post a review <i className="pe-7s-help1"></i></h3>
              <p>Share your thoughts and feedback.</p>
              <hr />
              <div className="text-center">
                <a href="faq.html" className="btn_1 small">View all FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
