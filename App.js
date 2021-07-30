import './App.css';
import { Switch, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import Forms from './Forms';

function App() {

  return (
    <div className="App">
      {/* <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/home">Home</Link>
      </nav>
      <h1>Hello Class</h1>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
       </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>*/}
  <Forms/>
    
    </div> 
   

  );
}

export default App;
