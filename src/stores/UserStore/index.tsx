import { action, observable } from "mobx";
import { observer } from "mobx-react";

interface IUserStore {
    userLogin: Function,
    currentUser: IUserData,
    isAuthenticated: boolean,
    authChecked: boolean
}

interface IUserData {
    id: number,
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
}

export default class UserStore implements IUserStore {
    @observable currentUser = {} as IUserData;
    @observable isAuthenticated = false as boolean;
    @observable authChecked = false as boolean;

    @action async userLogin(data: { email: string, password: string }) {
        await fetch("http://127.0.0.1:8000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    //Тут прописываем логику ошибки
                    this.isAuthenticated = false;
                } else {
                    localStorage.setItem("token", data.token)
                    this.setUserData(data.user);
                    this.isAuthenticated = true;
                }
            });
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
        // if (token) {
        //     return await fetch("http://127.0.0.1:8000/api/user/profile", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Accept: 'application/json',
        //             'Authorization': `Bearer ${token}`
        //         }
        //     })
        //         .then(resp => resp.json())
        //         .then(data => {
        //             if (data.error) {
        //                 // Будет ошибка если token не дествительный
        //                 localStorage.removeItem("token")
        //                 this.isAuthenticated = false;
        //             } else {
        //                 this.setUserData(data);
        //                 this.isAuthenticated = true;
        //             }
        //         })
        // }
        const test = await this.testCheck();
        console.log('total end')
        this.isAuthenticated=true;
        this.authChecked = true;
    }

    async testCheck(){
         setTimeout(async ()=>{
            console.log('end')
            return ''
        },1000)
    }

    @action setUserData(data: IUserData) {
        this.currentUser = this.formatUserData(data);
    }
}