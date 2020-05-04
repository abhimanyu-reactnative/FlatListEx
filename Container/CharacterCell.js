import React, {Component} from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

class CharacterCell extends Component {
    constructor(props){
        super(props)
    }

    render(){
        //console.log("Image url =" + JSON.stringify(this.props.characterData))
        const character = this.props.characterData.item
        return(
            <View style={styles.container}>
                <Image style={styles.imageContainer} source = {{uri: character.image}}/>
                <View style={styles.detailContainer}>
                    <Text style={styles.nameStyle}>
                        {character.name}
                    </Text>
                    <Text style={styles.speciesText}>{character.species}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    imageContainer: {
        width: "100%",
        height: 300,
    },
    detailContainer: {
        flexDirection: "row",
        paddingTop: 10,
        justifyContent: "space-between"
    },
    nameStyle: {
        fontWeight: "bold",
        fontSize: 16
    },
    speciesText: {
        fontSize: 16
    }
})
export default CharacterCell