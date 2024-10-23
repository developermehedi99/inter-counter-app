import { useState } from "react";
import Button from "./Button";
import InputNum from "./InputNum";

const Count = () => {
  const [count, setCount] = useState(100);
  const [incrementValue, setIncrementValue] = useState(10);
  const [decrementValue, setDecrementValue] = useState(5);
  function handleIncre() {
    setCount(count + incrementValue)
  }
  function handleDecre() {
    setCount(count - decrementValue)
  }

  const handleIncreValue=(e)=>{
    setIncrementValue(parseInt(e.target.value))
  }
  const handleDecreValue=(e)=>{
    setDecrementValue(parseInt(e.target.value))
  }

  return (
    <div>
      <h1>Count:{count}</h1>
      <InputNum 
      incrementValue={incrementValue}
      decrementValue={decrementValue}
      handleIncreValue={handleIncreValue}
      handleDecreValue={handleDecreValue}
      ></InputNum>
      <Button dec={handleDecre}
      inc={handleIncre}
      ></Button>

    </div>
  );
};

export default Count;
