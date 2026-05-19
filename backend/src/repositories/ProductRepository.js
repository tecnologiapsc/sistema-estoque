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
}

module.exports = new ProductRepository()