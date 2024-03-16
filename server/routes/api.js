const router = require("express").Router()
const {User,Account,ApiKey}=require('../models/Api')
const {addNew,emailExists}=require('../modelHandlers/users')
const {addNewKey,}=require('../modelHandlers/apikeys')
const  {newWebToken,authenticateWebToken} = require('../authHandlers/token')

router.get('/data/config',authenticateWebToken,async(req,res)=>{
    const {email}=req
    const theUser=await User.findOne({email})
    const allKeys=await ApiKey.find({owner:theUser._id})
    res.status(200).json({success:true,data:{
        email,
        apiKeys:allKeys
    }})
})


router.post('/keys/new',authenticateWebToken,async(req,res)=>{
    const {body,email}=req
    const {createdAt,name}=body
    if(createdAt && name ){
        let addition=await addNewKey({createdAt,name,email})
        if(addition.success){
            console.log(addition);
            res.status(200).json({success:true,message:"Created new api key"})
        }else{
            res.status(402).json({error:true,message:addition.message})
        }
        

    }else{
        res.status(500).json({error:true,message:"Missing API key details"})
    }
})



module.exports=router