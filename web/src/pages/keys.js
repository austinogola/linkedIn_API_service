import {
    Box,
    Flex,
    Text,
    UnorderedList,
    Input,
    Image,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Link,
    ListItem,
    List,
    MenuButton ,
    Menu,
    MenuList,
    MenuItem,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    useDisclosure ,
    FormControl,
    FormLabel
  } from "@chakra-ui/react"

  import Footer from "../components/Footer/Footer";
  import Index from '../components/app/Index'
  import Playground from '../components/app/Playground'
  import KeysPart from '../components/app/Keys'
  import { useState,useEffect } from "react";
  import '../components/app/app.css'

const Keys=()=>{
    const [allApiKeys,setAllApiKeys]=useState([])
    let webToken
    const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Check if the cookie starts with the specified name
            if (cookie.startsWith('webToken=')) {
                webToken=cookie.substring('webToken='.length)
            }
        }
        
    const getAllKeys=()=>{
            return new Promise(async(resolve, reject) => {
                let url=`http://localhost:3005/api/data/config`
                try {
                    fetch(url,{
                        method:'GET',
                        headers:{
                            "Content-Type":'application/json',
                            "authorization":`Bearer ${webToken}`}
                    }).then(async res=>{
                        let response=await res.json()
                        const theKeys=response.data.apiKeys
                        setAllApiKeys(theKeys)
                        resolve(theKeys);
                    })
                } catch (error) {
                    
                }
            })
        }
    getAllKeys()
        
    const epochToReadableDate = (epochTimestamp) => {
        if(epochTimestamp==0){
            return ('Never')
        }
        const date = new Date(parseFloat(epochTimestamp));
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
        const day = ('0' + date.getDate()).slice(-2);

        const readableDate = `${year}-${month}-${day}`
        return(readableDate)
    }

    const handleNewKey=(e)=>{
        // e.preventDefault()
        const keyName=document.querySelector('#keyNameInput').value
        const createdAt=new Date().getTime()

        if(keyName && keyName.length>1){
            let url=`http://localhost:3005/api/keys/new`
            console.log('Fetching');
            try {
                fetch(url,{
                    method:'POST',
                    headers:{
                        "Content-Type":'application/json',
                        "authorization":`Bearer ${webToken}`},
                    body:JSON.stringify({name:keyName,createdAt})
                })
                .then(async(response)=>{
                    let res=await response.json()
                    console.log(res);
                })
                
            } catch (error) {
                
            }
            
        }else{
            console.log('Not a valid keyname');
        }
        
    }
    return(
        <Box>
            <Index selected='keys' title='API KEYS'
            mainPart={
                <Box p='20px' >
                    <Text fontSize='14px'>Your secret API keys are listed below</Text>
                    <Text fontSize='14px'>Do not share your API key with others, or expose it in the browser or 
                    other client-side code</Text>
                    <Text fontSize='14px'>You can see usage per API key on the 
                    <Link href='/app/usage' textDecoration='none'> usage page.</Link></Text>
                    <table border='1px solid blue' w='50%'>
                        <thead >
                            <tr >
                                <th>Name</th>
                                <th>Secret Key</th>
                                <th>Created</th>
                                <th>Last Used</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allApiKeys.map(apiKey => (
                            <tr key={apiKey.key}>
                                <td>{apiKey.name}</td>
                                <td>{apiKey.key}</td>
                                <td>{epochToReadableDate(apiKey.created)}</td>
                                <td>{epochToReadableDate(apiKey.lastUsed)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Box position='relative'>
                        <Button outline='none' border='none'cursor='pointer' h='30px'
                            backgroundColor='grey' marginTop='10px'>Create New API Key
                        </Button>
                        <Box backgroundColor='#999999' p='5px' w='50%'position='absolute' 
                        top='50px' left='0px' border='1px solid blue'>
                        <Text color='black'>Create new secret Key</Text>
                        <FormControl >
                            <FormLabel>Name*</FormLabel>
                            <Input w='50%' required id='keyNameInput'/>
                            <Box display='flex' justifyContent='end'>
                                
                                <Button outline='none' border='none'cursor='pointer'
                                backgroundColor='red' m='5px'
                                >Cancel</Button>
                                <Button outline='none' border='none'cursor='pointer'
                                backgroundColor='blue' m='5px' onClick={handleNewKey}
                                >Create Key</Button>

                            </Box>
                        </FormControl>


                        </Box>
                    </Box>
                    

                    
                        
                </Box>
            }>

            </Index>
            
        </Box>
    )
}

export default Keys;