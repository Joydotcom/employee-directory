import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
