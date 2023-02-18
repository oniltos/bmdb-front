import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    return (
        <div className='col-3'>
            <div className="card">
                <img className="card-img-top" src={movie.poster} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{ movie.title }</h5>
                    <p className="card-text">{movie.synopsis}</p>
                    <Link to={`/movies/${movie._id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard