import { useEffect, useState } from "react";

import api from "../services/api";

import MainLayout from '../layouts/MainLayout';

export default function Products() {

    const [products, setProducts] = useState([]);

    async function loadProducts() {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/products", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setProducts(response.data);

        } catch (error) {

            console.log(error);

            alert("Erro ao carregar produtos");

        }

    }

    useEffect(() => {

        loadProducts();

    }, []);

    return (

        <MainLayout>

            <div className="bg-white p-5 rounded shadow">

                <h1 className="text-3xl font-bold mb-5">
                    Produtos
                </h1>

                <table className="w-full border-collapse border border-gray-300">

                    <thead>

                        <tr className="bg-gray-200">

                            <th className="border p-2 text-left">
                                Nome
                            </th>

                            <th className="border p-2 text-left">
                                Estoque
                            </th>

                            <th className="border p-2 text-left">
                                Preço
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {products.map((product) => (

                            <tr key={product.id}>

                                <td className="border p-2">
                                    {product.name}
                                </td>

                                <td className="border p-2">
                                    {product.stock}
                                </td>

                                <td className="border p-2">
                                    R$ {product.price}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </MainLayout>

    );

}