// @flow

import { fromJS } from 'immutable';
import Reactotron from 'reactotron-react-native';
import { handleActions, combineActions } from 'redux-actions';
import { fetchCities, fetchCitiesError, fetchCitiesSuccess } from './actions';

const initState = fromJS({
    isLoading: false,
    cities: [],
});

// REDUCERS
export default handleActions(
    {
        [combineActions(fetchCities)]: (state, action) => {
            return state.set('isLoading', true);
        },
        [combineActions(fetchCitiesSuccess)]: (state, action) => {
            const { payload } = action;
            const newState = state.set('cities', fromJS(payload.cities)).set('isLoading', false);
            if (__DEV__) {
                Reactotron.display({
                    name: 'Action',
                    value: { ...action, oldState: state, newState },
                    preview: action.type,
                    important: true,
                });
            }
            return newState;
        },

        [combineActions(fetchCitiesError)]: (state, action) => {
            return state.set('isLoading', false);
        },
    },
    initState,
);
