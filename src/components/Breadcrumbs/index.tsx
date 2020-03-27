import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// export default class Breadcrumbs extends Component {
//     render(){
//         return(
//             <ul className="header-megamenu nav">
//                 <li>
//                     <a className="nav-link"> 123123 </a>
//                 </li>
//                 <li>
//                     <a className="nav-link"> 312312 </a>
//                 </li>
//                 <li>
//                     <a className="nav-link"> 4214124 </a>
//                 </li>
//             </ul>
//         );
//     }
// }

const Breadcrumbs = (props: any) => (
    <ul className="header-megamenu nav">
        <Route path='/:path' component={BreadcrumbsItem} />
    </ul>
)

const BreadcrumbsItem = ({ match }: { match: any }, { ...rest }) => (
    <React.Fragment>
        <li className={match.isExact ? 'breadcrumb-active' : undefined}>
            <Link to={match.url || ''} className="nav-link">
                {match.url}
            </Link>
        </li>
        <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </React.Fragment>
)

export default Breadcrumbs;