
const jwt = require('jsonwebtoken');

class AuthController {
    async login(req, res) {
        const { email } = req.body;

        const token = jwt.sign(
            { email },
            'SECRET_KEY',
            { expiresIn: '1d' }
        )

        return res.json(
            { token }
        )
    }
}

module.exports = new AuthController();