import React from "react";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        let status = "active";
        if (todo.completed) {
          status = "completed";
        } else if (todo.pending) {
          status = "pending";
        }
        return (
          <li
            key={todo.id}
            className={`todo-item ${
              todo.completed ? "completed" : ""
            } priority-${todo.priority.toLowerCase()}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="priority-label">[{todo.priority}]</span>
            <span className={`todo-title ${status}-title`}>{todo.title}</span>

            <button onClick={() => deleteTodo(todo.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
