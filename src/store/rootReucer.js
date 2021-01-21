import { combineReducers } from 'redux';

import assetReducer from '@modules/asset/reducer';
import contactReducer from '@modules/contact/reducer';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducer = combineReducers({
    asset: assetReducer,
    contact: contactReducer,
});

export default rootReducer;
