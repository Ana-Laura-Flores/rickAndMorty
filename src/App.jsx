import { useEffect,  useState } from 'react'

import './App.css'

import ContainCards from './components/ContainCards.jsx'
import Header from "./components/Header.jsx"
import PaginationApp from './components/PaginationApp'


function App() {
  const [characters, setCharacters] = useState("")
  const [inputSearch, setInputSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch (`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${inputSearch}`)
    .then((response) => response.json())
    .then(({results}) =>{
       setCharacters(results)
      
      })
  },  [inputSearch, currentPage])

  //console.log(characters)

//aca un effect que me actualice una renderizacion por ej cuando se modifica search (ejemplo buscador de netflix)
  // useEffect(() =>{
  //   fetch(`https:jldsjjakdlkfajkdjlakjdkald?search=${search}`)
  //   .then((response) => response.json())
  //   .then((data) => setProducts(data))
  // }, [search])

  return (
    <>
      <Header setInputSearch={setInputSearch} setCurrentPage={setCurrentPage}/>
      <ContainCards characters={characters}/>
      <PaginationApp setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  )
}

export default App
