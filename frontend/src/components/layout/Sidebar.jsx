import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-5">

            <h1 className="text-2xl mb-10">
                ERP System
            </h1>

            <nav className="flex flex-col gap-4">

                <Link to="/">
                    Dashboard
                </Link>

                <Link to="/products">
                    Produtos
                </Link>

            </nav>

        </div>
    )
}