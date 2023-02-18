import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MoviesPage from './pages/MoviesPage';
import CreateMoviesPage from './pages/CreateMoviePage';
import Navbar from './components/Navbar';
import MovieDetailsPage from './pages/MovieDetailsPage';
import CreateStarPage from './pages/CreateStarPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import IsLogged from './components/IsLogged';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/create-movie' element={<IsLogged><CreateMoviesPage /></IsLogged>} />
        <Route path='/create-star' element={<CreateStarPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
