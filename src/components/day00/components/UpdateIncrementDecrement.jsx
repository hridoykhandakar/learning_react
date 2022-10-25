function UpdateIncrementDecrement({
  incrementValue,
  decrementValue,
  hnadelIncrementValue,
  hnadelDrecementValue,
}) {
  return (
    <div className="flex gap-2">
      <input
        className="border border-black p-1"
        type="text"
        placeholder="increment"
        value={incrementValue}
        onChange={hnadelIncrementValue}
      />
      <input
        className="border border-black p-1"
        type="text"
        placeholder="Decrement"
        value={decrementValue}
        onChange={hnadelDrecementValue}
      />
    </div>
  );
}

export default UpdateIncrementDecrement;
