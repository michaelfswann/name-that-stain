import React from "react";
import logo from "../../logo.svg";
// import '../../App.css';

function Submit({ apiResponse }) {
  console.log(apiResponse);
  //console.log("6: " + apiResponse);
  return (
    <div>
      <header className="submit-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">{apiResponse}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit a stain for analysis: please don't include crime scene
          evidence!
        </a>
      </header>
    </div>
  );
}

export default Submit;
