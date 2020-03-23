import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeftSidebar extends Component {
    render() {
        return (
            <div className="app-sidebar sidebar-shadow bg-happy-green sidebar-text-light">
                <div className="app-header__logo">
                    <div className="logo-src"></div>
                    <div className="header__pane ml-auto">
                        <div>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic"
                                data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button"
                            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading">Menu</li>
                            <li className="mm-active">
                                <Link to="#">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    Dashboards
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="todo-list" className="mm-active">
                                            <i className="metismenu-icon">
                                            </i>Todo list
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}