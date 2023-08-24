import { useEffect,  useState } from 'react'

import './App.css'

import ContainCards from './components/ContainCards.jsx'
import Header from "./components/Header.jsx"
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCharacter from './components/DetailCharacter';


const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Personaliza el color primario
    },
    secondary: {
      main: '#e7cd90', // Personaliza el color secundario
    },
    prueba:{
      main: "#222"
    }
  },
});
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
     <ThemeProvider theme={theme}>
       <BrowserRouter>
          <Header setInputSearch={setInputSearch} setCurrentPage={setCurrentPage}/>
          <Routes>
            <Route path='/' element={
              <ContainCards 
                characters={characters}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
              }
            />
          <Route path='/detailCharacter/:id' element={ <DetailCharacter />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
