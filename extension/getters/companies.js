const getAndSendCompany=(companyId)=>{
    return new Promise(async(resolve, reject) => {
        chrome.storage.local.get(['toBeMade'],async res=>{
            let currentToBeMade=res.toBeMade
            let mm=new CompanyObjs(companyId)
            toBeMade=[...currentToBeMade,...mm.items]

            chrome.storage.local.set({toBeMade})
            setCsrfToken()
            await unregisterAllDynamicScripts()
            await chrome.scripting.registerContentScripts([{
                id: 'temporary',
                js: ["inject.js"],
                matches: ["<all_urls>"],
                runAt: "document_start"
            }])
            let tabUrl=`https://www.linkedin.com/company/${companyId}/`
            let newTabObj=await openNewTab(tabUrl,true)

        })
        
        return
        
        
    })
}

const CompanyObjs = class {
    constructor(profileId) {
      this.items = [
        {
            type:'main',
            url:`https://www.linkedin.com/voyager/api/organization/companies?`+new URLSearchParams({
                decorationId: "com.linkedin.voyager.deco.organization.web.WebFullCompanyMain-35",
                q: "universalName",
                universalName: profileId,
            }),
            response:null,
            profile:profileId
        },
        {
            response:null,
            profile:profileId,
            type:'updates',
            url:`https://www.linkedin.com/voyager/api/feed/updates?`+new URLSearchParams({ 
                companyUniversalName: profileId,
            q: "companyFeedByUniversalName",
            moduleKey: "member-share",
            count: 20,
            start: 0,
        })    
    }
       
      ]
      
    }
}