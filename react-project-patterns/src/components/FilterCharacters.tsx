import { CharacterProps } from "../types/Character"
import { Filter } from "../types/Filter"
import { filters } from "../utils/filterCharacters"

// Recibe la lista de filtros
interface Props {
    changeFilterStrategy: (strategy: Filter<CharacterProps[]>) => void
}
export const FilterCharacters = ({changeFilterStrategy}: Props) => {
    return (
        <>
            {filters.map((filter) => {
                return (
                <button onClick={() => changeFilterStrategy(filter.strategy)}>
                    {filter.name}
                </button>
                )
            })}
        </>
    )
}