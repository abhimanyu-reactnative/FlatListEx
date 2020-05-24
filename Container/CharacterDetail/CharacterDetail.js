import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { fetchCharacterRequest } from '../../Reducers/CharacterListActions'

class CharacterDetail extends React.Component {
    componentDidMount() {
        const id = this.props.navigation.getParam("itemId")
        this.props.getCharacterDetail(id)
    }
    render() {
        const character = this.props.characterDetail.data
        console.log(character)
        if(!character){
            return(
                <View style={styles.container}>
                    <Text></Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Image style={styles.imageConatiner} source={{uri: character.image}}/>
                <View style={styles.detailContainer}>
                    <Text>Name: {character.name}</Text>
                    <Text>Species: {character.species}</Text>
                    <Text>Gender: {character.gender}</Text>
                    <Text>Status: {character.status}</Text>
                    <Text>Location: {character.location.name}</Text>
                    <Text>Origin: {character.origin.name}</Text>
                    <Text>Created: {character.created}</Text>
                </View>
               
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    characterDetail: state.character
})
const mapDispatchTopProps = (dispatch) => ({
    getCharacterDetail: (id) => dispatch(fetchCharacterRequest(id))
})

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
    },
    imageConatiner: {
        width: "100%",
        height: 400
    },
    detailContainer:{
        flex: 1,
        padding: 10
    }
})

export default connect(mapStateToProps, mapDispatchTopProps)(CharacterDetail)