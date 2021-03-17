import { FETCH_PROJECT_DETAIL_SUCCESS } from '../../actionTypes';
import { HYDRATE } from 'next-redux-wrapper';
import initialState from '../../initial-state';

/**
 * @function projectDetailReducer => Project detail info management.
 * @param state   => Initial state for project detail`s reducer.
 * @param action  => Action that enters into project detail`s reducer.
 */
const projectDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
      };
    case FETCH_PROJECT_DETAIL_SUCCESS:
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export default projectDetailReducer;