import React from "react";

const Signup = () => (
  <div className="Content">
    <form className="SignUp">
      <h1 >Sign Up</h1>
      <div className="outer">
        <label>
          First Name:
          <input type="text" name="FirstName" required />
        </label>
        <label>
          Last Name:
          <input type="text" name="LastName" required />
        </label>
      </div>

      <div className="outer">
        <label>
          Phone Number:
          <input type="text" name="Phone" />
        </label>
        <input type="radio" id="Donor" name="usertype" />
        <label for="rm" >Donor</label>
        <input type="radio" id="Reciever" name="usertype" />
        <label for="rm" >Reciever</label>
        <input type="radio" id="Both" name="usertype" />
        <label for="rm" >Both</label>
      </div>

      <label>
        Email:
        <input type="text" name="Email" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>

      <div className="outer">
        <button className="LoginButton" type="submit">Sign Up</button>
        <p className="msg"> Already have an account?  <a href="\login"> Log in</a> </p>
      </div>

    </form>

  </div>
);

export default Signup;