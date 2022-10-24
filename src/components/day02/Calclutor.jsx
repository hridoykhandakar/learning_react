import { useState } from "react";
import "./Calclutor.module.scss";

/*
*TODO

*/

function* generateId() {
  let index = 0;
  while (true) {
    yield index;
    index++;
  }
}

const iterator = generateId();

const initialValue = {
  a: 0,
  b: 0,
};

const Calclutor = () => {
  const [value, setValue] = useState({
    ...initialValue,
  });

  const [historyList, setHistoryList] = useState([]);
  // const [firstValue, setFirstValue] = useState(0);
  // const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);
  const handleInputs = (e) => {
    if (e.target.name === "a") {
      setValue({ ...value, a: parseInt(e.target.value) });
    } else {
      setValue({ ...value, b: parseInt(e.target.value) });
    }
  };

  const handleArithmicsops = (operation) => {
    if (!value.a & !value.b) {
      alert("Enter The Value");
    }
    // const f = new Function(
    //   "operation",
    //   `return ${value.a} ${operation} ${value.b}`
    // );
    // setResult(f(operation));
    const result = eval(`${value.a} ${operation} ${value.b}`);
    setResult(result);
    const history = {
      id: iterator.next().value,
      inputs: value,
      operation,
      result,
      date: new Date(),
    };
    setHistoryList([history, ...historyList]);
  };

  // const handleInputsa = (e) => {
  //   setFirstValue(parseInt(e.target.value));
  // };
  // const handleInputsb = (e) => {
  //   setSecondValue(parseInt(e.target.value));
  // };

  const clearForm = () => {
    setValue({ ...initialValue });
    setResult(0);
  };

  const restoreHistory = (item) => {
    setValue({
      ...item.inputs,
    });
    // setValue({
    //   a: item.inputs.a,
    //   b: item.inputs.b,
    // });
    setResult(item.result);
  };

  return (
    <main>
      <div className="container w-96 mx-auto">
        <h1>Result : {result}</h1>
        <p>
          a: {value.a} | b: {value.b}
        </p>
        <div className="input flex flex-col  gap-3">
          <p>Inputs</p>
          <input
            type="text"
            name="a"
            className=" border-black border-2 p-1"
            value={value.a}
            onChange={handleInputs}
          />

          <input
            type="text"
            name="b"
            className="border-2 border-black p-1"
            value={value.b}
            onChange={handleInputs}
          />
        </div>
        <div className="operation mt-3 flex gap-2">
          <button
            onClick={() => handleArithmicsops("+")}
            className="bg-blue-500 text-white  py-2 px-4 rounded "
          >
            +
          </button>
          <button
            onClick={() => handleArithmicsops("-")}
            className="bg-blue-500 text-white  py-2 px-4 rounded"
          >
            -
          </button>
          <button
            onClick={() => handleArithmicsops("*")}
            className="bg-blue-500 text-white  py-2 px-4 rounded"
          >
            *
          </button>
          <button
            onClick={() => handleArithmicsops("/")}
            className="bg-blue-500 text-white  py-2 px-4 rounded"
          >
            /
          </button>
          <button
            onClick={() => handleArithmicsops("%")}
            className="bg-blue-500 text-white  py-2 px-4 rounded"
          >
            %
          </button>
          <button
            onClick={clearForm}
            className="bg-red-500 text-white  py-2 px-4 rounded"
          >
            Clear
          </button>
        </div>
        <div className="history">
          <strong>History</strong>
          {historyList.length === 0 ? (
            <p>
              <small>no History</small>
            </p>
          ) : (
            <ul>
              {historyList.map((item) => (
                <li key={item.id} className="border border-black p-2 ">
                  <p>
                    operation {item.inputs.a} {item.operation} {item.inputs.b}{" "}
                    <br />
                    <span>Result :{item.result} </span>
                  </p>
                  <button
                    onClick={() => restoreHistory(item)}
                    className="my-3 p-2 bg-yellow-400 text-white rounded"
                  >
                    Restore
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};
export default Calclutor;
