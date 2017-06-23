import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import color from './color'

const rootReducer = combineReducers({
    router: routerReducer,
    color
})

export default rootReducer
