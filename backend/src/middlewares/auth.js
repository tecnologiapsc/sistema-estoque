const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: 'Token não enviado'
        })
    }

    const token = authHeader.split(' ')[1]


    try {
        jwt.verify(
            token,
                "SECRET_KEY"
        )

        next()
    
    } catch {
        
        return res.status(401).json({
            error: 'Token inválido'
        })
    }

}