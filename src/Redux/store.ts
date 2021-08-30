import {createStore, applyMiddleware, compose } from 'redux';
import {routerMiddleware}  from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/flightSaga';
import { history } from './reducers/index';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;

