import { createStore, combineReducers } from 'redux';
// import reducers
import token from './login/index';
import articles from './article/index';
const reducer = combineReducers({ token });
const store = createStore(reducer);

export default store;