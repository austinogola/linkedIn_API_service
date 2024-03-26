const router = require("express").Router()
const {triggerProfile}=require('../services/remoteTrigger')
const Company=require('../models/Company')
const Profile=require('../models/Profile')

router.get('/:profileId',async(req,res)=>{
    const profileId = req.params.profileId;
    let full_profile=await Profile.findOne({profile_id:profileId},{ _id: 0 })
    if(!full_profile){
        triggerProfile(profileId)
        while(!full_profile){
            full_profile=await Profile.findOne({profile_id:profileId},{ _id: 0 })
        }
        res.status(200).json({profile:full_profile})
    }else{
        res.status(200).json({profile:full_profile})
    }
    
    
})

router.get('/:profileId/main',async(req,res)=>{
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