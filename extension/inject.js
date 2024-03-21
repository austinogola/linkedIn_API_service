var s = document.createElement('script');

s.src = chrome.runtime.getURL('index.js');
s.async = true;
s.referrerpolicy='same-origin'

chrome.storage.local.get(['toBeMade','jtoken'],res=>{
    if(res.toBeMade){
        const {toBeMade,jtoken}=res
        console.log(toBeMade,jtoken);
        localStorage.setItem('toBeMade',JSON.stringify(toBeMade))
        localStorage.setItem('allMade',JSON.stringify([]))
        localStorage.setItem('jtoken',res.jtoken)
        s.onload = function() {
            // this.remove();
        };
        (document.head || document.documentElement).appendChild(s);
    }
})