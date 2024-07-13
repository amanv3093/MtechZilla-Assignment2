import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const UseDataContext = () => {
  return useContext(DataContext);
};
export const DataContextProvider = (props) => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  if (clicked) {
    document.body.style.backgroundColor = "rgb(246, 248, 250)";
  } else {
    document.body.style.backgroundColor = "black";
  }
  return (
    <DataContext.Provider
      value={{
        clicked,
        setClicked,
        handleClick,
        username,
        setUsername,
        userData,
        setUserData,
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
