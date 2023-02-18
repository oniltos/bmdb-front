import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MoviesPage from './pages/MoviesPage';
import CreateMoviesPage from './pages/CreateMoviePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/create-movie' element={<CreateMoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
