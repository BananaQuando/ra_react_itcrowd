import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import HeaderProfile from '../HeaderProfile';
import { IUserStore } from 'stores/UserStore/interface';
import { inject, observer } from 'mobx-react';

interface Props {
    userStore?: IUserStore
}

@inject("userStore")
@observer
export default class Header extends Component<Props> {
    logoutHandle = async () => {
        await this.props.userStore?.userLogout();
    }
    render() {
        return (
            <div className="app-header header-shadow bg-dark header-text-light">
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
                <div className="app-header__content">
                    <div className="app-header-left">
                        <Breadcrumbs />
                    </div>
                    <div className="app-header-right">
                        <HeaderProfile />
                        <div className="header-btn-lg">
                            <button type="button" className="btn btn-gradient-danger" onClick={this.logoutHandle}>
                                <i className="lnr-exit"> </i> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}