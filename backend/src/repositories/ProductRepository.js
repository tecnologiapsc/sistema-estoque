const db = require('../database');

class ProductRepository {

    async findAll() {

        const products = await db.query(
            'SELECT * FROM products'
        )

        return products.rows
    }

    async create({
        name,
        stock,
        price

    }) {

        await db.query(' INSERT INTO products (name, stock, price) VALUES ($1, $2, $3)',
            [name, stock, price]
        )
    }

    async update(id, {
        name, 
        stock, 
        price

    }) {

        await db.query(
            'UPDADTE products SET name = $1, stock= $2, price= $3 WHERE id = $4',
            [name, stock, price, id]
        )
    }

    async delete(id) {

        await db.query(
            ' DELETE FROM products WHERE id = $1',
        [id]
        )
        
    }
}

module.exports = new ProductRepository()