import React from "react";
import Data from "./components/Data";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Data />
      </Wrapper>
    </div>
  );
}

export default App;
