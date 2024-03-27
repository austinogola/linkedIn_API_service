const router = require("express").Router()
const {triggerProfile}=require('../services/remoteTrigger')
const Company=require('../models/Company')
const Profile=require('../models/Profile')
const  {checkApiToken} = require('../authHandlers/token')
const {User, ApiKey,Account}=require('../models/Api')

router.post('/',checkApiToken,async(req,res)=>{
    const {profile_id,bypass_cache} = req.body;
    const {KEY,ownerAccount}=req
    let full_profile=await Profile.findOne({profile_id:profile_id},{ _id: 0,__v:0 ,
        last_called:0})
    if(!full_profile){
        triggerProfile(profile_id)
        while(!full_profile){
            full_profile=await Profile.findOne({profile_id:profile_id},{ _id: 0 ,__v:0,last_called:0})
        }
        res.status(200).json({profile:full_profile})
    }
    const time_now=new Date().getTime()
    Profile.findOneAndUpdate(
        { profile_id: profile_id },
        { $set: { last_called: new Date().getTime()} }, 
        { new: true } 
    ).then(res=>console.log(res.profile_id))

    ApiKey.findOneAndUpdate(
        { _id: KEY._id },
        { 
            $push: { usage: time_now },
            $set: { lastUsed: new Date().getTime()}

        },
        { new: true } 
    ).then(res=>console.log(res.usage,res.lastUsed))
    

    Account.findOneAndUpdate(
        { _id: ownerAccount._id }, 
        { 
            $push: { apiUsage: time_now } ,
            $inc: { credits: -1 }
        }, 
        { new: true } 
    ).then(res=>console.log(res.credits))
        
    res.status(200).json({profile:full_profile})
    
    
    
})

router.get('/:profile_id/main',async(req,res)=>{
    const queryParams=req.query
    
})


router.get('/:profileId/details',async(req,res)=>{
    const queryParams=req.query
    
})


router.get('/:profileId/network',async(req,res)=>{
    const queryParams=req.query
    
})


router.get('/:profileId/posts',async(req,res)=>{
    const queryParams=req.query
    
})




module.exports=router