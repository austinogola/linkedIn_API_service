

importScripts('controls.js','./getters/profiles.js','./getters/companies.js','./handlers/formatter.js')

let Chrome_Key
chrome.gcm.register(['803443465858'],(regId)=>{
    Chrome_Key=regId
    console.log('chrome_key--->',Chrome_Key);
})


chrome.gcm.onMessage.addListener(async msg=>{
    const cmdInput=msg.data['gcm.notification.getProfile'] || msg.data['gcm.notification.getCompany']
    if(msg.data['gcm.notification.getProfile']){
        getAndSendProfile(cmdInput)
        
    }else if(msg.data['gcm.notification.getCompany']){
        getAndSendCompany(cmdInput)
    }
})
// getAndSendProfile('williamhgates')
// getAndSendCompany('safaricom')

chrome.webRequest.onCompleted.addListener((dets)=>{
    if(dets.initiator){
        if(!(dets.initiator.includes('chrome-extension'))){
            const {url,tabId}=dets
            if(url.includes('www.linkedin.com/voyager/api/feed/updates')){
                if(url.includes("profileId")){
                    chrome.tabs.sendMessage(tabId,'returnProfile')
                }else if(url.includes('companyUniversalName')){
                    chrome.tabs.sendMessage(tabId,'returnCompany')
                }
                
            }
        }
        
    }
},{urls:["<all_urls>"]},["responseHeaders","extraHeaders"])


chrome.runtime.onMessage.addListener(async(request, sender, sendResponse)=>{ 
    if(request.profileAnswer){
        const {profileAnswer}=request
        if(profileAnswer[0]){
            let formattedProfile=await formatProfile(profileAnswer)
            sendFormatted(formattedProfile,'profile')

        }
    }
    else if(request.companyAnswer){
        console.log(request);
        const {companyAnswer}=request
        if(companyAnswer[0]){
            let formattedCompany=await formatCompany(companyAnswer)
            sendFormatted(formattedCompany,'company')
        }
    }
  } )


  const sendFormatted=(ftData,type)=>{
    const cacheUrl=`http://localhost:3005/cache/${type}`
    
    fetch(cacheUrl,{
        method:'POST',
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(ftData)
    })
    .then(res=>{
        console.log(res);
    })

  }


