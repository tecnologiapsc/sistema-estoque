const ProductRepository = require('../repositories/ProductRepository');


class ProductController {
    
    async index(req, res) {

        const products = await ProductRepository.findAll()

        return res.json(products)
    }

    async create(req, res) {

        const {
            name,
            stock,
            price
        } = req.body

        await ProductRepository.create({
            name,
            stock,
            price
        })

        return res.json({
            message: 'Produto criado'
        })
    }
}

module.exports = new ProductController()