const Company=require('../models/Company')


const newCompany=(CompanyObj)=>{
    return new Promise((resolve, reject) => {
        
        Company.create(CompanyObj).then(newCom=>{
            resolve({success:true,company:newCom})
        })
    })
    
}

module.exports={newCompany}