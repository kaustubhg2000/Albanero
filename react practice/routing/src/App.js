import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Careers from './components/pages/careers';
import Gallery from './components/pages/gallery';
import Aboutus from './components/pages/Aboutus';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>

        <Home />
        <Routes>
          <Route exact path='/' />
        </Routes>

        <Careers />
        <Routes>
          <Route exact path='/careers' />
        </Routes>

        <Aboutus />
        <Routes>
          <Route exact path='/aboutus' />
        </Routes>

        <Gallery />
        <Routes>
          <Route exact path='/gallery' />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
