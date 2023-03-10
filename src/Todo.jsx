function Todo({ task, handleDelete }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <p>{task}</p>
      </div>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default Todo;
