

const getAndSendProfile=(profileId)=>{
    return new Promise(async(resolve, reject) => {
        chrome.storage.local.get(['toBeMade'],async res=>{
            let currentToBeMade=res.toBeMade
            let mm=new ProfileObjs(profileId)
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
            let tabUrl=`https://www.linkedin.com/in/${profileId}/`
            let newTabObj=await openNewTab(tabUrl,true)

        })
        
        return
        
        
    })
}

const ProfileObjs = class {
    constructor(profileId) {
      this.items = [
        {
            type:'main',
            url:`https://www.linkedin.com/voyager/api/identity/profiles/${profileId}/profileView`,
            response:null,
            profile:profileId
        },
        {
            type:'contacts',
            url:`https://www.linkedin.com/voyager/api/identity/profiles/${profileId}/profileContactInfo`,
            response:null,
            profile:profileId
            
        },
        // {
        //     type:'positions',
        //     url:`https://www.linkedin.com/voyager/api/identity/profiles/${profileId}/positionGroups`,
        //     response:null,
        //     profile:profileId

        // },
        // {
        //     type:'skills',
        //     url:`https://www.linkedin.com/voyager/api/identity/profiles/${profileId}/skills`,
        //     response:null,
        //     profile:profileId

        // },
        {
            type:'network',
            url:`https://www.linkedin.com/voyager/api/identity/profiles/${profileId}/networkinfo`,
            response:null,
            profile:profileId

        },
        {
            type:'badges',
            url:`https://www.linkedin.com/voyager/api/identity/profiles/${profileId}/memberBadges`,
            response:null,
            profile:profileId

        },
        // {
        //     type:'privacy',
        //     url:`https://www.linkedin.com/voyager/api/identity/profiles/${profileId}/privacySettings`,
        //     response:null,
        //     profile:profileId

        // },
        {
            type:'updates',
            url:`https://www.linkedin.com/voyager/api/feed/updates?`+new URLSearchParams({ "profileId": profileId,
            "q": "memberShareFeed",
            "moduleKey": "member-share",
            "count": 20,
            "start": 0}),
            response:null,
            profile:profileId
        
         }
      ]
      
    }
}

// const profileToBeMadeObjs=[

//     {
//         type:'privacy',
//         url:`https://www.linkedin.com/voyager/api/identity/profiles/${input}/privacySettings`,
//         response:null

//     },
    
//     {
//         type:'updates',
//         url:`https://www.linkedin.com/voyager/api/feed/updates?`+new URLSearchParams({ "profileId": input,
//         "q": "memberShareFeed",
//         "moduleKey": "member-share",
//         "count": 100,
//         "start": 0,
//         response:null
//     })
//     }
// ]
