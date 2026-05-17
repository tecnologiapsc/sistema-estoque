const router = require('express').Router();


router.get('/test-db', (req, res) => {
    res.json({
        message: 'Rota Funcionando'
    });
});

module.exports = router;