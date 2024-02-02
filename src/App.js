import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  let [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        console.log(response.data.results);
        setdata(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="head">The Rick and Morty API</h1>
      <div className="App d-flex">

        {
          data.length !== 0 ? data.map((item, index) => {
            return (
              <div key={index} className="box">
                <div className="ele d-flex">
                  <div className="upper">
                    <img src={item.image} width={'100%'} />
                  </div>
                  <div className="inner">
                    <h1>{item.name}</h1>
                    <div className="main">
                      <div className="circle" style={{ backgroundColor: item.status === "Alive" ? "green" : item.status === "unknown" ? "#9E9E9E" : "red" }}></div>
                      <h4 className="margin" >{item.status} - {item.species}</h4>
                    </div>
                    <h4 className="color">Last Known location:</h4>
                    <h3 className="margin">{item.location.name}</h3>
                    <h4 className="color">First seen in:</h4>
                    <h4 className="margin">{item.type}</h4>
                  </div>
                </div>
              </div>
            );
          }) :<div style={{display:'flex',justifyContent:'center',width:'100%'}} ><div class="loader load"></div></div>
        }
      </div>
    </>
  );
}

export default App;
