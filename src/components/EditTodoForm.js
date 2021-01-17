import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getBucketsListFromStore,
  updateBucketInfoInStore,
} from "../Redux/actions";

const EditTodoForm = ({
  getBucketsList,
  bucketsList,
  history,
  updateBucketInfo,
}) => {
  const [buckets, setBuckets] = useState([]);
  const [category, setCategory] = useState("important");
  const [bucketName, setBucketName] = useState("");

  useEffect(() => {
    getBucketsList(category);
  }, []);

  useEffect(() => {
    const setBucketsList = () => {
      setBuckets(bucketsList);
      if (bucketsList.length) {
        changeBucketName(bucketsList[0].name);
      }
    };
    setBucketsList();
  }, [bucketsList]);

  const changeCategory = (e) => {
    setCategory(e.target.value);
    getBucketsList(e.target.value);
  };

  const changeBucketName = (value) => {
    setBucketName(value);
    localStorage.setItem("bucketName", value);
  };

  const openBucket = async () => {
    const data = {
      bucketName,
      category,
    };
    if (!bucketName.length) {
      return;
    }
    await updateBucketInfo(data);
    localStorage.setItem("bucket", "old");
    history.push("/bucket");
  };

  return (
    <div className="form-container">
      <div className="form-header"> Edit Todo </div>
      <div className="form-field">
        <span className="form-label">Category</span>
        <select
          className="category-dropdown"
          value={category}
          onChange={(e) => changeCategory(e)}
        >
          <option value="important">Important</option>
          <option value="updates">Updates</option>
        </select>
      </div>
      <div className="form-field">
        <span className="form-label">Select the Bucket</span>
        <select
          className="category-dropdown"
          value={bucketName}
          onChange={(e) => changeBucketName(e.target.value)}
        >
          {buckets && buckets.length
            ? buckets.map((bucket, index) => (
                <option key={index} value={bucket.name}>
                  {bucket.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <button className="create-button" onClick={() => openBucket()}>
        Edit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bucketsList: state.bucketsList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBucketsList: (data) => dispatch(getBucketsListFromStore(data)),
    updateBucketInfo: (data) => dispatch(updateBucketInfoInStore(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditTodoForm);
