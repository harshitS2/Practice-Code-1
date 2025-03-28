import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        return { count: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="font-bold text-5xl">useReducer</h2>
      <div className="text-center items-center">
        <h3 className="text-xl font-semibold text-gray-800">{state.count}</h3>
        <div className="flex gap-4 p-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => dispatch({ type: "increase" })}
          >
            Increase
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => dispatch({ type: "decrease" })}
          >
            Decrease
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
