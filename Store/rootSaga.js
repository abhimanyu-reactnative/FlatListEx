import { takeLatest, all } from "redux-saga/effects";
import { FETCH_CHARACTERLIST_REQUEST, FETCH_CHARACTER_REQUEST } from '../Reducers/CharacterListType'


import {fetchCharactersSaga, fetchCharacterSaga} from '../Sagas/CharacterListSaga'


export default function* root() {

    yield all([
        takeLatest(FETCH_CHARACTERLIST_REQUEST, fetchCharactersSaga),
        takeLatest(FETCH_CHARACTER_REQUEST, fetchCharacterSaga),
    ])
}