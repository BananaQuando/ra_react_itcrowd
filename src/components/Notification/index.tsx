import React, { Component } from 'react';
import { INotificationItem, INotificationsStore } from 'stores/NotificationsStore/interface';
import { observable, action, observe } from 'mobx';
import { inject, observer } from 'mobx-react';

export interface Props {
    notificationID: string
    notificationData?: INotificationItem,
    notificationsStore?: INotificationsStore
}

@inject("notificationsStore")
@observer
export default class Notification extends Component<Props> {
    @observable notificationData = {} as INotificationItem;

    @action async componentDidMount(){
        // Получить уведомление по id и записать в переменную
        this.notificationData = await this.props.notificationsStore?.getNotification(this.props.notificationID);
    }

    @action removeNotification = async () => {
        await this.props.notificationsStore?.removeNotification(this.props.notificationID);
    }

    render() {
        return (
            <div onClick={this.removeNotification} className={`toast ${this.notificationData.type}`} aria-live="polite">
                <div className="toast-message">
                    {this.notificationData.text}
                </div>
            </div>
        );
    }
}