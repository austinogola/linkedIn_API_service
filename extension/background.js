importScripts('controls.js','./getters/profiles.js','./getters/companies.js')

let Chrome_Key
chrome.gcm.register(['803443465858'],(regId)=>{
    Chrome_Key=regId
    console.log('chrome_key--->',Chrome_Key);
})


chrome.gcm.onMessage.addListener(async msg=>{
    const cmdInput=msg.data['gcm.notification.getProfile'] || msg.data['gcm.notification.getCompany']
    if(msg.data['gcm.notification.getProfile']){
        getAndSendProfile(cmdInput)
        
    }
    console.log(cmdInput);
})