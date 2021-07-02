import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import homeReducer from './homeReducer';

const reducers = combineReducers({
  app: appReducer,
  form: formReducer,
  homePage: homeReducer
});

export default reducers;