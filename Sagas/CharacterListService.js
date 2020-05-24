import axios from 'axios'

export function fetchCharacters(){
    return axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        return response.data
    })
    .catch(error => {return error})
}

export function fetchCharacter(characterId){
   console.log('https://rickandmortyapi.com/api/character/'+characterId)
    return axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(response => {
        console.log(response)
        return response.data
    })
    .catch(error => {return error})
}