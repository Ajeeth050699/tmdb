import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import Main from "../components/Dashboard/Main"

const Friend = ({availability, setAvailability}) => {
  return (
    <>
      <div className="App">
        <Main/>
      </div>
    </>
  );
};

export default Friend;
