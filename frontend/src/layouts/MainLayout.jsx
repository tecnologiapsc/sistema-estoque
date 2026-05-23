export default function MainLayout({ children }) {

    return (

        <div className="flex">

            <aside className="w-64 h-screen gb-gray-900 text-white p-5">

                <h2 className="text-2xl font-bold mb-10">
                    ERP Sistema
                </h2>

                <ul className="space-y-4">

                    <li>
                        Dashboard
                    </li>

                    <li>
                        Produtos
                    </li>

                    <li>
                        Usuários
                    </li>

                </ul>

            </aside>

            <main className="flex-1 p-10 bg-gray-100">

                {children}

            </main>

        </div>
    );

}