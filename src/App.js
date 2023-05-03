/* import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Filmes from "./components/filmes/filmes"
import Header from "./components/header/header"
import Main from "./components/main/main"
import Series from "./components/series/series" */

/* export default function App (){
  return (
    <BrowserRouter>
      
      <Header />

      <Routes>
        <Route path="/" element={<Main /> }/>
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series/>}/>
      </Routes>

    </BrowserRouter>
  )
} */

import React from "react"
import Filmes from "./components/filmes/filmes"
import Header from "./components/header/header"
import Main from "./components/main/main"
import Series from "./components/series/series"
export default function App (){
  return(
    <>
      <Header />
      <Main />
      <Filmes />
      <Series />
    </>
  )
}

/* https://api.themoviedb.org/3/movie/popular?api_key=756f17e7d2e3dee7edee943587066b1e&language=pt-BR&page=1 */