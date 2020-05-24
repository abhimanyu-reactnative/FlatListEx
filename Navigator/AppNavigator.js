import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import CharacterList from '../Container/CharactersList'
import CharacterDetail from '../Container/CharacterDetail/CharacterDetail'
import Episodes from '../Container/Episodes/Episodes'

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

const bottomBars = createBottomTabNavigator({
    Character: AppNavigator,
    Episodes : {
        screen: Episodes
    }
})

const AppContainer = createAppContainer(bottomBars);

export default AppContainer