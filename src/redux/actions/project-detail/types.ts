import ActionTypes from './action-types';
import ProjectDetailModel from '@typescript/models/project-detail/Project-Detail-Model';

/**
 * @interface FetchProjectDetailAction Interface's action contract for fetching basic project information (project name, etc).
 */
export interface FetchProjectDetailAction {
    type: ActionTypes.fetchProjectDetailSuccess;
    payload: {
        projectDetail: ProjectDetailModel;
    }
}