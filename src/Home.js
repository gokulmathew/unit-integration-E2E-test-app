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
      setTimeout(() => {
        setAPIData(result.data);
      }, 4500);
      //setAPIData(result.data);
    } catch (e) {
      console.log("error", e.message);
    }
  };
  return (
    <div className="centerContent">
      <h2>
        Welcome to the home page! Your id is&nbsp;
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

      <div className="centerContent">
        <h3>Get Data from API</h3>
        <div className="centerContent">
          <button
            onClick={() => getAPIData()}
            className="btn btn-danger submit"
            id="get_data_btn"
          >
            Get Data
          </button>
        </div>
        <ul>
          {apiData &&
            apiData.map((user) => <li key={user.id}>{user.email}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Home;
