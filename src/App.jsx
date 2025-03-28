import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="font-bold text-5xl">useReducer</h2>
      <div className="text-center items-center">
        <h3 className="text-xl font-semibold text-gray-800">{count}</h3>
        <div className="flex gap-4 p-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increase
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => setCount((prev) => prev - 1)}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
