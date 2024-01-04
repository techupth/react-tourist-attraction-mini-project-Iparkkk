import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TripGuide from "../components/TripGuide";
function App() {
  const [listTripGuide, setListTripGuide] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getDataTripGuide = async (text) => {
    let result = await axios.get(
      "http://localhost:4001/trips?keywords=" + text
    );
    setListTripGuide(result.data.data);
  };
  const hadleSearch = async (event) => {
    let text = event.target.value;
    setSearchText(text);
    getDataTripGuide(text);
  };

  useEffect(() => {
    getDataTripGuide(searchText);
  }, [searchText]);

  return (
    <div className="App">
      <h1>เที่ยวไหนดี</h1>
      <p>ค้นหาที่เที่ยว</p>
      <input
        onChange={hadleSearch}
        placeholder="หาที่เที่ยวแล้วไปกัน .."
        value={searchText}
      ></input>
      <hr></hr>
      {listTripGuide.map((item) => {
        return (
          <TripGuide
            key={item.eid}
            extraPhoto={item.photos.slice(0, 1)}
            title={item.title}
            description={item.description}
            url={item.url}
            tag={item.tags}
            photos={item.photos.slice(1)}
          />
        );
      })}
    </div>
  );
}

export default App;
