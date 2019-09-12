import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';
import createStore from './createStore';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducers, middlewares);

export default store;

sagaMiddleware.run(sagas);