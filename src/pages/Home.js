import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useInput from "../useInput";

function Home() {
  const name = useInput("");
  const comment = useInput("");
  const { data } = useParams();
  const fileData = useInput("");
  const [loaderState, setLoaderState] = useState("idle");

  const submitForm = (e) => {
    e.preventDefault();
    if (name.value !== "" && comment.value !== "")
      alert(`email:${data}\n name:${name.value}\n comments:${comment.value}`);
    else alert("Please fill inputs");
  };
  const fileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadstart = () => {
      setLoaderState("pending");
    };
    fileReader.onloadend = () => {
      try {
        setTimeout(() => {
          setLoaderState("resolved");
          fileData.setValue(fileReader.result);
        }, 3500);
      } catch (e) {
        console.log("error");
      }
    };

    if (uploadedFile !== undefined) fileReader.readAsText(uploadedFile);
    else fileData.setValue(null);
  };

  return (
    <div className="centerContent">
      <h2>
        Welcome to the home page Your Email id is -
        <span style={{ color: "rebeccapurple" }}> {data}</span>
      </h2>
      <form onSubmit={(e) => submitForm(e)}>
        <div>
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
        <div>
          <label htmlFor="input_file">Select File - &nbsp; </label>
          <input onChange={fileUpload} id="input_file" type="file" />
          {loaderState === "pending" && <p>Loading...</p>}
          <p>{fileData && fileData.value}</p>
        </div>
      </form>
    </div>
  );
}

export default Home;
