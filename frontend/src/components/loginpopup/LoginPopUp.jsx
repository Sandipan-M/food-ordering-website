import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleClosePopup = () => {
        setShowLogin(false);
    };

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    const handleBackToLogin = () => {
        setShowForgotPassword(false);
    };

    return (
        <div className='login-popup'>
            {!showForgotPassword ? (
                <form className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currState}</h2>
                        <img onClick={handleClosePopup} src={assets.cross_icon} alt="Close" />
                    </div>
                    <div className="login-popup-inputs">
                        {currState === "Sign Up" && <input type="text" placeholder='Your name' required />}
                        <input type="email" placeholder='Your email' required />
                        <input type="password" placeholder='Password' required />
                    </div>
                    <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                    <div className="login-popup-condition">
                        {currState === "Login" ? (
                            <span onClick={handleForgotPassword}>Forgot Password?</span>
                        ) : (
                            <>
                                <input type="checkbox" required />
                                <p>By continuing, I agree to the terms of use & privacy policy.</p>
                            </>
                        )}
                    </div>

                    {currState === "Login" ? (
                        <p>
                            Create a new account?{" "}
                            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <span onClick={() => setCurrState("Login")}>Login here</span>
                        </p>
                    )}
                </form>
            ) : (
                <form className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>Forgot Password</h2>
                        <img onClick={handleBackToLogin} src={assets.cross_icon} alt="Close" />
                    </div>
                    <div className="login-popup-inputs">
                        <input type="text" placeholder='Your name' required />
                        <input type="email" placeholder='Your email' required />
                    </div>
                    <button>Reset Password</button>
                </form>
            )}
        </div>
    );
};

export default LoginPopUp;
