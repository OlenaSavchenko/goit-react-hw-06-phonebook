import { createStore } from 'redux';
import contactReducer from './contact-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(contactReducer, composeWithDevTools());

export default store;
