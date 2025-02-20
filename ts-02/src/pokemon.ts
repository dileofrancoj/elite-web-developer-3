import axios from 'axios'
import { HttpStatusCode, AxiosError } from 'axios'

interface Pokemon {
    name: string
    order: number
    base_experience: number
}

interface PokemonResponse {
    data: Pokemon
    status: HttpStatusCode
}

export const getPokemon = async(id: number): Promise<Pokemon | AxiosError | string> => {
    try {
        const response: PokemonResponse = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/'+ id)
        return response.data
    } catch (e) {
        if(e instanceof AxiosError ) {
            return e
        }
        return "Error"
    }
}