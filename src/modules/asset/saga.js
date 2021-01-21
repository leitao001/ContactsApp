import AsyncStorage from '@react-native-community/async-storage';
import { put, call, select, takeEvery } from 'redux-saga/effects';
import request from '@utils/request';
import { fetchCities, fetchCitiesError, fetchCitiesSuccess } from './actions';

function* fetchCitiesSaga() {
    try {
        const data = yield call(request, { path: 'cities', method: 'GET' });
        yield put(fetchCitiesSuccess({ cities: data }));
    } catch (e) {
        yield put(fetchCitiesError());
    }
}

export default function* assetSaga() {
    yield takeEvery(fetchCities.toString(), fetchCitiesSaga);
}
