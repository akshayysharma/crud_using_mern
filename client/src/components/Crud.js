import React, { useState } from "react";

export default function Crud() {
  const [name, setName] = useState("");
  const [api, setApi] = useState([]);

  const onClickData = () => {
    console.log("api data");
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
