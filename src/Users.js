import Axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [apiData, setAPIData] = useState(null);

  useEffect(() => {}, []);

  const getAPIData = async () => {
    try {
      const result = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setAPIData(result.data);
    } catch (e) {
      console.log("error", e.message);
    }
  };

  const cancelAPIData = () => {
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
  );
}

export default Users;
