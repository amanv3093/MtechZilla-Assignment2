import React, { useState } from "react";
import "./App.css";
import UserCard from "./component/UserCard/UserCard";
import Navbar from "./component/Navbar/Navbar";
import Loader from "./component/Loader/Loader";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setUserData(null);
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="App flex flex-col items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center  p-4 rounded"
        >
          <div className="search-bar flex justify-center items-center gap-2.5 m-5">
            <div className="search flex justify-start items-center gap-1.5 bg-transparent border-2 border-gray-300 rounded p-2.5 w-72 focus-within:bg-white focus-within:border-purple-500">
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
        <div>
          {error && <p className="error text-red-500 mt-4 pt-12">{error}</p>}
          {loading ? (
            <div className="pt-12">
              <Loader loading={loading} />
            </div>
          ) : (
            !error && <UserCard userData={userData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
