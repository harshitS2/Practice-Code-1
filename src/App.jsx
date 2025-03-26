import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <>
      <h1>UseEffect</h1>
      <p>Rendered {count} times</p>
      <p>This renders only once when the page loads</p>
    </>
  );
}

export default App;
