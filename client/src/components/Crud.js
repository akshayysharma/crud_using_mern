import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Crud() {
  const [name, setName] = useState("");
  const [api, setApi] = useState([]);
  const [no, setNo] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/details").then((Res) => {
      console.log(Res.data.name);
      setApi(Res.data.name);
    });
  }, [no]);

  const onClickData = () => {
    axios
      .post("http://localhost:5000/api/data", {
        name,
      })
      .then((Res) => {
        console.log(Res.data.data);
      });
    setNo((number) => number + 1);
  };

  const showData = api.map((item) => <li key={item._id}>{item.name}</li>);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => onClickData()}>Add</button>
      {showData}
    </div>
  );
}
