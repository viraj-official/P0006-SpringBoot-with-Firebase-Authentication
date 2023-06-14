import * as React from "react";
import "./App.css";
function App() {
  const test = () => {
    fetch("https://boilerplate-42er.onrender.com/user/all")
      .then((response) => response.json())
      .then((data) => {
        alert("Hello "+ data[0]["firstName"] + " " + data[0]["lastName"])
      })
      .catch((error) => {
        alert("Not connect")
      });
  };
return (
    <div className="App">
      <button onClick={test}>Test</button>
    </div>
  );
}
export default App;