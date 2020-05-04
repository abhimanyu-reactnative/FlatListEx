import {
    FETCH_CHARACTERLIST_REQUEST,
    FETCH_CHARACTERLIST_SUCCESS,
    FETCH_CHARACTERLIST_FAILURE
} from './CharacterListType'


export const fetchCharacterListRequest = () => {
    return {
        type: FETCH_CHARACTERLIST_REQUEST
    }
}

export const fetchCharacterListSuccess = (characters) => {
    return {
        type: FETCH_CHARACTERLIST_SUCCESS,
        payload: characters
    }
}

export const fetchCharacterListFailure = (error) => {
    return {
        type: FETCH_CHARACTERLIST_FAILURE,
        payload: error
    }
}