import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // unlimited renders
    // console.log("Rendered Once");
    // setCount((prev) => prev + 1);
  });
  return (
    <>
      <h1>UseEffect</h1>
      <p>Rendered {count} times</p>
    </>
  );
}

export default App;
