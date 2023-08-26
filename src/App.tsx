import React from 'react';
import './App.css';
import Sidenavigation from './components/layout/Sidenavigation';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='sidenavigation'>
            <Sidenavigation />
          </div>
          <div className='main-content'>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
