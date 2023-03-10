function Box({ width, height, color, handleDelete }) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${color}`,
        }}
        data-testid={color}
      ></div>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default Box;
