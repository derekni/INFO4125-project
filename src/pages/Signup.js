import React from "react";

const Signup = () => (
  <div>
    <h1 className="title is-1">Sign Up</h1>
    <form>
      <label>
        First Name:
        <input type="text" name="FirstName" />
      </label>
      <label>
        Last Name:
        <input type="text" name="LastName" />
      </label>
      <label>
        Phone Number:
        <input type="text" name="Phone" />
      </label>
      <label>
        Email:
        <input type="text" name="Email" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>

  </div>
);

export default Signup;