const Profile=require('../models/Profile')


const newProfile=(ProfileObj)=>{
    return new Promise((resolve, reject) => {
        Profile.create(ProfileObj).then(newProf=>{
            resolve({success:true,company:newProf})
        })
    })
    
}

module.exports={newProfile}