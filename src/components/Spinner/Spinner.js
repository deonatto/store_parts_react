import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: "40px",
};

const Spinner = () => {
  return <FadeLoader cssOverride={override} color="#1b36e5" />;
};

export default Spinner;
