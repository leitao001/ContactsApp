import { createAction } from 'redux-actions';

export const fetchCities = createAction('rntest/asset/FETCH_CITIES');
export const fetchCitiesError = createAction('rntest/asset/FETCH_CITIES_ERROR');
export const fetchCitiesSuccess = createAction('rntest/asset/FETCH_CITIES_SUCCESS');
