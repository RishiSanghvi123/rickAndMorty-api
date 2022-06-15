import "./App.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import OneChar from "./OneChar";
import { useNavigate } from "react-router-dom";
//import id from "faker/lib/locales/id_ID";

export default function Main({ data }) {
  //   const [toggle, setToggle] = useState(true);
  // function handleClick(e) {
  //   //   e.target.height = e.target.height === 500 ? 300 : 500;
  //   //   e.target.wodth = e.target.width === 500 ? 300 : 500;
  //   //   char.show = !char.show;
  //   //   setToggle(!toggle);
  //   //   //console.log("char:",char.show)
  //   //const navigate = useNavigate();
  //   //navigate.push("/OneChar", { params: e });
  // }
  let navigate = useNavigate();
  return (
    <div className="container">
      <h1>Know your Rick & Morty characters</h1>
      {data.map((char, index) => {
        return (
          <div key={index} className="charContainer">
            {/* <h1>{char.name}</h1>
              <h2>
                Species: {char.species}
                <br />
                {char.show && (
                  <div>
                    <p className="addInfo">Status: {char.status}</p>
                    <p className="addInfo">
                      Number of episodes: {char.episode.length}
                    </p>
                    <p className="addInfo">Gender: {char.gender}</p>
                    <p className="addInfo">Location: {char.location.name}</p>
                  </div>
                )}
              </h2>
          <img src={char.image} onClick={(e) => handleClick(e, char)} /> */}
            <img
              className="image"
              src={char.image}
              alt={char.id}
              style={{ width: "100%", height: 100 }}
              onClick={() => navigate(`/OneChar/${index}`)}
            />
          </div>
        );
      })}
    </div>
  );
}
