import { action, observable } from "mobx";
import { observer } from "mobx-react";
import { IUserStore, IUserData } from "./interface";


export default class UserStore implements IUserStore {
    @observable currentUser = {} as IUserData;
    @observable isAuthenticated = false as boolean;
    @observable authChecked = false as boolean;

    @action async userLogin(data: { email: string, password: string }) {
        await fetch("http://wf.quando.pro/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.errors) {
                    //Тут прописываем логику ошибки
                    this.isAuthenticated = false;
                } else {
                    localStorage.setItem("token", data.token)
                    this.setUserData(data.user);
                    this.isAuthenticated = true;
                    return true;
                }
            });
    }

    isUserAuth = async () => {

        if (this.authChecked){
            return this.isAuthenticated;
        }else{
            const result = await this.getProfileFetch();
            return result;
        }
    }

    @action async userLogout() {
        localStorage.removeItem('token');
        this.isAuthenticated = false;
        this.authChecked = true;
    }

    @action formatUserData(data: IUserData): IUserData {
        return {
            id: data.id,
            name: data.name,
            email: data.email,
            created_at: data.created_at,
            updated_at: data.updated_at,
        }
    }

    @action async getProfileFetch() {
        const token = localStorage.token;
        if (token) {
            const responce = await fetch("http://wf.quando.pro/api/user/profile", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await responce.json();
            if (data.errors) {
                // Будет ошибка если token не дествительный
                localStorage.removeItem("token")
                this.isAuthenticated = false;
                this.authChecked = true;
            } else {
                this.setUserData(data);
                this.isAuthenticated = true;
                this.authChecked = true;
            }
        } else {
            this.isAuthenticated = false;
            this.authChecked = true;
        }

        return this.isAuthenticated;
    }

    @action setUserData(data: IUserData) {
        this.currentUser = this.formatUserData(data);
    }
}