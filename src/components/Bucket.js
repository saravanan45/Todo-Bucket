import React, { useEffect, useState } from "react";
import TodoTable from "./TodoTable";
import TodoNotifications from "./TodoNotifications";

import { connect } from "react-redux";
import {
  changeStatusforTodoInAPI,
  createNewTodoInAPI,
  deleteTodoInAPI,
  getTodoInfoFromAPI,
  updateExisitngTodoInAPI,
} from "../Redux/actions";

const Bucket = ({
  todolist,
  createNewTodo,
  bucketInfo = {},
  getTodoInfo,
  deleteTodo,
  updateEditedTodo,
  changeStatus,
}) => {
  const [bucketName, setBucketName] = useState("To-Do");
  useEffect(() => {
    const getInfoFromBackend = () => {
      const bucketName = localStorage.getItem("bucketName");
      setBucketName(bucketName);
      const bucket = localStorage.getItem("bucket");
      if (bucket === "old") {
        getTodoInfo(bucketName);
      }
    };
    getInfoFromBackend();
  }, []);

  return (
    <div className="container">
      <div className="header">{bucketName}</div>
      <div className="body">
        <TodoNotifications todos={todolist} />
        <TodoTable
          createNewTodo={createNewTodo}
          bucketInfo={bucketInfo}
          todos={todolist}
          deleteTodo={deleteTodo}
          updateEditedTodo={updateEditedTodo}
          changeStatus={changeStatus}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    todolist: state.todolist,
    bucketInfo: state.bucketInfo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createNewTodo: (data) => dispatch(createNewTodoInAPI(data)),
  getTodoInfo: (data) => dispatch(getTodoInfoFromAPI(data)),
  deleteTodo: (id) => dispatch(deleteTodoInAPI(id)),
  updateEditedTodo: (data) => dispatch(updateExisitngTodoInAPI(data)),
  changeStatus: (data) => dispatch(changeStatusforTodoInAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bucket);
