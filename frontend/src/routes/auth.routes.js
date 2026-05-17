const router = require('express').Router();

router.post('/login', (req, res) => {
    res.json({
        message: "Login Funcionando"
    });
});

module.exports = router;