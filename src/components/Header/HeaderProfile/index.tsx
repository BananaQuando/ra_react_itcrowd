import React from 'react';
import { IUserStore, IUserData } from '../../../stores/UserStore/interface';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';

interface Props {
    userStore?: IUserStore
}

@inject("userStore")
@observer
export default class HeaderProfile extends React.Component<Props> {

    @observable currentUser = {} as IUserData;

    @action async componentDidMount() {
        this.currentUser = this.props.userStore!.currentUser;
    }

    render() {
        return (
            <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                            <div className="btn-group">
                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                    <img width="42" className="rounded-circle" src="/assets/images/avatars/1.jpg" alt="" />
                                    {/* <i className="fa fa-angle-down ml-2 opacity-8"></i> */}
                                </a>
                            </div>
                        </div>
                        <div className="widget-content-left  ml-3 header-user-info">
                            <div className="widget-heading">
                                {this.currentUser.name}
                            </div>
                            <div className="widget-subheading">
                                {this.currentUser.email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}