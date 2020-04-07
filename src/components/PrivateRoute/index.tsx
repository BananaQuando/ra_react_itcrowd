import React from "react";
import { Route, Redirect } from "react-router-dom";
import IUserStore from 'stores/UserStore';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router-dom';
import { observable } from "mobx";
import LoadingSpinner from "components/LoadingSpinner";

interface Props {
    userStore?: IUserStore,
    path: string,
    component: any
}

@inject("userStore")
@observer
class PrivateRoute extends React.Component<Props> {
    render() {
        const { component } = this.props;
        const { authChecked, isAuthenticated } = this.props.userStore!;
        const RenderComponent = component;
        if (authChecked){
            return isAuthenticated ? <RenderComponent {...this.props} /> : <Redirect to="/login" />
        }else{
            return <LoadingSpinner/>
        }
    }
}

// @ts-ignore
// function PrivateRoute({ children, ...rest }) {
//     return (
//         <></>
//         // <Route
//         //     {...rest}
//         //     render={({ location }) =>
//         //         userStore.isAuthenticated ? (
//         //             children
//         //         ) : (
//         //                 <Redirect
//         //                     to={{
//         //                         pathname: "/login",
//         //                         state: { from: location }
//         //                     }}
//         //                 />
//         //             )
//         //     }
//         // />
//     );
// }

export default PrivateRoute;