import React, { useContext, useRef } from "react";
import { UserContext } from "../store/provider";

const Child = () => {
  const {user,setUser} = useContext(UserContext);
  const name = useRef("");
  const updateName = ()=>{
    setUser(name.current.value);
  }
  return (
    <div>
      Child is rendering user data coming from parent directly
      <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter you name" ref={name} required />
        </div>
      <p className="text-2xl">Name is {user}</p>
      <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={updateName}>Update</button>
    </div>
  );
};

export default Child;
