const sleep=(ms)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('TIMEOUT')
        }, ms);
    })
}

const  unregisterAllDynamicScripts=()=> {
    return new Promise(async(resolve, reject) => {
        try {
            const scripts = await chrome.scripting.getRegisteredContentScripts();
            const scriptIds = scripts.map(script => script.id);
            if(scriptIds[0]){
                try {
                    await chrome.scripting.unregisterContentScripts({'ids':scriptIds});
                } catch (error) {
                }
                
                resolve('unregistered all dynamic scripts')
                
            }else{
                resolve('no dynamic scripts to unregister')
            }
            
            
          } catch (error) {
            console.log(error.message);
            resolve(error.message)
            // throw new Error(message, {cause : error});
          }
    })
    
  }

  const setCsrfToken=()=> {
    return new Promise((resolve, reject) => {
        let token
        let checkInterval=setInterval(() => {
            if(!token){
                chrome.cookies.get({url: "https://www.linkedin.com",name: "JSESSIONID"},
                (cks)=>{
                    if(cks){
                        let val=cks.value
                        token=val.replace(/"/g, "")
                        chrome.storage.local.set({jtoken:token})
                        console.log(token);
                    }
                    
    
                });
            }else{
                clearInterval(checkInterval)
            }
           
        }, 500);
      
    });
}

let windowId
const openNewTab=(url,wait)=>{
    return new Promise((resolve, reject) => {
        if(windowId){

        }else{
            chrome.windows.create({
                focused:true,
                type:'normal',
                height:900,
                width:1600,
                url:url
            },async(window)=>{
                let ourTabId=window.tabs[0].id
                windowId=window.id
                if(wait){
                    chrome.tabs.onUpdated.addListener(function (tabId, info) {
                        if (info.status == 'complete') {
                          if(ourTabId==tabId){
                            resolve({tabId:tabId,windowId})
                          }
                        }
                      });
                }else{
                  resolve({tabId:ourTabId,windowId})
                }
            })
        }
     
        
        
        
        
        // chrome.windows.update(window_Id,{state:"fullscreen"})

    })
    
}

let toBeMade=[]
chrome.storage.local.set({toBeMade})

chrome.webRequest.onCompleted.addListener((dets)=>{

    const {url}=dets
     
    if(dets.initiator){
        if(!(dets.initiator.includes('chrome-extension'))){
           
            if(toBeMade[0]){
                let match=toBeMade.filter(item=>item.url==url)
                if(match[0]){
                    const {tabId}=dets
                    chrome.tabs.sendMessage(tabId,'check results')
                }

            }
           
        }
        
    }
    
    
},{urls:["<all_urls>"]},["responseHeaders","extraHeaders"])
