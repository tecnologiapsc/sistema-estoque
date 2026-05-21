const router = require('express').Router();

const auth = require('../middlewares/auth');

const ProductController = require('../controllers/ProductController');


router.get('/products', ProductController.index);



router.post(
    '/products', auth, ProductController.create);

module.exports = router;