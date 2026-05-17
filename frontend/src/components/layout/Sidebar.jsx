export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-4
        ">
            <h1 className="text-2x1 font-bold mb-10">
                ERP System
            </h1>

            <ul className="space-y-4">
                <li className="hover:text-blue-400 cursor-pointer">
                    Dashboard
                </li>

                <li className="hover:text-blue-400 cursor-pointer">
                    Produtos
                </li>

                <li className="hover:text-blue-400 cursor-pointer">
                    Usuários
                </li>
            </ul>

        </div>
    )
}