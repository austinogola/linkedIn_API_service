const router = require("express").Router()
const Company=require('../models/Company')
const Profile=require('../models/Profile')
const {triggerCompany}=require('../services/remoteTrigger')

router.get('/:companyId',async(req,res)=>{
    const companyId = req.params.companyId;
    let full_profile=await Company.findOne({company_id:companyId},{ _id: 0 })
    if(!full_profile){
        triggerCompany(companyId)
        while(!full_profile){
            full_profile=await Company.findOne({company_id:companyId},{ _id: 0 })
        }
        res.status(200).json({company:full_profile})
    }else{
        res.status(200).json({company:full_profile})
    }
    
    
})

router.get('/:companyId/main',async(req,res)=>{
    const queryParams=req.query
    
})


router.get('/:companyId/affiliated',async(req,res)=>{
    const queryParams=req.query
    
})

router.get('/:companyId/employees',async(req,res)=>{
    const queryParams=req.query
    
})


router.get('/:companyId/updates',async(req,res)=>{
    const queryParams=req.query
    
})





















module.exports=router