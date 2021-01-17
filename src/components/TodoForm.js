import React, { useState } from "react";

import { createBucketInfoInStore } from "../Redux/actions";
import { connect } from "react-redux";

const TodoForm = ({ updateBucketInfo, history }) => {
  const [bucketName, setBucketName] = useState("");
  const [category, setCategory] = useState("important");

  const submitButton = () => {
    if (!bucketName.length) {
      return;
    }
    const data = {
      name: bucketName,
      category,
    };
    localStorage.setItem("bucketName", bucketName);
    localStorage.setItem("bucketInfo", "new");
    updateBucketInfo(data);
    history.push("/bucket");
  };

  return (
    <div className="form-container">
      <div className="form-header"> Create Todo </div>
      <div className="form-field">
        <span className="form-label">Name of the bucket</span>
        <input
          className="form-input"
          type="text"
          placeholder="Bucket Name"
          value={bucketName}
          onChange={(e) => setBucketName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <span className="form-label">Set Category</span>
        <select
          className="category-dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="important">Important</option>
          <option value="updates">Updates</option>
        </select>
      </div>
      <button className="create-button" onClick={() => submitButton()}>
        Create
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBucketInfo: (data) => dispatch(createBucketInfoInStore(data)),
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
