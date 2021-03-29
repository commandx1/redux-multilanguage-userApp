import React from "react";
import "./spinner.scss";

const Spinner = ({ users }) => {
  return <div className={`lds-dual-ring ${users && "users"}`}></div>;
};

export default Spinner;
