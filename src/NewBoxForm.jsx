import { useState } from "react";

function NewBoxForm({ addItem }) {
  const initialData = {
    width: "",
    height: "",
    color: "",
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
        name="width"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      ></input>
      <input
        name="height"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      ></input>
      <input
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      ></input>
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
