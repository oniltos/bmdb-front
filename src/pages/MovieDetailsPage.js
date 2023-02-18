import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import StarCard from "../components/StarCard"

const MovieDetailsPage = props => {
    const [movie, setMovie] = useState(null)

    const { movieId } = useParams()

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/movies/${movieId}`, {headers})
        .then(response => {
            setMovie(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    if(!movie) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <h1>{ movie.title }</h1>

            <div className="row">
                <div className="col-3">
                    <img width="100%" src={movie.poster} alt="poster" />
                </div>
                <div className="col-9">
                    <p>Year: {movie.year}</p>
                    <p>Duration: {movie.duration}</p>
                    <p>Director: {movie.director}</p>
                    <p>Countries: {movie.countries}</p>
                    <p>{movie.synopsis}</p>
                </div>
            </div>
            <div className="row">
                <h2>Stars</h2>
                <div className="row">
                    { movie.cast.length > 0 && movie.cast.map(star => {
                        return (
                            <StarCard star={star} key={star._id} />       
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsPage