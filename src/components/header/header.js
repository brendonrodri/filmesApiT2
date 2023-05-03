import React from "react"
import * as S from "../styles"
/* import {Link} from "react-router-dom"

export default function Header (){
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="#main">Inicio</a></li>
                    <li><Link to="/filmes">Filmes</Link></li>
                    <li><Link to="/series">Series</Link></li>
                </ul>
            </nav>
        </header>
    )
} */

 export default function Header (){
    return(
        <S.HeaderContainer>
            <S.Nav>
                <S.Ul>
                    <li><a href="#main" >Inicio</a></li>
                    <li><a href="#filmes">Filmes</a> </li>
                    <li><a href="#series">Series</a></li>
                </S.Ul>
            </S.Nav>
        </S.HeaderContainer>
    )
} 