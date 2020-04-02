import React, { Component } from 'react';
import { INotificationsStore } from 'stores/NotificationsStore/interface';
import { inject, observer } from 'mobx-react';

interface Props {
    notificationsStore: INotificationsStore
}

@inject('notificationsStore')
@observer
export default class Notifications extends Component<Props> {
    render(){
        return(
            <>Тут уведомления</>
        );
    }
}