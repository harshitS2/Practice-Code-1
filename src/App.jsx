import "./App.css";
import { UserContext } from "./store/provider.js";
import Parent from "./components/Parent.jsx";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Harshit");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="flex items-center text-center justify-center ">
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

export default App;
