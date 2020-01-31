import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar.jsx'
import Introduction from './components/introduction.jsx'
import About from './components/about.jsx'
import Experience from './components/experience.jsx'
import Projects from './components/projects.jsx'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
