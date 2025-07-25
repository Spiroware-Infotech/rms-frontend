import React, { useState, useEffect } from "react";
import { getToken, getTokenType } from "../../../utils/helper/helper";
import { avatar_img } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";


const EditDetails = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    address: "",
    phoneNumber: "",
    stats: { reviews: 0, reads: 0, useful: 0 }
  });
  
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = getToken();
      const tokenType = getTokenType();

      if (!token || !userId) {
        setSuccessMessage("❌ Token or user ID not found. Please log in again.");
        setMessageType("error");
        return;
      }
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${tokenType} ${token}`,
      };

      try {
        const res = await fetch(
          `https://spiroware.com/reviewssystem/api/v1/user/${userId}`,
          { headers }
        );

        const data = await res.json();

        if (res.ok && data.success && data.data) {
          setProfile((prev) => ({ ...prev, ...data.data,
          gender: data.data.gender || localStorage.getItem("gender") || "",
          zipcode: data.data.zipcode || localStorage.getItem("zipcode") || "",
          address: data.data.address || localStorage.getItem("address") || "",
          state: data.data.state || localStorage.getItem("state") || "",
          country: data.data.country || localStorage.getItem("country") || "",
          city: data.data.city || localStorage.getItem("city") || "", }));
          console.log("✅ User details loaded:", data.data);
        }
      } catch (err) {
        setSuccessMessage("❌ Server error while fetching details.");
        setMessageType("error");
      }
    };
    fetchUserDetails();
  }, [userId]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();
    const tokenType = getTokenType();
    localStorage.setItem("gender", profile.gender);
    localStorage.setItem("zipcode", profile.zipcode);
    localStorage.setItem("address", profile.address);
    localStorage.setItem("city", profile.city);
    localStorage.setItem("country", profile.country);
    localStorage.setItem("state", profile.state);

    if (!token || !userId) {
      setSuccessMessage("❌ Authorization token or user ID not found. Please log in.");
      setMessageType("error");
      return;
    }

    try {
      const res = await fetch(
        "https://spiroware.com/reviewssystem/api/v1/user/profileUpdate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${tokenType} ${token}`,
          },
          body: JSON.stringify(profile),
        }
      );

      let result;
      try {
        result = await res.json();
      } catch (err) {
        setSuccessMessage("❌ Server returned an invalid response.");
        setMessageType("error");
        return;
      }

      console.log(result);

      if (res.ok && result.success) {
        setSuccessMessage("✅ Profile updated successfully!");
        setMessageType("success");
        setTimeout(() => {
        navigate("/user/dashboard");
  },1500);
      } 
    } catch (err) {
      setSuccessMessage("❌ Network/server error during update.");
      setMessageType("error");
    }
  };

  return (
    <main className="margin_main_container">
      <div className="user_summary">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <figure>
                  <img src={avatar_img} alt="User" />
                </figure>
                <h1>{profile.firstname} {profile.lastname}</h1>
                <span>{profile.country}</span>
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong>{profile.stats.reviews}</strong> <i className="icon_star"></i> Reviews</li>
                  <li><strong>{profile.stats.reads}</strong> <i className="icon-user-1"></i> Reads</li>
                  <li><strong>{profile.stats.useful}</strong> <i className="icon_like_alt"></i> Useful</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-8">
            <div className="settings_panel">
              <h3>Edit Your Details</h3>
              <hr />
              <form onSubmit={handleProfileSubmit}>
                <div className="form-group">
                  <label>Firstname</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    value={profile.firstname}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Lastname</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    value={profile.lastname}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label>Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={profile.username}
                    onChange={handleProfileChange}
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <input
                    className="form-control"
                    type="text"
                    name="gender"
                    value={profile.gender}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>City</label>
                  <input
                    className="form-control"
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>State</label>
                  <input
                    className="form-control"
                    type="text"
                    name="state"
                    value={profile.state}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <input
                    className="form-control"
                    type="text"
                    name="country"
                    value={profile.country}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Zipcode</label>
                  <input
                    className="form-control"
                    type="text"
                    name="zipcode"
                    value={profile.zipcode}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name="phoneNumber"
                    value={profile.phoneNumber}
                    onChange={handleProfileChange}
                  />
                </div>

                <p className="text-end">
                  <button className="btn_1 small add_top_15" type="submit">
                    Save personal info
                  </button>
                </p>
              </form>

              {successMessage && (
                <div
                  className={`alert alert-${messageType === "error" ? "danger" : "success"}`}
                  role="alert"
                >
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditDetails;
