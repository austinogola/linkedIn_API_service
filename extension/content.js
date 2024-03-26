chrome.runtime.onMessage.addListener(async(request,sender,sendResponse)=>{
    if(request=='check result'){
        sendResponse('Checking')
        
    }
    if(request=='returnProfile'){
        sendResponse('Checking')
        checkProfile()
        
    }
    if(request=='returnCompany'){
        sendResponse('Checking')
        checkCompany()
        
    }
})

const checkCompany=()=>{
    let returned=JSON.parse(localStorage.getItem('allMade'))
    let first=returned[0]
    let allForProfile=returned.filter(item=>item.profile==first.profile)
    let allRemaining=returned.filter(item=>item.profile!=first.profile)
    chrome.runtime.sendMessage({companyAnswer:allForProfile})
    localStorage.setItem('allMade',JSON.stringify(allRemaining))
}

const checkProfile=()=>{
    let returned=JSON.parse(localStorage.getItem('allMade'))
    let first=returned[0]
    let allForProfile=returned.filter(item=>item.profile==first.profile)
    let allRemaining=returned.filter(item=>item.profile!=first.profile)
    chrome.runtime.sendMessage({profileAnswer:allForProfile})
    localStorage.setItem('allMade',JSON.stringify(allRemaining))
}