import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import OneChar from "./OneChar";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   data.map((char) => {
  //     char.results.forEach((item) => {
  //       item.show = false;
  //     });
  //     setData(char);
  //   });
  // }, []);

  // if (data === 0) {
  //   return <div></div>;
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main data={data} />} />
          <Route exact path="/OneChar/:id" element={<OneChar data={data} />} />
        </Routes>
      </Router>
      {/* <Main data={data.results} /> */}
    </div>
  );
}

export default App;
