export interface INotificationsStore {
    notificationList: INotificationList,
    addNotification: Function,
    getNotifications: Function,
    getNotification: Function,
    getNotificationIDs: Function,
    removeNotification: Function,
}

export interface INotificationList {
    [key: string] : INotificationItem
}

export interface INotificationItem{
    id: number,
    name?: string,
    text: string,
    type: string,
    status?: number,
    duration?: number
}