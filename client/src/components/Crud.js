import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Crud() {
  const [name, setName] = useState("");
  const [api, setApi] = useState([]);
  const [no, setNo] = useState(0);
  // const [update, setUpdate] = useState("");

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

  const updateData = (id) => {
    console.log(id);
    axios.put(`http://localhost:5000/api/data/:${id}`, { name }).then((Res) => {
      console.log(Res.data.data);
      setNo((number) => number + 1);
    });
  };

  const showData = api.map((item) => (
    <li key={item._id}>
      {item.name} <button onClick={() => updateData(item._id)}>Update</button>
      <button>Delete</button>
    </li>
  ));
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => onClickData()}>Add</button>
      {/* <input
        type="text"
        value={update}
        onChange={(e) => setUpdate(e.target.value)}
      /> */}
      {showData}
    </div>
  );
}
