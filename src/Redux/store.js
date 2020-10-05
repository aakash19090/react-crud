import { createStore } from 'redux';
import postReducer from './Post/Reducer'

const store = createStore(postReducer);

export default store
