import {
    FETCH_CHARACTER_REQUEST,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE
} from './CharacterListType'

const initialData = {
    loading: false,
    data: null,
    error: ""
}

const reducer = (state=initialData, action) => {
    console.log(action.type)
    switch(action.type){
        case FETCH_CHARACTER_REQUEST: {
            return {
                ...state,
                loading: true,
                data: null
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
                error: action.payload,
                loading: false
            }
        }
        default: return state

    }
}

export default reducer