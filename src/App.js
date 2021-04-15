import { useState } from "react";
import "./App.css";

function App() {
  const [simpsonQuote, setSimpsonQuote] = useState("");

  const getSimpson = () => {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.json())
      .then((data) => setSimpsonQuote(data[0]));
  };

  return (
    <div className="App">
      <button onClick={getSimpson}>Get new Simpson!</button>
      <div>
        <h1>{simpsonQuote.character}</h1>
        <img src={simpsonQuote.image} />
        <p>{simpsonQuote.quote}</p>
      </div>
    </div>
  );
}

export default App;
