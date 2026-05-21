import { useState } from "react";

import api from "../services/api";

export default function Login() {

    const [email, setEmail] = useState('')

    async function handleLogin() {

        const response = await api.post('/login', {
            email
        })

        localStorage.setItem(
            'token',
            response.data.token
        )

        alert('Login realizado')
    }

    return (

        <div className="p-10">
            
            <h1 className="text-3xl mb-5">
                Login
            </h1>

            <input
                type="text"
                value={email}
                placeholder="Digite seu email"
                onChange={e => setEmail(e.target.value)}
            />

            <button onClick={handleLogin}>
                Entrar
            </button>

        </div>

    )
}