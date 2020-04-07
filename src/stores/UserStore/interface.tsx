export interface IUserStore {
    userLogin: Function,
    userLogout: Function,
    currentUser: IUserData,
    isAuthenticated: boolean,
    authChecked: boolean,
    isUserAuth: Function
}

export interface IUserData {
    id: number,
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
}
