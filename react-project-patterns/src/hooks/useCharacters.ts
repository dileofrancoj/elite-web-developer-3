import * as React from 'react'
import { CharacterProps, FetchedCharacterProps } from '../types/Character'
import { getCharacters } from '../services/characters'

interface useCharacterProps {
    loading: boolean;
    characters: CharacterProps[]   
}
export const useCharacters = (): useCharacterProps => {
    const [characters, setCharacters] = React.useState<CharacterProps[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getCharacters()
                const response = data as FetchedCharacterProps
                setCharacters(response.results)
            } catch (error) {
                // console.error(error)
                console.log(error)
                // sentryHub.captureException(JSON.stringify(error))
            } finally {
                setLoading(false)
            }
        }
        fetch()
    }, [])
    
    return { loading, characters }
}