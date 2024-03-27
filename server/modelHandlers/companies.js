const Company=require('../models/Company')


const newCompany=(CompanyObj)=>{
    return new Promise(async(resolve, reject) => {
        const existingCompany= await Company.findOneAndUpdate(
            { company_id: CompanyObj.company_id }, // Search criteria
            CompanyObj, // New profile data to update or insert
            { new: true, upsert: true } // Options: return the updated document and create if it doesn't exist
          );
          resolve(existingCompany)
        
        // Company.create(CompanyObj).then(newCom=>{
        //     resolve({success:true,company:newCom})
        // })
    })
    
}

module.exports={newCompany}