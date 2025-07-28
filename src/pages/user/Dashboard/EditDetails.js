import React, { useState, useEffect } from "react";
import { getToken, getTokenType } from "../../../utils/helper/helper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserHeader from "./UserHeader";

const EditDetails = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
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
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setSuccessMessage("❌ User ID not found. Please log in again.");
      setMessageType("error");
    }
  }, []);

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
          setProfile((prev) => ({
            ...prev,
            ...data.data,
          }));
          console.log("✅ Profile loaded:", data.data);
        } else {
          setSuccessMessage("❌ Failed to load user details.");
          setMessageType("error");
        }
      } catch (err) {
        setSuccessMessage("❌ Server error while fetching profile.");
        setMessageType("error");
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();
    const tokenType = getTokenType();

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

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccessMessage("✅ Profile updated successfully!");
        setMessageType("success");
        setTimeout(() => {
          navigate("/user/dashboard");
        }, 500);
      } else {
        setSuccessMessage("❌ Failed to update profile.");
        setMessageType("error");
      }
    } catch (err) {
      setSuccessMessage("❌ Network/server error during update.");
      setMessageType("error");
    }
  };

  return (
    <main className="margin_main_container">
      <UserHeader /> {/* ✅ Common header reused */}

      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-8">
            <div className="settings_panel">
              <h3>Edit Your Details</h3>
              <hr />
              <form onSubmit={handleProfileSubmit}>
                <div className="form-group">
                  <label>Firstname</label>
                  <input className="form-control" type="text" name="firstname" value={profile.firstname} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Lastname</label>
                  <input className="form-control" type="text" name="lastname" value={profile.lastname} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" type="text" name="email" value={profile.email} onChange={handleProfileChange} readOnly />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input className="form-control" type="text" name="username" value={profile.username} onChange={handleProfileChange} readOnly />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control" name="gender" value={profile.gender} onChange={handleProfileChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input className="form-control" type="text" name="city" value={profile.city} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input className="form-control" type="text" name="state" value={profile.state} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input className="form-control" type="text" name="country" value={profile.country} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Zipcode</label>
                  <input className="form-control" type="text" name="zipcode" value={profile.zipcode} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input className="form-control" type="text" name="address" value={profile.address} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input className="form-control" type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleProfileChange} />
                </div>
                <p className="text-end">
                  <button className="btn_1 small add_top_15" type="submit">Save personal info</button>
                </p>
              </form>

              {successMessage && (
                <div className={`alert alert-${messageType === "error" ? "danger" : "success"}`} role="alert">
                  {successMessage}
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box_general general_info">
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
};

export default EditDetails;
