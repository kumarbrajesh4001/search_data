import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const [data1, setData1] = useState([]);

  const [defaultShowData, setDefaultShowData] = useState(true);
  // console.log(data);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const allMatchData = [];

  const searchData = () => {
    
    const inputValue = document.getElementById("int").value;
    for (let i = 0; i < data.length; i++) {

      // if (data[i].title.includes(inputValue)) {
      //   allMatchData.push(data[i]);
      // }

      
      data[i].title.includes(inputValue) && setData1([data[i]]);
      

     
    }

    setDefaultShowData(false);
  };

  

  return (
    <div className="App">
      <h1>Search Box</h1>
      <input type="text" id="int" />
      <button
        onClick={() => {
          searchData();
        }}
      >
        Search
      </button>
      {defaultShowData
        ? data.map((cv) => (
            <div key={cv.id}>
              <div>{cv.title}</div>
              <div>{cv.body}</div>
            </div>
          ))
        : data1.map((cv) => (
            <div key={cv.id}>
              <div>{cv.title}</div>
              <div>{cv.body}</div>
            </div>
          ))}
    </div>
  );
}

export default App;
