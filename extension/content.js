chrome.runtime.onMessage.addListener(async(request,sender,sendResponse)=>{
    if(request=='check result'){
        sendResponse('Checking')
        
    }
})

const checkResults=()=>{
    
}