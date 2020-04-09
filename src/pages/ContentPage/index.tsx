import React from 'react';
import Header from '../../components/Header';
import LeftSidebar from '../../components/LeftSidebar';
import RightContent from '../../components/RightContent';
import HomePage from 'pages/ContentPage/HomePage';
import TodoPage from 'pages/ContentPage/TodoPage';
import Notifications from '../../components/Notifications';
import { Switch, Route } from 'react-router-dom';
import ProjectsPage from './ProjectsPage';

export default class ContentPage extends React.Component {
    render() {
        return (
            <div className="app-container fixed-header fixed-sidebar body-tabs-shadow app-theme-white">
                <Header />
                <Notifications />
                <div className="app-main">
                    <LeftSidebar />
                    <RightContent >
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/todo-list" component={TodoPage} />
                            <Route path="/projects-list" component={ProjectsPage} />
                        </Switch>
                    </RightContent>
                </div>
            </div>
        );
    }
}