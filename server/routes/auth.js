const router = require("express").Router()
const {User,Account}=require('../models/Api')
const {addNew,emailExists}=require('../modelHandlers/users')
const  {validatePwd,encryptPwd} = require('../authHandlers/pwd')
const  {newToken} = require('../authHandlers/token')

router.post('/login',async(req,res)=>{
    const {body}=req
    const {email,password}=body
    if(!email){res.status(404).json({error:true,message:'Missing email'})}
    if(password){res.status(404).json({error:true,message:'Missing password'})}

    if(await emailExists(email)){
        return res.status(500).json({error:true,message:'Email already exists.Try logging in'})
    }else{
        res.status(500).json({error:true,message:'User does not exist.Please signup to continue'})
    }
    
    
})

router.post('/register',async(req,res)=>{
    const {body}=req
    const {email,password}=body
    if(!email){return (res.status(404).json({error:true,message:'Missing email',type:'email'}))}
    if(!password){return (res.status(404).json({error:true,message:'Missing password',type:'password'}))}

    if(await emailExists(email)){
        return res.status(500).json({error:true,message:'Email already exists.Try logging in'})
    }else{
        let encrypted_pass=await encryptPwd(password)
        let makeNew=await addNew({email,password:encrypted_pass})
        if(makeNew.success){
            let webToken=await newToken(email,password)
            res.status(200).json({
                success:true,
                message:'New user added',
                webToken
            })
        }
        
    }
    
    
})




module.exports=router