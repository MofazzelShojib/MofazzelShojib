import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './Footer';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skill from './Skill';
import Project from './Project';
import About from './About';

function App() {
  return (

    <Router>

      <div className="app">

        <Switch>

          <Route path="/about">
            <Header/>
            <About/>
            <Footer/>
          </Route>

          <Route path="/workexperience">
            <Header/>
            <WorkExperience/>
            <Footer/>
          </Route>

          <Route path="/education">
            <Header />
            <Education />
            <Footer/>
          </Route>

          <Route path="/skill">
            <Header />
            <Skill />
            <Footer/>
          </Route>

          <Route path="/project">
            <Header />
            <Project />
            <Footer/>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default App;
