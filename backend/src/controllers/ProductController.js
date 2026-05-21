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

    async update(req, res) {

        const { id } = req.params

        await ProductRepository.update(
            id,
            req.body
        )

        return res.json({
            message: 'Atualizado'
        })
    }

    async delete(req, res) {

        const { id } = req.params

        await ProductRepository.delete(id)

        return res.json({
            message: 'Excluído'
        })
    }
}

module.exports = new ProductController()