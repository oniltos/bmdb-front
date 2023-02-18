import { useEffect, useState } from "react"
import axios from 'axios'

const MoviesPage = props => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/movies')
        .then(response => {
            setMovies(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Movies</h1>

            <div>
                { movies.length > 0 && movies.map(movie => {
                    return (
                        <div>
                            <img src={movie.poster} alt="poster" />
                            {movie.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesPage