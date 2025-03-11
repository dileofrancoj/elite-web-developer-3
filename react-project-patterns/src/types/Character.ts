export type Status = "Alive" | "Dead" | "unknown"
export type Gender = "Male" | "Female" | "unknown"
export type Species = "Human" | "Alien" | "unknown"

export interface CharacterProps {
    status: Status
    gender: Gender
    specie: Species
    name: string
    id: number
    image: string
}

type Prev = number | null
export interface InfoProps {
    count: number
    pages: number
    next: string
    prev: Prev
}

export interface FetchedCharacterProps {
    info: InfoProps
    results: CharacterProps[]
}
