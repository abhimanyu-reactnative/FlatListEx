import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

class CharacterDetail extends React.Component {
    render(){
        console.log(this.props.navigation.getParam("itemId"))
        return(
            <View>
                <Text>Character Detail Screen</Text>
            </View>
        )
    }
}

export default CharacterDetail