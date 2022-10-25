import { useState } from "react";
import Button from "./components/Button";
import UpdateIncrementDecrement from "./components/UpdateIncrementDecrement";

export default function Bpp() {
  const [count, setCount] = useState(0);
  const [incrementValue, setincrementValue] = useState(0);
  const [decrementValue, setdecrementValue] = useState(0);

  const hnadelIncrementValue = (e) => {
    setincrementValue(parseInt(e.target.value));
  };

  const hnadelDrecementValue = (e) => {
    setdecrementValue(parseInt(e.target.value));
  };
  const increment = () => {
    setCount(count + incrementValue);
  };
  const decrement = () => {
    setCount(count - decrementValue);
  };

  return (
    <div className="border flex flex-col items-center text-center ">
      <h1>THIS IS COUNTER</h1>
      <p>Number : {count}</p>

      <UpdateIncrementDecrement
        incrementValue={incrementValue}
        decrementValue={decrementValue}
        hnadelIncrementValue={hnadelIncrementValue}
        hnadelDrecementValue={hnadelDrecementValue}
      />

      <Button increment={increment} decrement={decrement} />
    </div>
  );
}
