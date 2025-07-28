import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, saveAuth } from "../utils/helper/helper";
import { UserContext } from "../utils/UseContext/UserContext";

import { AppRoutes } from "../utils/constant";
const LoginPage = () => {
  const { isUserRegistered, setIsUserRegistered, setUserRole, userRole } =
    useContext(UserContext);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await loginUser({
        username: formData.userName,
        password: formData.password,
      });

      if (response.success) {
        const { accessToken, tokenType } = response.data;
        const role = response.data.user.role;
        console.log(role, "role");

        console.log(response, "loginresponse");
        const userId = response.data.user.userId;
        console.log("✅ Correct userId:", userId);

        console.log("Access Token:", accessToken);
        console.log("Token Type:", tokenType);
        saveAuth(accessToken, tokenType);
        localStorage.setItem("userId", userId);
        localStorage.setItem("isUserRegistered", "true");
        setIsUserRegistered(true);
        setUserRole(role);
        if (role === "ROLE_ORGANIZATION") {
          navigate(AppRoutes.OrganizationPage);
        }else if (role === "ROLE_USER") {
          navigate(AppRoutes.UserDashboard);
        } else {
          navigate(AppRoutes.Home);
        }
      } else {
        setError(response.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <nav id="menu" className="fake_menu"></nav>

      {isLoading && (
        <div id="preloader">
          <div data-loader="circle-side"></div>
        </div>
      )}

      <div id="login">
        <aside>
          <figure>
            <a href="/">
              <img
                src="/assets/img/prs-logo.png"
                width="120"
                height="55"
                alt="Vanno Logo"
                className="logo_sticky"
              />
            </a>
          </figure>

          <div className="divider">
            <span>Or</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="userName"
                className="form-control"
                name="userName"
                id="userName"
                placeholder="Username"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <i className="icon_mail_alt"></i>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <i className="icon_lock_alt"></i>
            </div>

            <div className="clearfix add_bottom_30">
              <div className="checkboxes float-start">
                <label className="container_check">
                  Remember me
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-end mt-1">
                <a id="forgot" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>

            {error && (
              <div
                className="error"
                style={{ color: "red", marginBottom: "10px" }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn_1 rounded full-width"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login to PRS"}
            </button>

            <div className="text-center add_top_10">
              New to Review System?{" "}
              <strong>
                <a href="/register">Sign up!</a>
              </strong>
            </div>
          </form>

          <div className="copy">© {new Date().getFullYear()} Public Review System</div>
        </aside>
      </div>
    </>
  );
};

export default LoginPage;
