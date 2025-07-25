import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./verification.css";
import {
  AppRoutes,
  organizationEmailVerficationAPI,
} from "../../../utils/constant";
import { UserContext } from "../../../utils/UseContext/UserContext";

const VerifyPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [resendTimer, setResendTimer] = useState(0);
  const [expiryTime, setExpiryTime] = useState(300); // 5 minutes = 300 seconds
  const [codeExpired, setCodeExpired] = useState(false);
  const location = useLocation();

  const email = location?.state?.email || "";
  const { setIsUserRegistered } = useContext(UserContext);

  useEffect(() => {
    if (!location.state || !location.state.email) {
      // Delay navigation to avoid issues during concurrent render
      setTimeout(() => navigate("/register"), 0);
    }
  }, [location, navigate]);

  useEffect(() => {
    if (expiryTime > 0) {
      const timer = setTimeout(() => setExpiryTime(expiryTime - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCodeExpired(true);
    }
  }, [expiryTime]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (codeExpired) {
      setError("The verification code has expired. Please resend the code.");
      return;
    }

    if (!code || code.length < 4) {
      setError("Please enter a valid verification code.");
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.get(
        `${organizationEmailVerficationAPI}?code=${code}`
      );
      if (res.data.success) {
        setSuccess("Verification successful! Redirecting to login...");
        localStorage.setItem("isUserRegistered", "true");
        setIsUserRegistered(true);
        setTimeout(() => navigate(AppRoutes.LoginPage), 200);
      } else {
        setError(res.data.message || "Verification failed. Try again.");
      }
    } catch (err) {
      console.error("Verification error:", err); // Log actual error
      if (err.response && err.response.data) {
        setError(
          err.response.data.message || "Something went wrong. Please try again."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // const handleResend = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await axios.post(
  //       "https://spiroware.com/reviewssystem/api/v1/auth/org/resend-code"
  //     );
  //     if (res.data.success) {
  //       setSuccess("Verification code resent successfully.");
  //       setResendTimer(30); // Lock resend for 30 seconds
  //       setExpiryTime(300); // Reset expiry to 5 minutes
  //       setCodeExpired(false);
  //       setCode("");
  //       setError("");
  //     } else {
  //       setError(res.data.message || "Failed to resend code.");
  //     }
  //   } catch {
  //     setError("Could not resend the code. Try again later.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="verify-container">
      <div className="verify-box">
        <img
          src="/assets/img/prs-logo.png"
          alt="Logo"
          className="verify-logo"
        />
        <h2>Verify Your Account</h2>
        <p>Enter the verification code sent to your email.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="verify-input"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />

          <div className="verify-timer">
            Code expires in:{" "}
            <span className={codeExpired ? "expired" : ""}>
              {formatTime(expiryTime)}
            </span>
          </div>

          {codeExpired && (
            <p className="verify-error">Code has expired. Please resend it.</p>
          )}
          {error && <p className="verify-error">{error}</p>}
          {success && <p className="verify-success">{success}</p>}

          <button
            type="submit"
            className="verify-button"
            disabled={isLoading || codeExpired}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <div className="resend-section">
          Didn’t get the code?{" "}
          <button
            type="button"
            className="resend-link"
            // onClick={handleResend}
            disabled={resendTimer > 0 || isLoading}
          >
            {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend Code"}
          </button>
        </div>

        <footer className="verify-footer">
          © {new Date().getFullYear()} Review System
        </footer>
      </div>
    </div>
  );
};

export default VerifyPage;
