import React from 'react'; 
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './Footer';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skill from './Skill';
import Project from './Project';
import About from './About';
import Navbar from './Components/Navbar';


function App() {

  return (

    <Router>

      <div className="app">

        <Switch>

          <Route path="/about">
            <Navbar/>
            <About/>
            <Footer/>
          </Route>

          <Route path="/workexperience">
            <Navbar/>
            <WorkExperience/>
            <Footer/>
          </Route>

          <Route path="/education">
            <Navbar />
            <Education />
            <Footer/>
          </Route>

          <Route path="/skill">
            <Navbar />
            <Skill />
            <Footer/>
          </Route>

          <Route path="/project">
            <Navbar />
            <Project />
            <Footer/>
          </Route>

          <Route path="/signin">
            <Navbar/>
            <Footer/>
          </Route>

          <Route path="/">
            <Navbar/>
            <Home/>
            <Footer/>
          </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default App;
