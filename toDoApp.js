import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [dataArr, setDataArr] = useState([]);

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = () => {
    data && setDataArr([...dataArr, data]);
    setData("");
  };

  return (
    <div className="App">
      <h1>To Do</h1>
      <div>
        <input
          placeholder="add data"
          value={data}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
        <ul>
          {dataArr.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
