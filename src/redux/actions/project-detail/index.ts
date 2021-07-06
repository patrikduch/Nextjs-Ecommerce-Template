import ActionTypes from '@redux/actions/project-detail/action-types';
import { Dispatch } from 'redux';
import { getProjectDetails } from '@api/end-points/Project-Detail-API';
import { FetchProjectDetailAction } from './types';

/**
 * @function getProjectDetail Fetch project details.
 */
export const getProjectDetail = () => {
  return async (dispatch: Dispatch): Promise<void> => {

    const response = await getProjectDetails();

    dispatch<FetchProjectDetailAction>({
      type: ActionTypes.fetchProjectDetailSuccess,
      payload: {
        projectDetail: response.data
      }
    });
  };
};
