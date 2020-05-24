import { combineReducers } from "redux";
import charactersListReducer from '../Reducers/CharacterListReducer'
import characterReducer from '../Reducers/CharacterReducer'


const rootReducer = combineReducers({
    charactersList: charactersListReducer,
    character: characterReducer
})

export default rootReducer