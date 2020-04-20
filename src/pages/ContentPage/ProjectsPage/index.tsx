import React from 'react';
import Table from 'components/Table';
import { IProjectsStore, IProjectsList } from 'stores/ProjectsStore/interface';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';

interface Props{
    projectsStore: IProjectsStore
}

@inject('projectsStore')
@observer
export default class ProjectsPage extends React.Component<Props> {

    @observable projectsList = {} as IProjectsList;

    @action async componentDidMount(){
        this.projectsList = await this.props.projectsStore.getProjectsList();
    }

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
                            <div>Projects list</div>
                        </div>
                    </div>
                </div>

                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <div className="bootstrap-table">
                            <div className="fixed-table-container">
                                <div className="fixed-table-body">
                                    <Table data={this.projectsList} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}