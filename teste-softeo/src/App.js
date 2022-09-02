import React from 'react';
import Home from './pages/Home';
import './App.css';
import PatientsProvider from './context/Context';

function App() {
  return (
    <PatientsProvider>
      <Home />
    </PatientsProvider>
  );
}

export default App;
