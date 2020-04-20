import { IProjectsStore, IUserProjectsList, IProject, IProjectsList } from "./interface";
import { action, observable } from "mobx";

export default class ProjectStore implements IProjectsStore {
    @observable userProjectsList = {} as IUserProjectsList;
    @observable projectsList = {} as IProjectsList;

    @action async requestGetAll(user_id: number | null = null) {
        let path;

        user_id !== null
            ? path = `http://wf.quando.pro/api/projects/user_id=${user_id}`
            : path = `http://wf.quando.pro/api/projects`;

        const response = await fetch(path);
        const projects = await response.json();

        if (projects) {
            projects.forEach(async (project: IProject) => {
                this.projectsList[project.id] = this.formatProjectResponce(project);
            });
        }
    }

    formatProjectResponce(data: IProject) {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            user_id: data.user_id,
            created_at: data.created_at,
            updated_at: data.updated_at,
            tasks: data.tasks
        }
    }

    @action async getProjectsList(){
        if(Object.keys(this.projectsList).length !== 0){
            return this.projectsList;
        } else {
            await this.requestGetAll();
            return this.projectsList;
        }
    }

    @action async requestGetUserAll(user_id: number) {

    }

    @action async requestGetUserOne(user_id: number) {

    }

    @action async requestGetOne(id: number) {

    }
}