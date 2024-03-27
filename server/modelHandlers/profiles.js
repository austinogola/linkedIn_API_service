const Profile=require('../models/Profile')


const newProfile=(ProfileObj)=>{
    return new Promise(async(resolve, reject) => {
        const existingProfile = await Profile.findOneAndUpdate(
            { profile_id: ProfileObj.profile_id }, // Search criteria
            ProfileObj, // New profile data to update or insert
            { new: true, upsert: true } // Options: return the updated document and create if it doesn't exist
          );
          resolve(existingProfile)
        // Profile.create(ProfileObj).then(newProf=>{
        //     resolve({success:true,company:newProf})
        // })
    })
    
}

module.exports={newProfile}