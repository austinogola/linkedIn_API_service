const jwt=require('jsonwebtoken')

const newWebToken=(email,password)=>{
    return new Promise((resolve, reject) => {
        const maxAge = 3 * 60 * 60;
        const token=jwt.sign(
            {password,email},
            process.env.jwtSecret,
            {
                expiresIn:maxAge
            }
        )

        resolve(token)
    })
}

const authenticateWebToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error:true, message:'Unauthorized' });
    }
    jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
        if (err) {
            // If token is invalid, return 403 Forbidden
            return res.status(403).json({ error:true,message:'Forbidden'  });
        }
        const now=(new Date().getTime())/1000
        if(now>decoded.exp){
            return res.status(403).json({ error:true,message:'Expired token'})
        }
        req.email=decoded.email
        next();
    });
}


module.exports={newWebToken,authenticateWebToken}