import {
    FETCH_CHARACTER_REQUEST,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE
} from './CharacterListType'

const initialData = {
    loading: false,
    data: {},
    error: ""
}

const reducer = (state=initialData, action) => {

    switch(action.type){
        case FETCH_CHARACTER_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_CHARACTER_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        }
        case FETCH_CHARACTER_FAILURE: {
            return {
                ...state,
                data: {},
                error: action.payload
            }
        }
        default: state

    }
}

export default reducer