import React, { useState } from 'react';
import UserHeader from './UserHeader';
import { Link } from 'react-router-dom';
import { getToken, getTokenType } from '../../../utils/helper/helper';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passInfo, setPassInfo] = useState('');
  const [messageType, setMessageType] = useState('danger');

  const handleSave = async () => {
  if (newPassword !== confirmPassword) {
    setPassInfo('New password and confirm password do not match.');
    return;
  }
  if (!password || !newPassword) {
    setPassInfo('Please fill all fields.');
    return;
  }

  try {
    const userId = localStorage.getItem("userId");
    const token = getToken();
    const tokenType = getTokenType();

    const res = await fetch(`https://spiroware.com/reviewssystem/api/v1/user/updatePwd/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${tokenType} ${token}`,
      },
      body: JSON.stringify({
        old_password: password,
        new_password: newPassword,
        re_password: confirmPassword
      }),
    });

    const result = await res.json();
    console.log("🔄 API Response:", result); // ✅ This should show response in console

    if (res.ok && result.success) {
      setPassInfo("✅ Password updated successfully!");
       window.location.href = "/user/dashboard";
    } else {
      setPassInfo(`❌ ${result.message || "Failed to update password."}`);
    }
  } catch (err) {
    console.error("❌ Network/Server error:", err);
    setPassInfo("❌ Something went wrong. Please try again.");
  }
};


  return (
    <main className="margin_main_container" style={{ marginTop: 0 }}>
      <UserHeader />

      <div className="container margin_60_35" style={{ marginTop: '0px' }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="settings_panel" style={{ paddingTop: 0 }}>
              <h3>Change password</h3>
              <hr />
              <div className="form-group">
                <label>Current Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {passInfo && (
                <div id="pass-info" className={`clearfix text-${messageType}`} style={{ marginTop: '10px' }}>
                  {passInfo}
                </div>
              )}
              <p className="text-end">
                <button className="btn_1 small" onClick={handleSave}>
                  Save password
                </button>
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="box_general general_info">
              <Link to="/user/editdetails">
                <h3>Edit Your Personal Details<i className="pe-7s-help1"></i></h3>
              </Link>
              <p>Edit your details here.</p>
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

export default ChangePassword;
