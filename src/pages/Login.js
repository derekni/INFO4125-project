import React from "react";

const Login = () => (
  <div>
    <h1 className="title is-1">Login</h1>
    <form>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>

    <p> No account? Click <a href="/signup">here</a></p>
  </div>
);

export default Login;