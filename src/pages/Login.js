import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const history = useHistory();
  const pat = /[a-z][a-z0-9]+@[a-z]+\.com/;
  const changeHandler = (e) => {
    setEmail(e.target.value);

    // if(pat.test(e.target.value))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      history.push(`/form-submit/${email}`);
    }, 3500);
  };

  return (
    <div className="centerContent">
      <div>
        <h2>Example for automation testing!</h2>
        <br />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group d-inline place-items-center">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              required
              autoFocus
              id="exampleInputEmail1"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => changeHandler(e)}
            />
            <br />
            <div className="centerContent">
              <button
                data-testid="submit"
                className="btn submit btn-primary"
                disabled={!pat.test(email)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {submit && <p> Loading ....</p>}
      </div>
    </div>
  );
}

export default Login;
