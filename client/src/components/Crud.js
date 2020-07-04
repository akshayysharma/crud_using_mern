import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Crud() {
  const [name, setName] = useState("");
  // const [api, setApi] = useState([]);

  // useEffect(() => {
  //   axios.get('').then(Res => console.log(Res.data))
  // });

  const onClickData = () => {
    axios
      .post("http://localhost:5000/api/data", {
        name,
      })
      .then((Res) => {
        console.log(Res.data.data);
      });
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => onClickData()}>Add</button>
    </div>
  );
}
