import React from "react";
import "./design.css";

const Login = () => (
  <div className="Content">
    <form>
      <h1 >Login</h1>
      <label >
        Email:
        <input type="text" name="email" required />
      </label>
      <label >
        Password:
        <input type="text" name="password" required />
      </label>

      <div className="outer">
        <div >
          <input type="checkbox" id="Remember Me" name="remember" />
          <label for="rm" >Remember Me</label>
        </div>
        <div >
          <a className="ForgotPassword" href="/">Forgot Password?</a>
        </div>
      </div>


      <div className="outer">
        <button className="LoginButton" type="submit">Login</button>
        <button className="SignupButton" type="submit">Sign Up</button>
      </div>



    </form>


  </div>
);

export default Login;