import React, { useState } from "react";
import useInput from "./useInput";
import "./common.css";
import axios from "axios";

function Home(props) {
  const name = useInput("");
  const comment = useInput("");

  const [apiData, setAPIData] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("sjdg");
    alert(
      `email:${props.match.params.data}\n name:${name.value}\n comments:${comment.value}`
    );
  };

  const getAPIData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setAPIData(result.data);
    } catch (e) {
      console.log("error", e.message);
    }
  };

  const cancelAPIData = () => {
    setAPIData([]);
  };
  return (
    <div className="centerContent">
      <h2>
        Welcome to the home page! Your Email id is&nbsp;
        <span style={{ color: "rebeccapurple" }}>
          {props.match.params.data}
        </span>
      </h2>
      <form onSubmit={(e) => submitForm(e)}>
        <div>
          <label htmlFor=""></label>
          <label htmlFor="name_input">Name</label>
          <input
            data-cy="name_data_cy"
            type="text"
            id="name_input"
            required
            className="form-control"
            value={name.value}
            onChange={name.onChange}
          />
          <label htmlFor="comment_input">Comments</label>
          <textarea
            type="text"
            id="comment_input"
            required
            className="form-control"
            value={comment.value}
            onChange={comment.onChange}
          />
          <br />
          <div className="centerContent">
            <button className="btn btn-success submit">Post</button>
          </div>
        </div>
        <hr />
      </form>

      <div>
        <h3>
          Get Data from API - [https://jsonplaceholder.typicode.com/users]
        </h3>
        <div>
          <button
            onClick={() => getAPIData()}
            className="btn btn-danger submit"
            id="get_data_btn"
          >
            Get Data
          </button>
          <button
            onClick={() => cancelAPIData()}
            className="btn btn-secondary submit"
            id="get_data_btn"
          >
            Cancel
          </button>
        </div>
        <ul>
          {apiData
            ? apiData.length > 0
              ? apiData.map((user) => <li key={user.id}>{user.email}</li>)
              : "No users available"
            : "Please click the button to fetch sample data"}
        </ul>
      </div>
    </div>
  );
}

export default Home;
