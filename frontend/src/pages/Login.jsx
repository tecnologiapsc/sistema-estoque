import { useNavigate } from 'react-router-dom';

import Input from '../components/ui/Input';
import Button from '../components/ui/Button';


export default function Login() {
    const navigate = useNavigate()

    function handleLogin() {

        localStorage.setItem(
            'token',
            'TOKEN_EXEMPLO'
        )

        navigate('/Dashboard')
    }

    return (
        <div className="
            h-screen
            bg-gray-100
            flex
            items-center
            justfy-center        
        ">

            <div className="
                gb-white
                p-8
                rounded
                shadow-md
                w-96            
            ">

                <h1 className='
                    text-2x1
                    font-bold
                    m-6
                    text-center
                '>

                    Sistema ERP

                </h1>

                <Input
                    type="password"
                    placeholder="Senha" 
                />

                <Button
                    title="Entrar"
                    onClick={handleLogin} 
                />

            </div>

        </div>
    )
}