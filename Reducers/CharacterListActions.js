import {
    FETCH_CHARACTERLIST_REQUEST,
    FETCH_CHARACTERLIST_SUCCESS,
    FETCH_CHARACTERLIST_FAILURE,
    FETCH_CHARACTER_REQUEST,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE
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

export const fetchCharacterRequest = (characterId) => {
    return{
        type: FETCH_CHARACTER_REQUEST,
        payload: characterId
    }
}

export const fetchCharacterSuccess = (characterData) => {
    return{
        type: FETCH_CHARACTER_SUCCESS,
        payload: characterData
    }
}

export const fetchCharacterFailure = (error) => {
    return{
        type: FETCH_CHARACTER_FAILURE,
        payload: error
    }
}