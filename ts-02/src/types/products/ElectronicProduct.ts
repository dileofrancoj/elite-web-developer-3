//type Category = 'electronic' | 'hogar' | 'jardin'

import { BaseProduct, Category, Popularity } from "./base"

interface ElectronicProduct extends BaseProduct{
    voltage: number
    battery: boolean
    category: Category
    popularity: Popularity
}

export const macbook: ElectronicProduct = {
    id: 1,
    title: 'Macbook pro',
    price: 1000,
    voltage: 220,
    battery: true,
    category: Category.ELECTRONIC, // 'electronic'
    popularity: Popularity.high // 2
}