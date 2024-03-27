const jwt=require('jsonwebtoken')
const {User, ApiKey,Account}=require('../models/Api')

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

const checkApiToken=async(req,res,next)=>{
    const apiKey = req.headers['x-api-key'];
    if(!apiKey){
        return  res.status(401).json({ error:true, message:'Unauthorized' });
    }
    const KEY=await ApiKey.findOne({key:apiKey})
    if(!KEY){
        return  res.status(401).json({ error:true, message:'Invalid api key' });
    }
    let ownerAccount=await Account.findOne({user:KEY.owner})
    if(ownerAccount.credits<=0){
        return  res.status(401).json({ error:true, message:'You are out of credits' });
    }
    req.KEY=KEY
    req.ownerAccount=ownerAccount
    
    next()
}


module.exports={newWebToken,authenticateWebToken,checkApiToken}