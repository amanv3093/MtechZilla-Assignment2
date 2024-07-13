import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loader = ({ loading }) => {
  return (
    <HashLoader
      color={"#9d62f3"}
      loading={loading}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
