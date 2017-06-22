import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { color } from './color.js'

const rootReducer = combineReducers({
  router: routerReducer,
  color
})

export default rootReducer
