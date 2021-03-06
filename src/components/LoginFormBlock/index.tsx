import React from 'react';


export default class LoginFormBlock extends React.Component {

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
                            {/* <h6 className="mt-3">No account? <a className="text-primary">Sign up now</a></h6> */}
                            <div className="divider row"></div>
                            <div>
                                { this.props.children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}