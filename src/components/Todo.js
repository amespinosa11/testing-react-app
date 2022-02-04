import { useState } from "react";
const Todo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {isChecked ? "ON" : "OFF"}
      </label>
    </>
  );
};

export default Todo;
