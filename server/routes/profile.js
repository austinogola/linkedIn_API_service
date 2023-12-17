const router = require("express").Router()

router.get('/:profileId',async(req,res)=>{
    const queryParams=req.query
    const profileId = req.params.profileId;
    console.log(queryParams);
    console.log('-------');
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