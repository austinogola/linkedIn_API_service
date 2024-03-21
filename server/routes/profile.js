const router = require("express").Router()
const {triggerProfile}=require('../services/profileService')

router.get('/:profileId',async(req,res)=>{
    const profileId = req.params.profileId;
    triggerProfile(profileId)
    console.log(profileId);
    res.send('EVERITHIG OKAY')
    
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