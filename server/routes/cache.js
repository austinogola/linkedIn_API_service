const router = require("express").Router()
const {User,Account}=require('../models/Api')
const Company=require('../models/Company')
const Profile=require('../models/Profile')
const {newCompany}=require('../modelHandlers/companies.js')
const {newProfile}=require('../modelHandlers/profiles.js')

router.post('/profile',async(req,res)=>{
    const {body}=req
    let profile_created=await newProfile(body)
    console.log(profile_created);
    res.send('received')
})

router.post('/company',async(req,res)=>{
    const {body}=req
    // console.log(body);
    let company_created=await newCompany(body)
    console.log(company_created);
    res.send('received')
    
})



module.exports=router