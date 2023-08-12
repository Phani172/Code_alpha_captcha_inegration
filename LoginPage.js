import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './LoginPage.css';
const LoginPage = () => {
    const [verified, setVerified] = useState(false);
    function onChange(value) {
        this.setVerified(true);
    };
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                    />
                </div>
                <ReCAPTCHA
                    sitekey="6Lc5ZJ4nAAAAAL7ctsJc1WwPiN43Zm8lobGIfrf5"
                    onChange={onChange}
                />
                <button type="submit" class="login-button" disabled>
                    Login</button>
            </form>
        </div>
    );
};
export default LoginPage;