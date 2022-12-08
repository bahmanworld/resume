import { useState } from "react";
import Avatar from "./assets/avatar.png";
import "./App.css";

function App() {
  return (
    <div id="app">
      <div id="box">
        <header>
          <img
            src={Avatar}
            style={{ width: 100, height: 100, borderRadius: 250 }}
          />
        </header>
        <div id="inner">Bahman World</div>
      </div>
    </div>
  );
}
export default App;
