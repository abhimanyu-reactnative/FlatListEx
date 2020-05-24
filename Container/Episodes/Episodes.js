import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'


class Episodes extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>Episodes screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Episodes