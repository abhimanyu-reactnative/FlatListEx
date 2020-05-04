import { combineReducers } from "redux";
import charactersListReducer from '../Reducers/CharacterListReducer'


const rootReducer = combineReducers({
    charactersList: charactersListReducer
})

export default rootReducer