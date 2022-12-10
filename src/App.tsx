import * as React from "react";
import Avatar from "./assets/avatar.png";
import "./App.css";

function App() {
  return (
    <div id="app">
      <div id="container">
        <section>
          <div className="inner">
            <h4>About Me</h4>
            <div>
              My name is Bahman Damya. I'm a web and mobile developer. I have
              10+ years experiece developing mobile and web applications with
              most popular frameworks and languages such as Javascript, Nodejs,
              Java, Kotlin, Swift, ReactJS, React Native.
            </div>
            <br />
            <div style={{marginBottom: 5}}>
              <a href="mailto:bahman.world@gmail.com">
                📨 bahman.world@gmail.com
              </a>
            </div>
            <div>
              <a href="tel:+989367036819">📱 +989367036819</a>
            </div>
          </div>
        </section>

        <section>
          <div className="inner">
            <h4>Education</h4>
            <div>
              <q>No educations found yet.</q>
            </div>
          </div>
        </section>

        <section>
          <div className="inner">
            <h4>Skills</h4>
            <div>
              <q>No skills found yet.</q>
            </div>
          </div>
        </section>

        <section>
          <div className="inner">
            <h4>Languages</h4>
            <div>
              <q>No languages found yet.</q>
            </div>
          </div>
        </section>

        <section>
          <div className="inner">
            <h4>Portfolio</h4>
            <div>
              <q>No works found yet.</q>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
