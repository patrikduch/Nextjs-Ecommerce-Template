import { HYDRATE } from 'next-redux-wrapper';
import ProjectDetailTypeModel from "@typescript/types/app/models/Project-Detail-Type-Model";
import initialState from '@redux/initial-state';
import actionTypes from '@redux/actions/project-detail/action-types';

/**
 * @type ActionPayloadType Reducer`s payload type.
 */
type ActionPayloadType = {
  type: string;
  payload: {
    projectDetail: ProjectDetailTypeModel;
  }
};

/**
 * @function projectDetailReducer Project detail info management.
 * @param state   Initial state for project detail`s reducer.
 * @param action  Action that enters into project detail`s reducer.
 */
const projectDetailReducer = (state = initialState.projectDetail, action: ActionPayloadType): typeof initialState.projectDetail => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        projectName: action.payload.projectDetail.projectName
      };
    case actionTypes.fetchProjectDetailSuccess:
      return {
        ...state,
        projectName: action.payload.projectDetail.projectName
      };
    default:
      return state;
  }
};

export default projectDetailReducer;
