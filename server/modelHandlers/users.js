const {User,Account}=require('../models/Api')

const {newAccount}=require('./accounts')



const emailExists=(email)=>{
    return new Promise(async(resolve,reject)=>{
        const existing=await User.findOne({email})
        existing?resolve(true):resolve(false)
    })
}

const addNew=(userObj)=>{
    return new Promise((resolve, reject) => {
        const {email,password}=userObj
        if(!email || !password){
            resolve({error:true,message:'missing details'})
            return
        }
        User.create({email,password}).then(async newUser=>{
            const {email,password,_id}=newUser
            const accResult=await newAccount({user:_id})
            if(accResult.success){
                resolve({success:true,user:newUser})
            }
            
        })
    })
    
}




module.exports={addNew,emailExists}