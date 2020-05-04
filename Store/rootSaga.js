import { takeLatest, all } from "redux-saga/effects";
import { FETCH_CHARACTERLIST_REQUEST } from '../Reducers/CharacterListType'


import {fetchCharactersSaga} from '../Sagas/CharacterListSaga'


export default function* root() {

    yield all([
        takeLatest(FETCH_CHARACTERLIST_REQUEST, fetchCharactersSaga),
    ])
}