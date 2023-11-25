// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import App from "./App";
import Api from "./Api";
import Home from "./Home";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Link className="links" to="/">Home Page</Link>|
    <Link className="links" to="/tictactoe">Tic-Tac-Toe Game</Link>|
    <Link className="links" to="/quotes">Inspirational Quotes</Link>
    <p><br /></p>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/tictactoe" element={<App />}></Route>
      <Route path="/quotes" element={<Api />}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
