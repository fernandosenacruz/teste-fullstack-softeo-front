import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Patient from './pages/Patient';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient/:id" element={<Patient />} />
        <Route path="/patient/register/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
