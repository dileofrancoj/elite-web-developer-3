import type { AxiosError } from "axios";
import type { FetchedCharacterProps } from "../types/Character";
import { charactersApiInstance } from "../config/api";

export const getCharacters = async(): Promise<FetchedCharacterProps | AxiosError>=> {
    try {
        // const res = axios.get('https://rickandmortyapi.com/api/character')
        const response = await charactersApiInstance.get<FetchedCharacterProps>('/character')
        return response.data as FetchedCharacterProps
    } catch (e) {
        throw e as AxiosError
    }
}