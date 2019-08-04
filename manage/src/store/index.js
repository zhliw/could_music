import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

export default createStore(rootReducers,applyMiddleware(thunk))