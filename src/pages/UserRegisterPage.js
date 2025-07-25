import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { AppRoutes } from "../utils/constant";

const UserRegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const redirect = params.get("redirect") || "/reviewform";
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    address: "",
    phoneNumber: "",
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.firstname) errors.firstname = "First name is required";
    if (!formData.lastname) errors.lastname = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) errors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) errors.email = "Invalid email format";
    
    if (!formData.username) errors.username = "Username is required";
    else if (formData.username.length < 4 || formData.username.length > 20)
      errors.username = "Username must be 4-20 characters";
    
    if (!formData.password) errors.password = "Password is required";
    else if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.zipcode) errors.zipcode = "Zipcode is required";
    if (!formData.address) errors.address = "Address is required";
    const phoneRegex = /^[0-9]{10}$/;
    
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    else if (!phoneRegex.test(formData.phoneNumber))
      errors.phoneNumber = "Phone number must be 10 digits";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    // console.log("Form Data:", formData);
    try {
      const res = await axios.post(
        "https://spiroware.com/reviewssystem/api/v1/auth/signup",
        formData
      );
      if (res.data.success) {
        alert("Registration successful! Please check your email for the verification code.");
        console.log(formData);
        setTimeout(
          () =>
            navigate(AppRoutes. VerificationPage, //+ `?redirect=${redirect}`,//
               {
              state: { email: formData.email },
            }),
          200
        );
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        alert("Registration failed: " + error.response.data.message);
      } else {
      alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <nav id="menu" className="fake_menu"></nav>
      <div id="login">
        <aside>
          <figure>
            <Link to="/">
              <img
                src="/assets/img/prs-logo.png"
                width="120"
                height="55"
                alt=""
                className="logo_sticky"
              />
            </Link>
          </figure>
          <br/>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
              <i className="ti-user"></i>
              {formErrors.firstname && (
                <small className="text-danger">{formErrors.firstname}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
              <i className="ti-user"></i>
              {formErrors.lastname && (
                <small className="text-danger">{formErrors.lastname}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <i className="icon_mail_alt"></i>
              {formErrors.email && (
                <small className="text-danger">{formErrors.email}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                minLength={4}
                maxLength={16}
                pattern=".{4,16}"
                title="Username must be 4-16 characters"
              />
              <i className="ti-user"></i>
              {formErrors.username && (
                <small className="text-danger">{formErrors.username}</small>
              )}
              
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
              {formErrors.password && (
                <small className="text-danger">{formErrors.password}</small>
              )}
            </div>
            <div className="form-group">
              <style>
      {`
        
        .form-group select.form-control {
          padding-left: 40px;
          
        }
      `}
    </style>
              <select
                className="form-control"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <i className="ti-user"></i> 
              {formErrors.gender && (
                <small className="text-danger">{formErrors.gender}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
              {formErrors.city && (
                <small className="text-danger">{formErrors.city}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
              {formErrors.state && (
                <small className="text-danger">{formErrors.state}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
              {formErrors.country && (
                <small className="text-danger">{formErrors.country}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
              {formErrors.zipcode && (
                <small className="text-danger">{formErrors.zipcode}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <i className="icon-address-book"></i>
              {formErrors.address && (
                <small className="text-danger">{formErrors.address}</small>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
              {formErrors.phoneNumber && (
                <small className="text-danger">{formErrors.phoneNumber}</small>
              )}
            </div>
            <button
              type="submit"
              className="btn_1 rounded full-width"
            >
              Register Now!
            </button>
            <div className="text-center add_top_10">
              Already have an account?{" "}
              <strong>
                <a href="/login">Sign In</a>
              </strong>
            </div>
          </form>
          <div className="copy">© {new Date().getFullYear()} Review System</div>
        </aside>
      </div>
    </div>
  );
};

export default UserRegisterPage;