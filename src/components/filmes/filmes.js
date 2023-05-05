import { useState, useEffect } from "react"
import * as S from '../styles'
import axios from 'axios'



export default function Filmes() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        getFilmes()

    })

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)
        })

    }


    return (
        <S.Container id="filmes">
            <S.BoxTitle>
                <h2>Ooi, eu sou o componente de Filmes</h2>
            </S.BoxTitle>
            {filmes.map((item, index) => (
                <S.BoxFilms key={index}>
                    <img src={item.image} alt={item.title} />
                    <h2>Name:{item.title}</h2>
                </S.BoxFilms>
            ))}
        </S.Container>
    )
}