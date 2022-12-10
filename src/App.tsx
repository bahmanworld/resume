import { useState } from "react";
import Avatar from "./assets/avatar.png";
import "./App.css";

function App() {
  return (
    <div id="app">
      <div id="container">
        <section>
          <div className="inner">
            <h1>About Me</h1>
            <div>Hello there, my name is Bahman Damia aka Bahman World.</div>
          </div>
        </section>

        <section>
          <div className="inner">
            <h1>Education</h1>
          </div>
        </section>

        <section>
          <div className="inner">
            <h1>Works</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
