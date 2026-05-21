import { useEffect, useState } from "react";

import api from '../services/api';

import MainLayout from '../layouts/MainLayout';


export default function Products() {

    const [products, setProducts] = useState([])

    async function loadProducts() {

        const token = localStorage.getItem('token')

        const response = await api.get('/products', {
            headers: {
                Authorization: 'Bearer ${token}'
            }
        })

        setProducts(response.data)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (

        <MainLayout>

            <h1 className="text-3xl font- bold mb-5">
                Produtos
            </h1>

            <table className="w-full">

                <thead>

                    <tr>

                        <th>Nome</th>
                        <th>Estoque</th>
                        <th>Preço</th>
                    </tr>

                </thead>

                <tbody>

                    {products.map(product =>(
                        <tr key={product.id}>

                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.price}</td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </MainLayout>
    )
}