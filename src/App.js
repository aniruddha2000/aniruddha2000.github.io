import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Resume from "./components/resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/">
            <div id="colorlib-page">
              <div id="container-wrap">
                <Sidebar></Sidebar>
                <div id="colorlib-main">
                  <Introduction></Introduction>
                  <About></About>
                  <Timeline></Timeline>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
