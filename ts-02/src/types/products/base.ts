export type MaybeId = number | undefined | null | string

export interface BaseProduct {
    id: MaybeId
    title: string
    price: number
    tags?: string[]
}

export enum Category {
    ELECTRONIC = 'electronic',
    HOME = 'hogar',
    GARDEN = 'jardin'
}

export enum Popularity {
    low, // 0
    medium, // 1
    high =5, //2 ... n
    popular // 6
}