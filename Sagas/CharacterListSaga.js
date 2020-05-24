import {put, call } from 'redux-saga/effects'
import {fetchCharacters, fetchCharacter} from './CharacterListService'
import {fetchCharacterListSuccess, fetchCharacterListFailure} from '../Reducers/CharacterListActions'
import {fetchCharacterSuccess, fetchCharacterFailure} from '../Reducers/CharacterListActions'

export function* fetchCharactersSaga(){
    try {
        const data = yield call(fetchCharacters)
        yield put(fetchCharacterListSuccess(data))       
    } catch (error) {
        yield put(fetchCharacterListFailure(error))
    }
}

export function* fetchCharacterSaga(action){
    console.log(action.payload)
    try {
        const data = yield call(fetchCharacter, action.payload)
        yield put(fetchCharacterSuccess(data))       
    } catch (error) {
        yield put(fetchCharacterFailure(error))
    }
}