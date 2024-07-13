import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="user-card bg-white p-6 rounded-lg shadow-md mt-6 text-center">
      <img
        src={userData.avatar_url}
        alt={`${userData.login}'s avatar`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4">{userData.login}</h2>
      {userData.name && (
        <h3 className="text-lg text-gray-600">{userData.name}</h3>
      )}
      <p className="mt-2">Public Repos: {userData.public_repos}</p>
      <p>Public Gists: {userData.public_gists}</p>
      <p>
        Profile Created At:{" "}
        {new Date(userData.created_at).toISOString().split("T")[0]}
      </p>
    </div>
  );
};

export default UserCard;
