import React from "react";
import useInput from "./useInput";

function Home(props) {
  const name = useInput("");
  const comment = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log("sjdg");
    alert(
      `email:${props.match.params.data}\n name:${name.value}\n comments:${comment.value}`
    );
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
    </div>
  );
}

export default Home;
