import {combineReducers} from 'redux';
import { createBrowserHistory } from 'history';
import {connectRouter} from 'connected-react-router';
import flightsReducer from './flights';
import {name as flightsStoreName} from '../actions/flights';
import authReducer from './auth';
import {name as authStorageName} from '../actions/auth'

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  [flightsStoreName]: flightsReducer,
  [authStorageName]: authReducer,
  router: connectRouter(history),
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
