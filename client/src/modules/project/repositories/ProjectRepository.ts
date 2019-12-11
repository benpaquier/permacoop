import {client as axios} from '../../../utils/axios';
import {Project} from '../models/Project';
import {ProjectFactory} from '../factory/ProjectFactory';

export class ProjectRepository {
  public static async findProjects(): Promise<Project[]> {
    const response = await axios.get('projects');
    const projects: Project[] = [];

    for (const project of response.data) {
      projects.push(ProjectFactory.create(project));
    }

    return projects;
  }
}