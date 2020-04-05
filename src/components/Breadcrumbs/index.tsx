import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const Breadcrumbs = (props: any) => (
    <ul className="header-megamenu nav">
        <Route path='/:path' component={BreadcrumbsItem} />
    </ul>
)

// const BreadcrumbsItem = ({ match }: { match: any }, { ...rest }) => {
//     console.log(match);
// }

// @ts-ignore
const BreadcrumbsItem = ({ match }: { match: any }, { ...rest }) => {
    return (
        <>
            <li className={match.isExact ? 'breadcrumb-active' : undefined}>
                <Link to={match.url || ''} className="nav-link">
                    {match.name ? match.name : match.url}
                </Link>
            </li>
            <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
        </>
    );
}

export default Breadcrumbs;