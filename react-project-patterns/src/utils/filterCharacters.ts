import { CharacterProps, Gender, Status } from "../types/Character";
import { Filter } from "../types/Filter";

export class NoFilter implements Filter<CharacterProps[]> {
    filter(characters: CharacterProps[]): CharacterProps[] {
        return characters
    }
}

export class GenderFilter implements Filter<CharacterProps[]> {
    public gender: Gender
    constructor(gender: Gender){
        this.gender = gender
        // si el genero no es ni male ni female ni unknown throw ...
    }
    filter(characters: CharacterProps[]): CharacterProps[] {
        return characters.filter((character) => character.gender === this.gender)
    }
}

export class StatusFilter implements Filter<CharacterProps[]> {
    constructor(public status: Status){}
    filter(characters: CharacterProps[]): CharacterProps[] {
        return characters.filter((character) => character.status === this.status)
    }
}

type FilterName = Gender | Status

export interface FilterProps {
    name: FilterName
    strategy: Filter<CharacterProps[]>
}

// Llevar la creación de subclases a iteradores (forEach, etc.) -- retornar filter

export const filters: FilterProps[] = [
    {name: 'Alive', strategy: new StatusFilter('Alive')},
    {name: 'Dead', strategy: new StatusFilter('Dead')},
    {name: 'Female', strategy: new GenderFilter('Female')},
    {name: 'Male', strategy: new GenderFilter('Male')}
]