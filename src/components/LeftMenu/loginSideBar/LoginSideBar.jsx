import React from 'react';
import './LoginSideBar.css';

function LoginSideBar() {
  return (
    <div className="loginDiv">
      <div className="topHeading">
        <span>Login via registered number</span>
      </div>
      <div className="numberInputDiv">
        <div className="numberInputField">
          <span>+91 | </span>
          <input type="number" />
        </div>
      </div>
      <span className="sendOTP">
        SEND OTP
      </span>
      <div className="newUserReg">
        <p>New User? <span>REGISTER</span> </p>
      </div>
    </div>
  )
}

export default LoginSideBar