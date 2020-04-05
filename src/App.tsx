import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './css/main.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from 'pages/LoginPage';
import ContentPage from 'pages/ContentPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" component={ContentPage} />
      </Switch>
    </Router>
  );
}

export default App;
