import React from 'react';

export default class ProjectsPage extends React.Component {
    render() {
        return (
            <>
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                        <div className="page-title-heading">
                            <div className="page-title-icon">
                                <i className="pe-7s-notebook icon-gradient bg-mixed-hopes">
                                </i>
                            </div>
                            <div>Projects list
                                <div className="page-title-subheading">
                                    Basic example of a Bootstrap 4 table with sort, search and filter functionality.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <div className="bootstrap-table">
                            <div className="fixed-table-toolbar"></div>
                            <div className="fixed-table-container">
                                <div className="fixed-table-header">
                                    <table></table>
                                </div>
                                <div className="fixed-table-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <th><div className="th-inner sortable both">Project name</div></th>
                                            <th><div className="th-inner sortable both">Project type</div></th>
                                            <th><div className="th-inner sortable both">Tasks count</div></th>
                                            <th></th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ITCrowd CMS</td>
                                                <td>Pet project</td>
                                                <td>3</td>
                                                <td>
                                                    <button className="border-0 btn-transition btn btn-outline-danger">
                                                        <i className="fa fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}