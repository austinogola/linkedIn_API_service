const {User,Account,ApiKey}=require('../models/Api')
const { v4: uuidv4 } = require('uuid');

const addNewKey=(keyObj)=>{
    return new Promise(async(resolve, reject) => {
        const {createdAt,name,email}=keyObj
        if(!createdAt || !name){
            resolve({error:true,message:'missing details'})
            return
        }
        try {
            const theUser=await User.findOne({email})
            let newApiKey = uuidv4() + uuidv4()
            newApiKey=newApiKey.replaceAll('-',"")
            ApiKey.create({created:createdAt,owner:theUser._id,
                name,key:newApiKey,lastUsed:'-'
            }).then(async apiKeyObj=>{
                resolve({success:true,theNewKey:apiKeyObj})
                
            })
            
        } catch (error) {
            resolve({error:true,message:error.message})
        }
        
    })
    
}


module.exports={addNewKey}