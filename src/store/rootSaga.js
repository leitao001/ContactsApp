import { all, fork } from 'redux-saga/effects';
import assetSaga from '@modules/asset/saga';
import contactSaga from '@modules/contact/saga';

/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSaga() {
    yield all([fork(assetSaga)]);
    yield all([fork(contactSaga)]);
}
