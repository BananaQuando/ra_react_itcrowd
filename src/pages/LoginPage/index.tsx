import React from 'react';
import IUserStore from '../../stores/UserStore';
import { observer, inject } from 'mobx-react';

interface Props {
    userStore?: IUserStore
}

@inject("userStore")
@observer
export default class LoginPage extends React.Component<Props> {

    // async componentDidMount() {
    //     const data = {
    //         email: "test@test.test",
    //         password: "123123",
    //     };

    //     await this.props.userStore?.userLogin(data);
    // }

    render() {
        return (
            <div className="h-100">
                <div className="h-100 no-gutters row">
                    <div className="d-none d-lg-block col-lg-4">
                        <div className="slider-light">
                            <div className="slick-slider">
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                                        <div className="slide-img-bg" style={{ backgroundImage: "url('assets/images/originals/city.jpg')" }}></div>
                                        <div className="slider-content"><h3>Perfect Balance</h3>
                                            <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.</p></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                        <div className="slide-img-bg" style={{ backgroundImage: "url('assets/images/originals/citynights.jpg')" }}></div>
                                        <div className="slider-content"><h3>Scalable, Modular, Consistent</h3>
                                            <p>Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components</p></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                        <div className="slide-img-bg" style={{ backgroundImage: "url('assets/images/originals/citydark.jpg')" }}></div>
                                        <div className="slider-content"><h3>Complex, but lightweight</h3>
                                            <p>We've included a lot of components that cover almost all use cases for any type of application.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                        <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                            <div className="app-logo"></div>
                            <h4 className="mb-0">
                                <span className="d-block">Welcome back,</span>
                                <span>Please sign in to your account.</span></h4>
                            <h6 className="mt-3">No account? <a href="javascript:void(0);" className="text-primary">Sign up now</a></h6>
                            <div className="divider row"></div>
                            <div>
                                <form className="">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="position-relative form-group"><label htmlFor="exampleEmail" className="">Email</label><input name="email" id="exampleEmail" placeholder="Email here..." type="email" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="position-relative form-group"><label htmlFor="examplePassword" className="">Password</label><input name="password" id="examplePassword" placeholder="Password here..." type="password"
                                                className="form-control" /></div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}