import React, { useState } from "react";
import "./App.css";
import UserCard from "./component/UserCard/UserCard";
import Navbar from "./component/Navbar/Navbar";
import Loader from "./component/Loader/Loader";
import { UseDataContext } from "./context/Color";

function App() {
  const { error, loading } = UseDataContext();
  return (
    <div>
      <Navbar />
      <div className="App flex flex-col items-center justify-center p-4">
        <div>
          {error && (
            <p className="error text-[#9d62f3] mt-4 pt-[9rem] text-[26px]">
              {error}!!
            </p>
          )}
          {loading ? (
            <div className="pt-[9rem]">
              <Loader loading={loading} />
            </div>
          ) : (
            !error && <UserCard />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
