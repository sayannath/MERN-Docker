import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "localhost";
    const API_PORT = process.env.REACT_APP_API_PORT || "3001";
    const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
    console.log(API_BASE_ADDRESS);
    const fetchData = async () => {
      const result = await axios(`${API_BASE_ADDRESS}/test`);
      setResponse(result.data);
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello! I am Sayan Nath.
        </a>
      </header>
    </div>
  );
}

export default App;
