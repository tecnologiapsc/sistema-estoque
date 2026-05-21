const router = require('express').Router();

const auth = require('../middlewares/auth');

const ProductController = require('../controllers/ProductController');


router.get('/products', ProductController.index);

router.post('/products', auth, ProductController.create);

router.put('/products/:id', auth, ProductController.update);

router.delete('/products/:id', auth, ProductController.delete)

module.exports = router;