import Table from './Table'

export default function ProductTable() {

    const columns = [
        'Nome',
        'Estoque',
        'Preço'
    ]

    const data =[
        {
            name: 'notebook',
            stock: 10,
            price: 3500
        },
        {
            name: 'Mouse',
            stock: 50,
            price: 80
        }
    ]

    return (
        <Table
        columns={columns}
        data={data}
        />
    )
}