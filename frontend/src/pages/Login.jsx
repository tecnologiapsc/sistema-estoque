import Button from '../components/ui/Button';

export default function Login() {
    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            
            <div className="gb-white p-8 rounded shadow-md w-96">
                
                <h1 className="text-2x1 font-bold mb-6 text-center">
                    Sistema ERP
                </h1>

                <input
                    type="text"
                    placeholder="Usuário"
                    className="w-full border p-2 mb-4 rounded"
                />

                <input
                    type="text"
                    placeholder="Usuário"
                    className="w-full border p-2 mb-4 rounded"
                />

                <Button title="Entrar" />           
            
            </div>

        </div>
    )
}