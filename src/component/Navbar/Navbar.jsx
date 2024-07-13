import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-around px-5 py-4">
      <div className="flex items-center">
        <i className="fa-brands fa-github text-red-700 text-5xl"></i>
        <h1 className="text-red-700">GitHub</h1>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter a value"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <div className="bg-red-700 p-2 rounded cursor-pointer">
          <i className="fa-solid fa-magnifying-glass text-white"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
