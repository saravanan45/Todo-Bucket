import React, { useState } from "react";

const Home = ({ history }) => {
  return (
    <div className="home-container">
      <div className="home-header">Welcome</div>
      <div className="home-body">
        <button
          className="create-todo-button"
          onClick={() => history.push("/createTodo")}
        >
          Create new ToDo
        </button>
        <button
          className="existing-todo-button"
          onClick={() => history.push("/editTodo")}
        >
          Edit Existing ToDo
        </button>
      </div>
    </div>
  );
};

export default Home;
