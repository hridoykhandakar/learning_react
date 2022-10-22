import { useState } from "react";
import "./Calclutor.module.scss";

/*
*TODO

*/
const initialValue = {
  a: 0,
  b: 0,
};
const Calclutor = () => {
  const [value, setValue] = useState({ ...initialValue });

  const handleInputs2 = (e) => {
    // setValue({ ...initialValue, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleInputs = (e) => {
    setValue({
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const clearForm = () => {
    setValue({ ...initialValue });
  };
  return (
    <main>
      <div className="container w-96 mx-auto">
        <h1>Result : 0</h1>
        <div className="input flex flex-col  gap-3">
          <p>Inputs</p>
          <input
            onChange={handleInputs}
            type="text"
            name="a"
            className=" border-black border-2 p-1"
            value={value.a}
          />

          <input
            type="text"
            name="b"
            id=""
            className="border-2 border-black p-1"
            value={value.b}
            onChange={handleInputs}
          />
        </div>
        <div className="operation mt-3 flex gap-2">
          <button className="bg-blue-500 text-white  py-2 px-4 rounded ">
            +
          </button>
          <button className="bg-blue-500 text-white  py-2 px-4 rounded">
            -
          </button>
          <button className="bg-blue-500 text-white  py-2 px-4 rounded">
            *
          </button>
          <button className="bg-blue-500 text-white  py-2 px-4 rounded">
            /
          </button>
          <button
            onClick={clearForm}
            className="bg-red-500 text-white  py-2 px-4 rounded"
          >
            Clear
          </button>
        </div>
        <div className="history">
          <p>History</p>
          <p>
            <small>There is no History</small>
          </p>
        </div>
      </div>
    </main>
  );
};
export default Calclutor;
