import React from 'react'
import _ from "lodash";

interface Props {
    data?: any
}

export default class Table extends React.Component<Props> {
    render() {
        return (
            <>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th><div className="th-inner sortable both">Project name</div></th>
                            <th><div className="th-inner sortable both">Project type</div></th>
                            <th><div className="th-inner sortable both">Tasks count</div></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.map(this.props.data, (row, i) => (
                                <tr key={i}>
                                    <td>{row.name}</td>
                                    <td>Pet project</td>
                                    <td>{row.tasks.length}</td>
                                    <td>
                                        <button className="border-0 btn-transition btn btn-outline-danger">
                                            <i className="fa fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        );
    }
}