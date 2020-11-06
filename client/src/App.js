import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [apiResponse, setApiRespone] = useState({apiResponse: ''});

  useEffect(() => {
    async function callAPI() {
      const res = await fetch('http://localhost:9000/testAPI');
      const data = await res.text();
      console.log(data)
      setApiRespone({ apiResponse: data });
    } 
    callAPI();
  
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p className="App-intro">{apiResponse.apiResponse}</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
