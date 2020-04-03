import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightContent from './components/RightContent';
import './css/main.css';
import Notifications from './components/Notifications';

function App() {
  return (
    <Router>
      <div className="app-container fixed-header fixed-sidebar body-tabs-shadow app-theme-white">
        <Header />
        <Notifications />
        <div className="app-main">
          <LeftSidebar />
          <RightContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
