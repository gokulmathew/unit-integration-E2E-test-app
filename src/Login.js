import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./common.css";

function Login({ history }) {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/form-submit/${email}`);
    // setTimeout(() => {
    //   setLoginSuccess(true);
    // }, 4500);
  };
  return (
    <div className="centerContent">
      <div>
        <h2>Example for cypress testing!</h2>
        <br />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group d-inline place-items-center">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              required
              autoFocus
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div className="centerContent">
              <button className="btn btn-primary submit">Continue</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
