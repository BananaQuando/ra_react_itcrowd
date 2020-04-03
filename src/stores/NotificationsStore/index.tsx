import { INotificationsStore, INotificationList, INotificationItem } from './interface';
import { observable, action } from 'mobx';

export default class NotificationStore implements INotificationsStore {
    @observable notificationList = {} as INotificationList;
    @observable notificationIDs = [] as any[];

    @action addNotification(data: INotificationItem) {
        const notificationKey = Object.keys(this.notificationList).length;
        this.notificationIDs.push(notificationKey);
        this.notificationList[notificationKey] = this.createNotification(data);

        let { duration } = data;
        if(duration){
            setTimeout(() => {
                this.removeNotification(notificationKey);
            }, duration);
        }
    }

    @action createNotification(data: INotificationItem) {
        let { id, name, text, type, status, duration } = data;
        return {
            id,
            name,
            text,
            type,
            status,
            duration
        }
    }

    getNotification(notificationID: string) {
        return this.notificationList[notificationID];
    }

    @action getNotificationIDs() {
        for (const key in this.notificationList) {
            if (this.notificationList.hasOwnProperty(key)) {
                this.notificationIDs.push(key);
            }
        }
        return this.notificationIDs;
    }

    @action removeNotification(notificationID: string | number) {
        const index = this.notificationIDs.indexOf(notificationID, 0);
        if (index > -1) {
            this.notificationIDs.splice(index, 1);
        }
        delete this.notificationList[notificationID];
    }

    getNotifications() {
        return this.notificationList;
    }
}