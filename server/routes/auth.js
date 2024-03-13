const router = require("express").Router()
const {User,Account}=require('../models/Api')
const {addNew,emailExists}=require('../modelHandlers/users')

router.post('/login',async(req,res)=>{
    const {body}=req
    const {email,password}=body
    if(!email){res.status(404).json({error:true,message:'Missing email'})}
    if(password){res.status(404).json({error:true,message:'Missing password'})}
    res.status(200).json({success:true})
    
})

router.post('/register',async(req,res)=>{
    const {body}=req
    const {email,password}=body
    if(!email){return (res.status(404).json({error:true,message:'Missing email',type:'email'}))}
    if(!password){return (res.status(404).json({error:true,message:'Missing password',type:'password'}))}

    if(await emailExists(email)){
        return res.status(500).json({error:true,message:'Email already exists.Try logging in'})
    }else{
        let makeNew=await addNew({email,password})
        console.log(makeNew);
        res.status(200).json({success:true,message:'New user added'})
    }
    
    
})




module.exports=router