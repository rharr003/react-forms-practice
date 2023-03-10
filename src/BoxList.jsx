import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addItem(data) {
    setBoxes((boxes) => [...boxes, data]);
    console.log(boxes);
  }

  function handleDelete(boxIdx) {
    let newBoxes = boxes.filter((val, idx) => idx !== boxIdx);
    setBoxes(newBoxes);
  }
  return (
    <div>
      {boxes.map((val, index) => (
        <Box
          width={val.width}
          height={val.height}
          color={val.color}
          handleDelete={() => handleDelete(index)}
        />
      ))}
      <NewBoxForm addItem={addItem} />
    </div>
  );
}

export default BoxList;
