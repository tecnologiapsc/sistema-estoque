import { useState } from 'react';

import Input from '../ui/Input';
import Button from '../ui/Button';


import api from '../../services/api';


export default function ProductForm() {

    const [name, setName] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')

    async function handleSubmit(e) {

        e.preventDefault()

        await api.post('/products', {
            name,
            stock,
            price
        })

        alert('Produtos Cadastrado')

    }

    return (
        <form onSubmit={handleSubmit}>

            <Input
                placeholder="Nome"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                } 
            />

            <Input
                placeholder="Estoque"
                value={stock}
                onChange={(e) =>
                    setStock(e.target.value)
                } 
            />

            <Input
                placeholder="Preço"
                value={price}
                onChange={(e) =>
                    setPrice(e.target.value)
                } 
            />

            <Button
                title="Salvar Produto"
                type='submit' 
            />

        </form>
    )
}