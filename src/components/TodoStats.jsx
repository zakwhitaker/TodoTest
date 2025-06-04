import React from 'react';

const TodoStats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;
  const highestPriority = todos
    .filter(todo => !todo.completed)
    .sort((a, b) => {
      const priorityValues = { 'Low': 1, 'Medium': 2, 'High': 3 };
      return priorityValues[b.priority] - priorityValues[a.priority];
    })[0];

  return (
    <div className="todo-stats">
      <div>Total: {total}</div>
      <div>Active: {active}</div>
      <div>Completed: {completed}</div>
      <div>
        Highest Priority Incomplete: {highestPriority ? `${highestPriority.title} (${highestPriority.priority})` : 'None'}
      </div>
    </div>
  );
}

export default TodoStats;