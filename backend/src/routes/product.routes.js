const router = require('express').Router();

const ProductController = require('../controllers/ProductController');


router.get('/products', ProductController.index
)

router.post(
    '/products', ProductController.create
)

module.exports = router;