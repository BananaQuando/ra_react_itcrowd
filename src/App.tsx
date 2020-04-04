import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightContent from './components/RightContent';
import './css/main.css';
import Notifications from './components/Notifications';
import {
  Switch,
  Route,
} from "react-router-dom";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import HomePage from 'components/HomePage';

function App() {
  return (
    <Router>
      <div className="app-container fixed-header fixed-sidebar body-tabs-shadow app-theme-white">
        <Header />
        <Notifications />
        <div className="app-main">
          <LeftSidebar />
          <RightContent >
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/todo-list" exact component={TodoList} />
              <Route path="/todo-list/create-todo" exact component={TodoForm} />
              <Route path="/todo-list/:todoId" exact component={TodoForm} />
            </Switch>
          </RightContent>
        </div>
      </div>
    </Router>
  );
}

export default App;
