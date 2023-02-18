import { Link } from 'react-router-dom'

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">BMDB</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-movie">Create Movie</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-star">Create Star</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-up">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar