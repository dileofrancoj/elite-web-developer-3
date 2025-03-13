import { CharacterProps } from "../types/Character"
import { Filter } from "../types/Filter"
import { filters } from "../utils/filterCharacters"
import { ButtonFactory } from "./Buttons/Button"

// Recibe la lista de filtros
interface Props {
    changeFilterStrategy: (strategy: Filter<CharacterProps[]>) => void
}
export const FilterCharacters = ({changeFilterStrategy}: Props) => {
    return (
        <>
            {filters.map((filter) => {
                return (
                    <ButtonFactory buttonType="action" onClick={() => changeFilterStrategy(filter.strategy)}>
                        {filter.name}
                    </ButtonFactory>
                )
            })}
        </>
    )
}