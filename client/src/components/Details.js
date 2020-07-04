import React, { useState } from "react";
import axios from "axios";

export default function Details() {
  const [details, setDetails] = useState([]);

  const clickMe = () => {
    axios
      .get("http://localhost:5000/api/details")
      .then((Res) => {
        console.log(Res.data);
        setDetails(Res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={() => clickMe()}>click</button>
      <div>{details.name}</div>
      <div>{details.age}</div>
    </div>
  );
}
