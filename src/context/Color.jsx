import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const UseDataContext = () => {
  return useContext(DataContext);
};
export const DataContextProvider = (props) => {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };
  if (clicked) {
    document.body.style.backgroundColor = "rgb(246, 248, 250)";
  } else {
    document.body.style.backgroundColor = "black";
  }
  return (
    <DataContext.Provider value={{ clicked, setClicked, handleClick }}>
      {props.children}
    </DataContext.Provider>
  );
};
