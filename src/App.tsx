import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      
    </Router>
  );
}

export default App;
