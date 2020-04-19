import React, { Component } from 'react';
import { INotificationsStore, INotificationList } from 'stores/NotificationsStore/interface';
import { inject, observer } from 'mobx-react';
import Notification from './Notification';
import { observable, action } from 'mobx';

interface Props {
    notificationsStore?: INotificationsStore
}

@inject('notificationsStore')
@observer
export default class Notifications extends Component<Props> {

    @observable notifications = [] as string[];

    async componentDidMount() {
        this.notifications = await this.props.notificationsStore?.getNotificationIDs();
    }

    @action test = async () => {
        await this.props.notificationsStore!.addNotification({
            id: 1,
            text: "Проверка добавления",
            type: "toast-warning",
            duration: 500
        });
    }

    render() {
        let notificationsList = this.notifications ? this.notifications.map((id) => (
            <Notification key={id} notificationID={id} />
        )) : '';
        return (
            <div id="toast-container" className="toast-top-right">
                {/* <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={this.test}
                >
                    Create Notification
                </button> */}
                {notificationsList}
            </div>
        );
    }
}