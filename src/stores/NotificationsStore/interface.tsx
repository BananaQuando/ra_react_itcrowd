export interface INotificationsStore {
    notificationList: INotificationList,
    addNotification: Function,
    getNotifications: Function,
    getNotification: Function,

}

export interface INotificationList {
    [key: number] : INotificationItem
}

export interface INotificationItem{
    name: string,
    text: string,
    type: string,
    duration: number
}