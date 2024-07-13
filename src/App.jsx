import React, { useState } from "react";

import "./App.css";
import UserCard from "./component/UserCard/UserCard";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="App flex flex-col items-center justify-center   p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center bg-white p-4  rounded"
        >
          <div className="search-bar flex justify-center items-center gap-2.5 m-5">
            <div className="search flex justify-start items-center gap-1.5 bg-transparent border-2 border-gray-300 rounded p-2.5 w-72 focus-within:bg-white focus-within:border-purple-500">
              {/* <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-purple-500 text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.226 7.25c-2.623-4.542-8.432-6.098-12.974-3.475-4.543 2.622-6.099 8.431-3.477 12.974 2.623 4.542 8.431 6.099 12.974 3.477a.75.75 0 0 1 .75 1.299c-5.26 3.037-11.987 1.235-15.024-4.026C-.562 12.24 1.24 5.512 6.501 2.475 11.76-.562 18.488 1.24 21.525 6.501a10.959 10.959 0 0 1 1.455 4.826c.013.056.02.113.02.173v2.25a3.5 3.5 0 0 1-6.623 1.581 5.5 5.5 0 1 1 1.112-3.682.802.802 0 0 1 .011.129v1.972a2 2 0 1 0 4 0v-1.766a9.456 9.456 0 0 0-1.274-4.733ZM16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"></path>
            </svg> */}
              <i
                style={{ lineHeight: "0px" }}
                className="fa-brands fa-github text-purple-500 text-xl "
              ></i>
              <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={handleInputChange}
                required
                className="search-input bg-transparent outline-none w-full placeholder-gray-400 dark:placeholder-gray-400 text-purple-500"
              />
            </div>
            <button
              type="submit"
              className="text-white py-2.5 px-5 rounded font-inherit bg-gradient-to-b from-purple-500 to-purple-700 hover:bg-gradient-to-t"
            >
              Search
            </button>
          </div>
        </form>

        {error && <p className="error text-red-500 mt-4">{error}</p>}
        {userData && <UserCard userData={userData} />}
      </div>
    </>
  );
}

export default App;
