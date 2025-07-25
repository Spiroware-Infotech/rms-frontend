import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NiceSelect from "../components/common/NiceSelectDropdown/NiceSelect";
import { AppRoutes, dropdownCategoriesAPI, OrganizationSignUpAPI } from "../utils/constant";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    orgName: "",
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phoneNumber: "",
    pincode: "",
    catId: "",
    subId: 1,
  });
  useEffect(() => {
    axios
      .get(`${dropdownCategoriesAPI}`)
      .then((res) => {
        if (res.data.success) {
          const formatted = res.data.data.map((cat) => ({
            value: cat.id,
            label: cat.name,
          }));
          setCategories(formatted);
        }
      })
      .catch((err) => console.log("Category fetch error", err));
  }, []);
  const validateForm = () => {
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    // Category required
    if (!formData.catId) {
      errors.catId = "Please select a category";
    }
    console.log(errors, "validation");

    return errors;
  };

  const handleCategoryChange = (value) => {
    setFormData((prev) => ({ ...prev, catId: value }));
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
      setFormErrors(errors); // Show validation errors
      return; // STOP submission if there are errors
    }

    setFormErrors({}); // Clear previous errors

    try {
      const res = await axios.post(`${OrganizationSignUpAPI}`, formData);
      if (res.data.success) {
        alert(
          "Registration successful! Please check your email for the verification code."
        );
        console.log(formData);
        setTimeout(
          () =>
            navigate(AppRoutes.VerificationPage, {
              state: { email: formData.email },
            }),
          200
        );

        // navigate('/verification');
        setCategories([]);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
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
          {/* <div className="access_social">
            <a href="#0" className="social_bt facebook">Register with Facebook</a>
            <a href="#0" className="social_bt google">Register with Google</a>
          </div> */}

          {/* <div className="divider"><span>Or</span></div> */}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Organization Name"
                name="orgName"
                value={formData.orgName}
                onChange={handleInputChange}
                required
              />
              <i className="ti-user"></i>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
              <i className="ti-user"></i>
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
              />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="password1"
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
              <input
                className="form-control"
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="city"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="state"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="country"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="phoneNumber"
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
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                id="pincode"
                placeholder="Pin code"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="form-group">
              <div
                className={`form-control d-flex justify-content-center align-items-center ${
                  !formData.catId && "border-danger"
                }`}
              >
                <NiceSelect
                  options={categories}
                  value={formData.catId}
                  onChange={handleCategoryChange}
                  className="category-dropdown"
                />
              </div>
              {formErrors.catId && (
                <small className="text-danger">{formErrors.catId}</small>
              )}
            </div>
            <div id="pass-info" className="clearfix"></div>

            <button
              type="submit"
              className="btn_1 rounded full-width"
              onClick={handleSubmit}
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

          <div className="copy">© {new Date().getFullYear()} Public Review System</div>
        </aside>
      </div>
    </div>
  );
};

export default RegisterPage;
