import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/index";
import Submit from "./components/submit/index";

function App() {
  const [apiResponse, setApiRespone] = useState({ apiResponse: "" });

  useEffect(() => {
    async function callAPI() {
      const res = await fetch("http://localhost:9000/stain");
      const data = await res.text();
      console.log(data);
      setApiRespone({ apiResponse: data });
    }
    callAPI();
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/submit">Submit A Stain</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/submit">
              <Submit apiResponse={apiResponse.apiResponse} />
            </Route>
            <Route path="/">
              <Home apiResponse={apiResponse.apiResponse} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
