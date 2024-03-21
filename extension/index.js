const sleep=(ms)=>{
    return new Promise(async(resolve, reject) => {
        setTimeout(() => {
            resolve ('DONE')
        }, ms);
    })
}
(async function(xhr,win,st) {

    var XHR = XMLHttpRequest.prototype;
    let WIND=window;
   
  

    // let snH=st.getItem('SNHeaders')
    // let SNHeaders=snH=='undefined'?[]:JSON.parse(snH)

    let jtoken=st.getItem('jtoken')
   
  
   

    var originalFetch = window.fetch
    var send = XHR.send;
    var open = XHR.open;

    WIND.fetch=function(callback){
       
        
        
        let url =typeof(callback)=='string'?callback:callback.url
        console.log();
        
        if(url.includes('chrome-extension://')){
            return
        }

        return originalFetch.apply(this, arguments);
    }

    XHR.open=async function (method,URL,oy) {
        
        
        return open.apply(this, arguments);  
    }

    XHR.send = async function(postData) {
        
        this.addEventListener('load', async function() {
            const {responseURL,responseType,response}=this
            let url=responseURL

            if(url.toLowerCase().includes('voyager')){
                await sleep(1500)
                let toBeMade=JSON.parse(st.getItem('toBeMade'))
                let unMade=toBeMade.shift()
                st.setItem('toBeMade',JSON.stringify(toBeMade))
                if(unMade){
                    console.log('ll',unMade);
                    let URL=unMade.url
                    var mlr = new XMLHttpRequest();
                    mlr.onreadystatechange = function() {
                        if (mlr.readyState === XMLHttpRequest.DONE) {
                            if(mlr.status===200){
                                let updatedObj={...unMade,response:mlr.responseText}
                                let allMade=JSON.parse(st.getItem('allMade'))
                                allMade.push(updatedObj)
                                console.log(allMade);
                                st.setItem('allMade',JSON.stringify(allMade))

                                
                                
                                // console.log(mlr.responseText)
                            }else{
                                console.log(mlr.status);
                            }
                        }
                    }
                    mlr.open('GET', URL, true);
                    mlr.withCredentials = true
                    mlr.setRequestHeader('csrf-token', jtoken);
                    mlr.send();
                }
                
            }
            
        })

        return send.apply(this, arguments);
    }
    

})(XMLHttpRequest,window,localStorage)