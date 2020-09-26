import React, { useState } from "react";
import { apiClient } from "../utils/api-client";

function Users() {
  const [apiData, setAPIData] = useState(null);
  const [error, setError] = useState(undefined);

  const getAPIData = async () => {
    // const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data);
    await apiClient("users").then(
      (results) => {
        setAPIData(results);
      },
      (e) => {
        setAPIData(null);
        setError(e.message);
      }
    );
  };

  const clearAPIData = () => {
    setAPIData(null);
  };
  return (
    <div>
      <h3>Get Data from API - [https://jsonplaceholder.typicode.com/users]</h3>
      <div>
        <button
          onClick={() => getAPIData()}
          className="btn btn-danger submit"
          id="get_data_btn"
        >
          Get Data
        </button>
        <button
          onClick={() => clearAPIData()}
          className="btn btn-secondary submit"
          id="get_data_btn"
          {...(apiData ? { disabled: false } : { disabled: true })}
        >
          Clear
        </button>
      </div>
      <ul>
        {apiData &&
          (apiData.length > 0
            ? apiData.map((user) => (
                <li data-testid="user" key={user.id}>
                  {user.email}
                </li>
              ))
            : "No users available")}
        {error === undefined
          ? !apiData && "Please click the button to fetch sample data"
          : error}
      </ul>
    </div>
  );
}

export default Users;
