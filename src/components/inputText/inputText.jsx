import { useState } from "react";

const InputText = () => {
  const [valueEnter, setSValueEnter] = useState("");
  const changeValueEnter = (event) => {
    setSValueEnter(event.target.value);
  };
  return (
    <>
      <label>
        enter text:
        <input type='text' value={valueEnter} onChange={changeValueEnter} />
      </label>
      
    </>
  );
};

// text, password,email,date,color,time
//checkbox
//radio
//select

export default InputText;
