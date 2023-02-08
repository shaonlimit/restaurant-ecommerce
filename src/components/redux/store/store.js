import { createStore } from 'redux';
import { myReducer } from '../reducers/cartReducer';

export const store = createStore(myReducer);
