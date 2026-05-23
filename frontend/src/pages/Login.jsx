import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

import { useAuth } from "../hooks/useAuth";


export default function Login() {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const { login } = useAuth();


    async function handleLogin() {
        try {

            const response = await api.post('/login', {
                email
            });

            login(response.data.token);

            navigate("/dashoard");

        } catch (error) {
            
            alert("Erro no login");

        }

    }

    return (
        <div className="h-screen flex items-center justfy-center bg-gray-100">

            <div className="bg-white p-10 rounded shadow w-96">

                <h1 className="text-3xl font-bold mb-5">
                    Login ERP
                </h1>

                <input
                    type="text"
                    placeholder="Digite seu email"
                    className="border w-full p-2 mb-4"
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white w-full p-2 rounded"
                >
                    Entrar
                </button>

            </div>

        </div>

    );
}