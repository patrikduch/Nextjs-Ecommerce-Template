import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { ApplicationState } from '@redux/store/types';
import reducer from '@redux/reducers/rootReducer';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const initStore = (): Store<ApplicationState> => { return createStore(reducer, bindMiddleware([thunkMiddleware])); };

// export an assembled wrapper
export const wrapper = createWrapper(initStore);
