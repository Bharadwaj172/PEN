import { useState } from "react";
import "./App.css";
import photo1 from "./assets/photo1.jpeg";

function App() {
  // Name  of the person
  const [name, setName] = useState("Naresh Chala");

  // Date of death
  const [date, setDate] = useState(2045);

  // Lifespan
  const [age, setAge] = useState(60);

  const change = () => {
    setDate(date - 1);
    setAge(age - 1);
  };
  return (
    <>
      <div id="background">
        <div>
          <img src={photo1} id="photo1" />
          <div className="div name">
            <h1>{name}</h1>
          </div>
          <div className="div DOB">
            <h1>DOB: 22-7-1985</h1>
          </div>
          <div className="div DOD">
            <h1>DOD: 18-4-{date}</h1>
          </div>
          <div id="lifespan">
            <h1>Lifespan : {age}</h1>
          </div>
        </div>
        <button id="button" onClick={change}>
          Click!
        </button>
      </div>
    </>
  );
}

export default App;
