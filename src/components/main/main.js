import { useState, useEffect } from "react";
import axios from 'axios';
import * as S from "../styles"
export default function Main() {
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(() => {
        getFilmes()

    })

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }
            })
            setFilmes(allApi)
            setFundo(arrayAntiga => arrayAntiga = filmes.slice(0, 1))
        })

    }

    return (
        <S.ContainerMain background={fundo.map(item => item.poster)} id="main">
            <div>
                <h2>Ooi, eu Sou a Main</h2>
            </div>
            {fundo.map(item => (
                <S.BoxTitle>
                    <h1>Name:{item.title}</h1>
                    <h1>Lançamento:{item.release_date}</h1>
                    <h1>Avaliação:{item.vote_average}</h1>
                    <h1>Sinopse:{item.overview}</h1>
                </S.BoxTitle>
            ))}
        </S.ContainerMain>
    )
}