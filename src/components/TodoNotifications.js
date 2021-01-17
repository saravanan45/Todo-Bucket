import React, { useEffect, useState } from "react";

const TodoNotifications = ({ todos }) => {
  const [activeCount, setCount] = useState(0);

  useEffect(() => {
    const calculateCount = () => {
      if (todos && todos.length) {
        const activetodos = todos.filter((todo) => todo.status == "active");
        setCount(activetodos.length);
      }
    };
    calculateCount();
  }, [todos]);
  return (
    <div className="notify-container">
      <div className="notify-remain">{activeCount} items are active</div>
    </div>
  );
};

export default TodoNotifications;
