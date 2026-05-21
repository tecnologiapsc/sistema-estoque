import { useState } from 'react';

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import Card from "../components/ui/Card";
import Modal from '../components/ui/Modal';

import ProductForm from "../components/forms/ProductForm";
import ProductTable from "../components/tables/ProductTable";


export default function Dashboard() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    
    return (
        
        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-100 min-h-screen">

                <Navbar />

                <div className="p-6">

                    <Card>
                        
                        <h1 className="text-2x1 font-bold mb-6">
                            Cadastro de Produtos
                        </h1>

                        <ProductForm />

                    </Card>

                    <div className="mt-6">

                        <Card>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="
                                    bg-blue-600
                                    text-white
                                    px-4
                                    py-2
                                    rounded
                                    mb-4
                                " >
                            </button>

                            <ProductTable />

                            <Modal
                                isOpen={isModalOpen}
                                title="Novo Produto"
                                onClose={() => setIsModalOpen(false)}
                            >

                                <ProductForm />

                            </Modal>
                            
                        </Card>

                    </div>

                </div>

            </div>

        </div>
    )
}

