import {put, call } from 'redux-saga/effects'
import {fetchCharacters} from './CharacterListService'
import {fetchCharacterListSuccess, fetchCharacterListFailure} from '../Reducers/CharacterListActions'

export function* fetchCharactersSaga(){
    try {
        const data = yield call(fetchCharacters)
        yield put(fetchCharacterListSuccess(data))       
    } catch (error) {
        yield put(fetchCharacterListFailure(error))
    }
}