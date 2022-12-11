import * as React from "react";
import Avatar from "./assets/avatar.png";
import "./App.css";
import Educations from "./sections/Educations";

function App() {
  return (
    <div id="app">
      <div id="container">
        <section>
          <div className="inner">
            <img
              src={Avatar}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                marginBottom: 20,
              }}
            />
            <h1 className="section-title">About Me</h1>
            <p>
              My name is Bahman Damya. I'm a web and mobile developer. I have
              10+ years experiece developing mobile and web applications with
              most popular frameworks and languages such as Javascript, Nodejs,
              Java, Kotlin, Swift, ReactJS, React Native.
            </p>
            <br />
            <div style={{ marginBottom: 5 }}>
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
            <h1 className="section-title">Portfolio</h1>
            <div>
              <q>No works found yet.</q>
            </div>
          </div>
        </section>

        <section>
          <div className="inner">
            <h1 className="section-title">Skills</h1>
            <div>
              <q>No skills found yet.</q>
            </div>
          </div>
        </section>

        <section>
          <div className="inner">
            <h1 className="section-title">Languages</h1>
            <div>
              <q>No languages found yet.</q>
            </div>
          </div>
        </section>

        <Educations />
      </div>
    </div>
  );
}
export default App;
