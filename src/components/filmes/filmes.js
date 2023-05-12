import { useState, useEffect } from "react"
import * as S from '../styles'
import axios from 'axios'
import Lupa from './image.png'



export default function Filmes() {
    const [filmes, setFilmes] = useState([])
    const [filtrados, setFiltrados] = useState([])
    const [input, setInput] = useState('')
    const [mode, setMode] = useState(false)

    useEffect(() => {
        getFilmes()
        filtrar()

    }, [input, filtrados, mode])

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

    const filtrar = () => {
        const FilmesFiltrados = filmes.filter((item) => {
            if(item.title.toLowerCase().includes(input.toLowerCase())){
                return true
            }else{
                return false
            }
        })
        setFiltrados(FilmesFiltrados)
    }

    return (
        <S.Container id="filmes">
            <S.BoxTitle>
                <h2>Ooi, eu sou o componente de Filmes</h2>
                <div>
                    <img onClick={() => setMode(!mode)} src={Lupa} alt='Lupa' />
                    <S.Caixa show={mode === false ? 'none' :'initial'}  onChange={(e) => setInput(e.target.value)} />
                </div>
            </S.BoxTitle>
            {filtrados.map((item, index) => (
                <S.BoxFilms key={index}>
                    <img src={item.image} alt={item.title} />
                    <h2>Name:{item.title}</h2>
                </S.BoxFilms>
            ))}
        </S.Container>
    )
}