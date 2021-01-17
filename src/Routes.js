import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Bucket from "./components/Bucket";
import TodoForm from "./components/TodoForm";
import EditTodoForm from "./components/EditTodoForm";

const Routes = () => {
  return (
    <Router>
      <Route path="/bucket" component={Bucket} />
      <Route exact path="/" component={Home} />
      <Route path="/createTodo" component={TodoForm} />
      <Route path="/editTodo" component={EditTodoForm} />
    </Router>
  );
};
export default Routes;
