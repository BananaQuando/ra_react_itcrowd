import React from 'react';
import IUserStore from '../../stores/UserStore';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Redirect } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner';
import LoginFormBlock from 'components/LoginFormBlock';

interface Props {
    userStore?: IUserStore
}

@inject("userStore")
@observer
export default class LoginPage extends React.Component<Props> {

    @observable isAuth = null as boolean | null;

    @observable inputs = {
        email: '' as string,
        password: '' as string
    } as {
        [key: string]: string
    };

    inputChangeHandler = (e: any) => {
        this.inputs[e.target.name] = e.target.value;
    }

    async handleSubmit(event: any) {
        event.preventDefault();

        const result = await this.props.userStore?.userLogin({
            email: this.inputs.email,
            password: this.inputs.password,
        });
    }

    async componentDidMount() {
        this.isAuth = await this.props.userStore!.isUserAuth();
    }

    render() {
        console.log(this.isAuth)
        if (this.isAuth === null){
            return <LoadingSpinner />
        }
        return (
            <>
                {this.isAuth ?
                    <Redirect to="/" />
                    :
                    <LoginFormBlock>
                        <form className="" onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label htmlFor="exampleEmail" className="">Email</label>
                                        <input
                                            name="email"
                                            id="exampleEmail"
                                            placeholder="Email here..."
                                            type="email"
                                            className="form-control"
                                            onChange={this.inputChangeHandler} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                        <label htmlFor="examplePassword" className="">Password</label>
                                        <input
                                            name="password"
                                            id="examplePassword"
                                            placeholder="Password here..."
                                            type="password"
                                            className="form-control"
                                            onChange={this.inputChangeHandler} />
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative form-check"><input name="check" id="exampleCheck" type="checkbox" className="form-check-input" /><label htmlFor="exampleCheck" className="form-check-label">Keep me logged in</label></div>
                            <div className="divider row"></div>
                            <div className="d-flex align-items-center">
                                <div className="ml-auto">
                                    {/* <a href="javascript:void(0);" className="btn-lg btn btn-link">Recover Password</a> */}
                                    <button className="btn btn-primary btn-lg">Login to ITCrowd</button>
                                </div>
                            </div>
                        </form>
                    </LoginFormBlock>
                }
            </>
        );
    };
}