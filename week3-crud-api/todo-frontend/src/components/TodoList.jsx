import TodoItem from "./TodoItem";

const TodoList = ({ todos, onTodoUpdated }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onTodoUpdated={onTodoUpdated} />
      ))}
    </div>
  );
};

export default TodoList;
