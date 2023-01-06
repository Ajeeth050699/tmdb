import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import Friend from "./Friend"

const Child = ({name}) => {

    const [availability, setAvailability] = React.useState('yes')
  return (
    <>
      <Friend availability={availability} setAvailability={setAvailability}/>
    </>
  );
};

export default Child;
