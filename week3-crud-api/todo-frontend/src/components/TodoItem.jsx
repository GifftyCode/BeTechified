const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} readOnly />
      <span className={todo.completed ? "completed" : ""}>{todo.task}</span>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
