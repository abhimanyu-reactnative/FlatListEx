import axios from 'axios'

export function fetchCharacters(){
    return axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        return response.data
    })
    .catch(error => {return error})
}