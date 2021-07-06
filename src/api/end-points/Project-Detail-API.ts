import ProjectDetailTypeModel from '@typescript/models/project-detail/Project-Detail-Model';
import axios, { AxiosResponse } from 'axios';

/**
 * @function getProjectDetails Fetch project details (projectName, etc.)
 */
export const getProjectDetails = (): Promise<AxiosResponse<ProjectDetailTypeModel>> => { return axios.get('/api/projectdetail'); };