const router = require("express").Router()
const Company=require('../models/Company')
const Profile=require('../models/Profile')
const {triggerCompany}=require('../services/remoteTrigger')
const  {checkApiToken} = require('../authHandlers/token')
const {User, ApiKey,Account}=require('../models/Api')

router.post('/',checkApiToken,async(req,res)=>{
    const {company_id,bypass_cache} = req.body;
    const {KEY,ownerAccount}=req
    let full_profile=await Company.findOne({company_id:company_id},{ _id: 0 ,__v:0,last_called:0})
    if(!full_profile){
        triggerCompany(company_id)
        while(!full_profile){
            full_profile=await Company.findOne({company_id:company_id},{ _id: 0 ,__v:0,last_called:0})
        }
    }
    const time_now=new Date().getTime()
    Company.findOneAndUpdate(
        { company_id: company_id },
        { $set: { last_called:time_now } }, 
        { new: true } 
    ).then(res=>console.log(res.company_id))
        
    ApiKey.findOneAndUpdate(
        { _id: KEY._id },
        { $push: { usage: time_now } },
        { new: true } 
    ).then(res=>console.log(res.usage))
    

    Account.findOneAndUpdate(
        { _id: ownerAccount._id }, 
        { 
            $push: { apiUsage: time_now } ,
            $inc: { credits: -1 }
        }, 
        { new: true } 
    ).then(res=>console.log(res.credits))
        
    res.status(200).json({company:full_profile})
    
    
    
})

router.get('/:company_id/main',async(req,res)=>{
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