import React, { useState, useEffect } from "react"
import Carousel from 'react-elastic-carousel'
import axios from "axios"

export default function CarouselComponent() {
    /* const [filmes, setFilmes] = useState([])

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

    } */

    const [filmes, setFilmes] = useState([])
    const [series, setSeries] = useState([
        {
            image: 'https://m.media-amazon.com/images/I/81NK3yCvMJL._AC_SL1500_.jpg',
            title: 'the office'
        },
        {
            image: 'https://br.web.img3.acsta.net/pictures/22/05/30/15/56/1469166.jpg',
            title: ''
        },
        {
            image: 'https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
            title: ''
        },
        {
            image: 'https://seuladogeek.com.br/wp-content/uploads/2022/04/Ruptura-apple-768x1131.jpg',
            title: ''
        },
        {
            image: '',
            title: ''
        }
    ])

    useEffect(() => {
        getFilmes()
    })

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then((response) => {
            const allApi = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)
            console.log(allApi)
        })
    }

    return (
        <>
            <section>
                <h2>Filmes Populares</h2>
                <Carousel
                    itemsToScroll={4}
                    itemsToShow={4}
                    enableAutoPlay
                    autoPlaySpeed={3000}
                    itemPadding={[40, 10]}
                >
                    {filmes.map((item) => (
                        <div>
                            <img src={item.image} alt={item.title}
                                style={{ width: '80%' }} />
                            <h2 style={{ fontSize: '1.2rem' }}>{item.title}</h2>
                        </div>
                    ))}
                </Carousel>
            </section>
            <section>
                <h2>Series Populares</h2>
                <Carousel 
                    itemsToShow={3}
                    itemsToScroll={2}
                    enableAutoPlay
                    autoPlaySpeed={3000}
                    itemPadding={[40, 10]}
                    >
                    {series.map((item)=>(
                        <div>
                            <img src={item.image} style={{ width: '80%' }} />
                            <h2>{item.title}</h2>
                        </div>
                    ))}
                </Carousel>
            </section>
        </>


    )
}