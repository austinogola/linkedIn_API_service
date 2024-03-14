const jwt=require('jsonwebtoken')

const newToken=(email,password)=>{
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


module.exports={newToken}