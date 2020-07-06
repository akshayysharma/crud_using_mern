import React, { useState, useEffect } from "react";
import axios from "axios";
import "./crud.css";

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
    axios.put(`http://localhost:5000/api/data/:${id}`, { name }).then((Res) => {
      console.log(Res.data.data);
      setNo((number) => number + 1);
    });
  };

  const deleteData = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/data/:${id}`)
      .then((Res) => {
        console.log(Res.data);
        setNo((number) => number - 1);
      })
      .catch((err) => console.log(err));
  };

  const showData = api.map((item) => (
    <li key={item._id} className="order">
      <span className="data">{item.name}</span>
      <button
        className="btn lime  waves-effect waves-light"
        onClick={() => updateData(item._id)}
      >
        Update <i className="material-icons right">update</i>
      </button>
      <button
        className="btn red darken-1 waves-effect waves-light"
        onClick={() => deleteData(item._id)}
      >
        Delete <i className="material-icons right">delete</i>
      </button>
    </li>
  ));
  return (
    <div className="space">
      <div className="input">
        <div className="input-field">
          <i className="material-icons prefix">mode_edit</i>
          <input
            id="last_name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="last_name">Name</label>
        </div>
        <button
          className="btn green darken-1 waves-effect waves-light add"
          onClick={() => onClickData()}
        >
          Add
          <i className="material-icons right">add_box</i>
        </button>
      </div>
      {showData}
    </div>
  );
}
