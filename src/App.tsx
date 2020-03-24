import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightContent from './components/RightContent';
import './css/main.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-main">
        <LeftSidebar />
        <RightContent />
      </div>
    </Router>
  );
}

export default App;
