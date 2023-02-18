import axios from 'axios'
import { useState } from 'react'

const SignUpPage = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = e => {
        e.preventDefault()

        const payload = {
            email, 
            password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, payload)
            .then(response => {
                console.log(response.data)
                alert('Sign Up Ok')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Sign-Up</button>
            </form>
        </div>
    )
}

export default SignUpPage