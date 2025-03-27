
import "./App.css";
import {UserContext} from  "./store/provider.js"
import Parent from "./components/Parent.jsx"
import { use, useState } from "react";

function App() {
  const [user, setUser] = useState("Harshit");
  return (
    <UserContext.Provider value={user}>
      <Parent /> 
    </UserContext.Provider>
  );
}

export default App;
