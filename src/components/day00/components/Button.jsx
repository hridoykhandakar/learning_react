function Button({ increment, decrement }) {
  return (
    <div className="mt-3 flex gap-2">
      <button
        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-600 hover:bg-red-700  text-white p-2 rounded"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default Button;
