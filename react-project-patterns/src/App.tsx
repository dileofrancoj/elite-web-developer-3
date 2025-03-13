import * as React from 'react'
import './App.css'
import { Character } from './components/Characters'
import { FilterCharacters } from './components/FilterCharacters'
import { useCharacters } from './hooks/useCharacters'
import { CharacterProps } from './types/Character'
import { Filter } from './types/Filter'
import { NoFilter } from './utils/filterCharacters'

function App() {
  const {loading, characters} = useCharacters()
  const [filterStrategy, setFilterStrategy] = React.useState<Filter<CharacterProps[]>>(new NoFilter())
  React.useEffect(() => {
  }, [filterStrategy])
  if(loading) return <span>'Cargando..'</span>

  const changeFilterStrategy = (strategy: Filter<CharacterProps[]>) => {
    setFilterStrategy(strategy)
  }
  console.log('filterStrategy', filterStrategy)
  const filteredCharacters = (): CharacterProps[] => {
    // filterStrategy es una instancia de la sub clase de filtrado (expuesta mediante el objeto filters)
    return filterStrategy.filter(characters) // devuelve un array de characters filtrados en base a filteredStrategy
  }
  return (
    <>
    <FilterCharacters changeFilterStrategy={changeFilterStrategy} />
    <div style={{marginTop:'50px', textAlign:'center'}}>
      {filteredCharacters().map((character) => <Character key={character.id} {...character} />
      )}
    </div>
    </>
  )
}

export default App
