Here’s the updated **Solution.md** content incorporating `useReducer` along with `useEffect` and `useContext`:

---

# React Hooks – `useEffect`, `useContext`, and `useReducer`

## **1️⃣ `useEffect` – Handling Side Effects in React**

The `useEffect` hook allows functional components to handle side effects like API calls, subscriptions, timers, and DOM manipulations.

### **🔹 Basic Syntax**
```jsx
import { useEffect } from "react";

useEffect(() => {
  // Side effect logic
});
```
However, this runs on **every render**, which is usually not desired.

---

### **🔹 Dependency Array & Execution Control**

#### **1️⃣ Running Only on Mount (`componentDidMount`)**
```jsx
useEffect(() => {
  console.log("Component mounted");
}, []); // Empty dependency array -> runs only once after mount
```
- Useful for **fetching data** or **setting up subscriptions**.

---

#### **2️⃣ Running on Specific State Changes**
```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]); // Runs whenever 'count' changes
```
- Runs the effect **only when `count` changes**.

---

#### **3️⃣ Cleanup on Unmount (`componentWillUnmount`)**
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval running...");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Cleanup on unmount");
  };
}, []);
```
- The cleanup function runs when the component unmounts.

---

#### **4️⃣ Running on Mount & State Changes (`componentDidUpdate`)**
```jsx
useEffect(() => {
  console.log("Component updated, state changed");
});
```
- **No dependency array → Runs on every render**.

---

### **🔹 Common Use Cases**
| Use Case | `useEffect` Configuration |
|----------|--------------------------|
| Fetching data on mount | `useEffect(() => {...}, [])` |
| Syncing state with local storage | `useEffect(() => {...}, [state])` |
| Subscribing to real-time data | `useEffect(() => { socket.on(...); return () => socket.off(...); }, [])` |

---

## **2️⃣ `useContext` – State Management Without Prop Drilling 🚀**

The `useContext` hook allows **sharing state** between components **without prop drilling**.

### **🔹 The Problem: Prop Drilling**
```jsx
function App() {
  const [user, setUser] = useState("Harshit");
  return <Parent user={user} />;
}
```
- The `user` state is **passed down** multiple levels.

---

### **🔹 Solution: `useContext`**
#### **1️⃣ Create a Context**
```jsx
import { createContext } from "react";

const UserContext = createContext();
```

---

#### **2️⃣ Provide Context (Wrap the Parent Component)**
```jsx
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Harshit");

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}
```
---

#### **3️⃣ Consume Context in a Child Component**
```jsx
import { useContext } from "react";

function Child() {
  const user = useContext(UserContext);
  return <p>Hello, {user}!</p>;
}
```
- Now, `Child` can **access the global state directly**.

---

### **🔹 Using Context for Global State (State + Function Updates)**
```jsx
const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Harshit");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Child />
    </UserContext.Provider>
  );
}
```

```jsx
function Child() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <p>Hello, {user}!</p>
      <button onClick={() => setUser("John Doe")}>Change Name</button>
    </>
  );
}
```
- The `button` updates `user`, and it reflects in **all components using `UserContext`**.

---

## **3️⃣ `useReducer` – State Management Alternative to `useState`**
The `useReducer` hook is useful for managing **complex state logic**.

### **🔹 Syntax**
```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

---

### **🔹 Example Implementation**
```jsx
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="font-bold text-5xl">useReducer</h2>
      <div className="text-center">
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
```
---

## **🔹 When to Use `useReducer` vs. `useState`**
| Use `useState` When | Use `useReducer` When |
|---------------------|---------------------|
| State logic is simple | State logic is complex (e.g., multiple state variables) |
| Few state updates | State updates depend on the previous state |
| No need for centralized state | You need to manage global state with `useContext` |

---

## **Conclusion**
✅ `useEffect` – Handles side effects like API calls and event listeners.  
✅ `useContext` – Provides **global state management** without prop drilling.  
✅ `useReducer` – Manages **complex state logic** efficiently.  

These hooks **enhance React development** by making state management and side effects **simpler and more structured**. 🚀