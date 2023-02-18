import { useEffect, useState } from "react"
import axios from 'axios'
import MovieCard from "../components/MovieCard"

const MoviesPage = props => {
    const [movies, setMovies] = useState([])

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get('http://localhost:3001/movies', {headers})
        .then(response => {
            setMovies(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <h1>Movies</h1>

            <div className="row">
                { movies.length > 0 && movies.map(movie => {
                    return (
                        <MovieCard movie={movie} key={movie._id} />
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesPage