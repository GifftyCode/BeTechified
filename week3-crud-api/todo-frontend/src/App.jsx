import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleTodoCreated = (newTodo) => {
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const handleTodoUpdated = (updatedTodo) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === updatedTodo.id ? "updatedTodo" : "todo",
      ),
    );
  };

  return (
    <div className="app">
      <header>
        <h1>My Todo App</h1>
        <p>Stay organized. Get things done.</p>
      </header>

      <TodoForm onTodoCreated={handleTodoCreated} />

      <TodoFilters />

      <TodoList todos={todos} onTodoUpdated={handleTodoUpdated} />
    </div>
  );
};

export default App;
