import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";

function App() {
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
          Learn React
        </a>
      </header>
    </div>
  );
}

// const name = "Josh Perez";
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(element, document.getElementById("master"));

const element = (
  <div>
    <h1>Hello World aaakakakak</h1>
  </div>
);

const cahya = document.querySelector("#master");
ReactDOM.render(element, cahya);

const e  = React.createElement;


function button(){
  return e(
    {
      onClick: () => this.s
    }
  )
}


export default App;
