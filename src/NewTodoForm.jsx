import { useState } from "react";

function NewToDoForm({ addItem }) {
  const initialData = {
    task: "",
  };
  const [formData, setFormData] = useState(initialData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addItem(formData);
    setFormData(initialData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        placeholder="task"
        value={formData.task}
        onChange={handleChange}
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewToDoForm;
