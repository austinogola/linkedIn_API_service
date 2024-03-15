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
    Button
  } from "@chakra-ui/react"
  import Logo from "../Logo/Logo";
  import './app.css'
  import { useState,useEffect } from "react";
  import logoImg from '../Images/lg-colored.png'

const Index=({selected})=>{
    
    useEffect(()=>{
        const cookies = document.cookie.split(';');
        let webToken
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Check if the cookie starts with the specified name
            if (cookie.startsWith('webToken=')) {
                webToken=cookie.substring('webToken='.length)
            }
        }
        if(!webToken){
            // window.location.href = '/app/login';
            console.log('No token');
        }
        
    })

    const changeMenu=(e)=>{
        // e.preventDefault()
        let sec=e.target.id
        console.log(sec);
    }
    
    console.log(selected);
    return(
        <Box>
            <Box display='grid' gridTemplateColumns='15% 85%' h='100vh' backgroundColor='#EBEFF8'>
                <Box border='1px solid red' backgroundColor='white'  >
                    <Box display='grid' gridTemplateColumns='15% 85%' 
                    border='1px solid red' h='60px' m={0} 
                    >
                        <Box id='side_piece' w='3rem' display='flex'
                        alignItems='center' justifyContent='center'>
                            <Image src={logoImg} boxSize='2rem'/>
                        </Box>
                    </Box>

                    <Link  textDecoration='none' href='/app' display='flex'  paddingLeft='10px' cursor='pointer' 
                    id='play' onClick={changeMenu} 
                    backgroundColor={selected==='play'?'grey':'white'} _hover={{backgroundColor:'grey'}}
                    alignItems='center' justifyContent='flex-start'   h='35px'>
                        <Image src={logoImg} boxSize='20px'/>
                        <Text fontSize='12px' fontWeight='500' marginLeft='10px'>Playground</Text>
                    </Link>

                    <Link textDecoration='none' href='/app/keys' display='flex'  paddingLeft='10px' cursor='pointer' 
                    id='keys' onClick={changeMenu}
                    backgroundColor={selected==='keys'?'grey':'white'} _hover={{backgroundColor:'grey'}}
                    alignItems='center' justifyContent='flex-start'   h='35px'>
                        <Image src={logoImg} boxSize='20px'/>
                        <Text fontSize='12px' fontWeight='500' marginLeft='10px'>API Keys</Text>
                    </Link>

                    <Link textDecoration='none' href='/app/usage' display='flex'  paddingLeft='10px' cursor='pointer'
                    id='usage' onClick={changeMenu}
                    backgroundColor={selected==='usage'?'grey':'white'} _hover={{backgroundColor:'grey'}}
                    alignItems='center' justifyContent='flex-start'  h='35px'>
                        <Image src={logoImg} boxSize='20px'/>
                        <Text fontSize='12px' fontWeight='500' marginLeft='10px'>Usage</Text>
                    </Link>

                    <Link textDecoration='none' href='/app/settings' display='flex'  paddingLeft='10px' cursor='pointer'
                    id='settings' onClick={changeMenu}
                    backgroundColor={selected==='settings'?'grey':'white'} _hover={{backgroundColor:'grey'}}
                    alignItems='center' justifyContent='flex-start'  h='35px'>
                        <Image src={logoImg} boxSize='20px'/>
                        <Text fontSize='12px' fontWeight='500' marginLeft='10px'>Settings</Text>
                    </Link>
                    
                </Box>
                <Box border='1px solid red'  m={0}>
                    <Box border='1px solid red' h='60px' m={0}>

                    </Box>
                    {selected==='play'?
                        <Box p='20px'>
                            Playground
                        </Box>:
                        selected==='keys'?
                        <Box p='20px'>
                            API KEYS
                        </Box>:
                        selected==='usage'?
                        <Box p='20px'>
                            Usage
                        </Box>:
                        <Box p='20px'>
                        {selected}
                        </Box>}
                </Box>
                
                

            </Box>
        </Box>
    )
}



export default Index;