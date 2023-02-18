import { useState } from 'react'
import axios from 'axios'

const CreateMoviesPage = props => {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState(1905)
    const [poster, setPoster] = useState('')
    const [duration, setDuration] = useState(100)
    const [synopsis, setSynopsis] = useState('')
    const [director, setDirector] = useState('')
    const [countries, setCountries] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const newMovie = {
            title,
            year,
            poster,
            duration,
            synopsis,
            director,
            countries
        }

        axios.post('http://localhost:3001/movies', newMovie)
            .then(response => {
                console.log(response.data)
                alert('filme criado!')
            })
            .catch(err => console.log(err) )
    }

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('moviePoster', e.target.files[0])
        axios.post('http://localhost:3001/movies/upload', uploadData)
            .then(response => {
                setPoster(response.data.url)
                alert('upload ok')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Create Movie</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input 
                        type="text" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        placeholder="Year"
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        placeholder="Duration"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={synopsis}
                        onChange={e => setSynopsis(e.target.value)}
                        placeholder="Synopsis"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={director}
                        onChange={e => setDirector(e.target.value)}
                        placeholder="Director"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={countries}
                        onChange={e => setCountries(e.target.value)}
                        placeholder="Countries"
                    />
                </div>
                <div>
                    <input type="file" onChange={e => handleUpload(e)} />
                </div>
                <button type="submit" disabled={!poster}>Criar</button>
            </form>
        </div>
    )
}

export default CreateMoviesPage