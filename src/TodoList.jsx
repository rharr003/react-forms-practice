import { useState } from "react";
import NewToDoForm from "./NewTodoForm";
import Todo from "./Todo";
function ToDoList() {
  const [Todos, setTodos] = useState([]);

  function addItem(data) {
    setTodos((Todos) => [...Todos, data]);
  }

  function handleDelete(ToDoIdx) {
    let newTodos = Todos.filter((val, idx) => idx !== ToDoIdx);
    setTodos(newTodos);
  }
  return (
    <div>
      {Todos.map((val, index) => (
        <Todo task={val.task} handleDelete={() => handleDelete(index)} />
      ))}
      <NewToDoForm addItem={addItem} />
    </div>
  );
}

export default ToDoList;
