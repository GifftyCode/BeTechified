import { useState } from "react";

function TodoForm() {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task,
      }),
    });
    const newTodo = await response;
    console.log(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done??"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
