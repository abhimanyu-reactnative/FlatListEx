import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { fetchCharacterListRequest } from '../Reducers/CharacterListActions'
import CharacterCell from './CharacterCell'

class CharactersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        // fetch("https://restcountries.eu/rest/v2/all")
        // .then((response) => response.json())
        // .then((jsonResponse) => {
        //     this.setState({
        //         data: jsonResponse
        //     })
        // })
        // .catch((error) => console.log(error))
        this.props.fetchCharactersRequest()
    }

    render() {
        let { characterList } = this.props
        console.log(JSON.stringify(characterList.countryData))
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Text style={styles.titleText}>Rick & Morty</Text>
                </View>
                {characterList.countryData.results ?
                    <FlatList
                        data={characterList.countryData.results}
                        renderItem={(item) => <CharacterCell characterData={item} />}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        onEndReached={({ distanceFromEnd }) => {
                            console.log(" ***************** "+distanceFromEnd);
                            //this.apiCall();                 
                          }}
                    />
                    :
                    null
                }

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    characterList: state.charactersList
})

const mapDispatchToProps = (dispatch) => ({
    fetchCharactersRequest: () => dispatch(fetchCharacterListRequest())
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    navBar: {
        height: 64,
        backgroundColor: "black",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 16

    },
    titleText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    separator: {
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)