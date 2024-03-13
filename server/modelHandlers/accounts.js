const {User,Account}=require('../models/Api')


const newAccount=(AccountObj)=>{
    return new Promise((resolve, reject) => {
        const {user}=AccountObj
        if(!user){
            resolve({error:true,message:'missing details'})
            return
        }
        const accObj={
            user,
            credits:0,
            payments:[],
            apiUsage:[]
        }
        Account.create(accObj).then(newAccount=>{
            resolve({success:true,account:newAccount})
        })
    })
    
}

module.exports={newAccount}