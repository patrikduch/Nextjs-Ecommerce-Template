import { createSelector } from 'reselect';
import INITIALSTATE from '@redux/initial-state';

const projectDetailState = (state: typeof INITIALSTATE.projectDetail) => state;
/**
 * Get projectname from Redux store.
 */
const getprojectNameSelector = createSelector([projectDetailState], (a) => {
    return a.projectName;
});

export { getprojectNameSelector };