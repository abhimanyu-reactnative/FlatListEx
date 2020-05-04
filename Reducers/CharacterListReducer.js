import {
    FETCH_CHARACTERLIST_REQUEST,
    FETCH_CHARACTERLIST_SUCCESS,
    FETCH_CHARACTERLIST_FAILURE
} from './CharacterListType'

const initialState = {
    loading: false,
    countryData: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CHARACTERLIST_SUCCESS:
            return {
                ...state,
                countryData: action.payload,
                loading: false
            }
        case FETCH_CHARACTERLIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default reducer