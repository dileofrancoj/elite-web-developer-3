// Interfaz común para la estrategia de filtrado

// Filter<Character[]>
export interface Filter<T> {
    filter: (props: T) => T
}