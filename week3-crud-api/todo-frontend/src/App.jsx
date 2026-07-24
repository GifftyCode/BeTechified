import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h1>My Todo App</h1>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.task}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
