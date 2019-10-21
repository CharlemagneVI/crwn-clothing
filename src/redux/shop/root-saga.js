import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop.sagas';

export default function* rootSaga() {
    yield all([
        yield all([call(fetchCollectionsStart)])
    ])
}