import React, { useCallback, useState } from "react";

const TodoTable = ({
  todos = [],
  createNewTodo,
  deleteTodo,
  updateEditedTodo,
  changeStatus,
}) => {
  const [newTask, setNewTask] = useState("");

  const submitNewTodo = async () => {
    const bucketName = localStorage.getItem("bucketName");
    const data = {
      message: newTask,
      status: "active",
      bucketName: bucketName,
    };
    await createNewTodo(data);
    setNewTask("");
  };

  const changeContent = (e, id) => {
    if (e.currentTarget.textContent && !e.currentTarget.textContent.length) {
      return;
    }
    const changedText = e.currentTarget.textContent;
    const data = {
      message: changedText,
      id,
    };
    debounce(data);
  };

  const localDebounce = (func) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), 2000);
    };
  };

  const debounce = useCallback(
    localDebounce((data) => updateEditedTodo(data)),
    []
  );

  const changeStatusForTodo = (status, id) => {
    const data = {
      status: status === "active" ? "inActive" : "active",
      id,
    };
    changeStatus(data);
  };

  return (
    <table className="table">
      <tbody>
        <tr className="table-row">
          <td>
            <div className="new-task">
              <input
                className="add-todo-input"
                type="text"
                placeholder="Type what needs to be done?"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                className="submit-icon"
                onClick={() => {
                  submitNewTodo();
                }}
              >
                OK{" "}
                <span className="submit-icon-i">
                  <i className="fa fa-paper-plane"></i>
                </span>
              </button>
            </div>
          </td>
        </tr>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>
              <input
                className="radio-input"
                type="checkbox"
                id={`checkbox_${index}`}
                checked={todo.status === "inActive"}
              />
              <label
                htmlFor={`checkbox_${index}`}
                onClick={() => changeStatusForTodo(todo.status, todo.id)}
              ></label>
              <span
                className="todo-message"
                contentEditable
                onInput={(e) => changeContent(e, todo.id)}
              >
                {todo.message}
              </span>

              <span
                className="delete-todo"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <i className="fa fa-trash-o"></i>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
