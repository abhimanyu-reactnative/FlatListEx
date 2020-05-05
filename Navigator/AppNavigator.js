import { createStackNavigator, createAppContainer } from 'react-navigation';
import CharacterList from '../Container/CharactersList'
import CharacterDetail from '../Container/CharacterDetail/CharacterDetail'

const AppNavigator = createStackNavigator({
    CharacterList: {
        screen: CharacterList
    },
    CharacterDetail: {
        screen: CharacterDetail
    },
},
    {
        initialRouteName: "CharacterList"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer