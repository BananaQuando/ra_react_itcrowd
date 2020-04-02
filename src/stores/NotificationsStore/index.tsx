import { INotificationsStore, INotificationList } from './interface';
import { observable } from 'mobx';

export default class NotificationStore implements INotificationsStore {
    @observable notificationList = {} as INotificationList;

    addNotification(data: object){}

    getNotification(notificationID: number){}

    getNotifications(){}
}