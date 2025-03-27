### `useEffect` – Handling Side Effects in React

The `useEffect` hook is a fundamental part of React functional components, allowing you to handle side effects such as API calls, subscriptions, timers, and manual DOM manipulations.

---

## **Basic Syntax**
```jsx
import { useEffect } from "react";

useEffect(() => {
  // Side effect logic
});
```
However, this runs on **every render**, which is usually not desired.

---

## **Dependency Array & Execution Control**

### **1. Running Only on Mount (Component Did Mount)**
```jsx
useEffect(() => {
  console.log("Component mounted");
}, []); // Empty dependency array -> runs only once after mount
```
- This is equivalent to `componentDidMount` in class components.
- Useful for **fetching data** or **setting up subscriptions**.

---

### **2. Running on Specific State Changes**
```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]); // Runs whenever 'count' changes
```
- Runs the effect **only when `count` changes**.
- If multiple dependencies exist, it runs when **any one of them** changes.

---

### **3. Cleanup on Unmount (Component Will Unmount)**
To avoid memory leaks (e.g., for event listeners, intervals, or API subscriptions), return a cleanup function.
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval running...");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup function
    console.log("Cleanup on unmount");
  };
}, []);
```
- Runs once on mount.
- The **returned function executes when the component unmounts**, cleaning up the interval.

---

### **4. Running on Mount & State Changes (Component Did Update)**
```jsx
useEffect(() => {
  console.log("Component updated, state changed");
});
```
- **No dependency array → Runs on every render**.
- Useful for **debugging** or **tracing renders**.

---

## **Common Use Cases**
| Use Case | `useEffect` Configuration |
|----------|--------------------------|
| Fetching data on mount | `useEffect(() => {...}, [])` |
| Syncing state with local storage | `useEffect(() => {...}, [state])` |
| Listening for window resize | `useEffect(() => { window.addEventListener(...); return () => window.removeEventListener(...); }, [])` |
| Subscribing to real-time data | `useEffect(() => { socket.on(...); return () => socket.off(...); }, [])` |

---

## **Best Practices**
✅ **Use cleanup functions** for timers, subscriptions, or event listeners.  
✅ **Keep effects minimal** – avoid unnecessary re-renders.  
✅ **Structure API calls** inside `useEffect` properly to prevent infinite loops.  
✅ **Memoize functions** inside dependencies (`useCallback`) to prevent unnecessary executions.  


# `useContext` – State Management Without Prop Drilling 🚀  

The `useContext` hook in React allows **sharing state** between components **without prop drilling**, making it useful for global state management.

---

## **🔹 The Problem: Prop Drilling**  
When passing state through multiple component layers, prop drilling becomes a problem.  

```jsx
function App() {
  const [user, setUser] = useState("Harshit");

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>Hello, {user}!</p>;
}
```
- The `user` state is **passed down** multiple levels.
- **Problem:** If more components need access, it becomes hard to manage.

---

## **🔹 Solution: `useContext` to Avoid Prop Drilling**  
### **Step 1: Create a Context**
```jsx
import { createContext } from "react";

const UserContext = createContext();
```

---

### **Step 2: Provide Context (Wrap the Parent Component)**
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
- The `UserContext.Provider` makes the `user` state available to **all child components**.

---

### **Step 3: Consume Context in a Child Component**
```jsx
import { useContext } from "react";

function Child() {
  const user = useContext(UserContext);
  return <p>Hello, {user}!</p>;
}
```
- `useContext(UserContext)` **retrieves** the `user` state without prop drilling.  
- Now, `Child` can **access the global state directly**.

---

## **🔹 Using Context for Global State (State + Function Updates)**
To **share both state and functions**, pass an object as the context value.

### **1️⃣ Update Context to Include State & Setter**
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
---

### **2️⃣ Access and Modify Context in a Child Component**
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

## **🔹 Best Practices**
✅ **Use `useContext` for truly global state** (e.g., user auth, theme, language).  
✅ **Avoid overusing `useContext` for frequently changing state** (use Redux or Zustand instead).  
✅ **Wrap providers at the right level** (not too high or too deep).  
✅ **Combine `useContext` with `useReducer`** for complex state logic.

