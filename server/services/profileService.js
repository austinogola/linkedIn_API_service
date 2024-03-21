require('dotenv').config()

const detChromeKey=()=>{
  const cKeys=[
    'APA91bHYhok5kPDQJ2ayAbwpGYFpia3gxqTAO5W2hrh3E8XJybw67d5-QO5jalDGRj581IaZzKzdZYaBGzXShtrRGiOccRy5mk6TRv2OiVC1r1hX0E1BLlUExPO81fVA-6HgJwnaOiqLG9gsuiiaA7GUD7Y_H_wbpw'
  ]

  return cKeys[0]
}

async function triggerProfile(profileId) {
    const requestBody={
      "to":detChromeKey(),
      "notification":{
        "getProfile":profileId
      }
    }

    const url=`https://fcm.googleapis.com/fcm/send`

    
    return new Promise((resolve) => {
      console.log('Runnig trigger');
      fetch(url,{
        method:'POST',
        headers:{
          "Content-Type":'application/json',
          "Authorization":"key="+process.env.gcmAuth
        },
        body:JSON.stringify(requestBody)
      })
      .then(async res=>{
       
        let response=await res.text()
        console.log(response);
      })
    });
  }
  
  module.exports = {
    triggerProfile,
  };