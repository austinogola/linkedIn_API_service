const bcrypt = require('bcrypt');

const encryptPwd=(string)=>{
    return new Promise(async(resolve, reject) => {
        try {
            const hashedPassword = await bcrypt.hash(string, 10);
            resolve (hashedPassword);
        } catch (error) {
            throw new Error('Error encrypting password');
        }
    })
}

const validatePwd=(string,hash)=>{
    return new Promise(async(resolve, reject) => {
        try {
            const match = await bcrypt.compare(string, hash);
            console.log(match);
            resolve (match);
        } catch (error) {
            throw new Error('Error validating password');
        }
    })
}

module.exports={validatePwd,encryptPwd}
