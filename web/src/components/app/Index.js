import {
    Box,
    Text,
    Image,
    Link,
    useDisclosure ,
    
  } from "@chakra-ui/react"
  import './app.css'
  import { useEffect } from "react";
  import logoImg from '../Images/lg-colored.png'
 

const Index=({selected,mainPart,sendTokenToParent})=>{

    let webToken
    
    useEffect(()=>{
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Check if the cookie starts with the specified name
            if (cookie.startsWith('webToken=')) {
                webToken=cookie.substring('webToken='.length)
            }
        }
        if(!webToken){
            window.location.href = '/app/login';
            console.log('No token');
        }
        
    })

    const sendToken = () => {
        // Example: Send data 'Hello' to parent component
        sendTokenToParent(webToken);
    };

    const changeMenu=(e)=>{
        // e.preventDefault()
        let sec=e.target.id
        console.log(sec);
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    
     
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
                <Box border='1px solid red'  m={0} p={0}>
                    <Box border='1px solid red' h='60px' m={0} display='flex' alignItems='center' 
                    px='10px'>
                        <Text>
                            {selected==='play'?'PLAYGROUND':
                            selected==='keys'?'API KEYS':
                            selected==='usage'?'API USAGE':
                            selected==='settings'?'SETTINGS':
                            'OTHER'}
                        </Text>
                        
                    </Box>
                    {mainPart}
                    
                    {/* {selected==='play'?
                        <Box p='20px'>
                            Playground
                        </Box>:
                        selected==='keys'?
                        <Box p='10px'>

                            <Box position='relative'>
                                <Button outline='none' border='none'cursor='pointer' h='30px'
                                backgroundColor='grey' marginTop='10px'
                                onClick={onOpen}
                                >Create New API Key</Button>

                                <Box backgroundColor='#999999' p='5px' w='50%'
                                    position='absolute' top='50px' left='0px' border='1px solid blue'>
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

                            

                        </Box>:
                        selected==='usage'?
                        <Box p='20px'>
                            Usage
                        </Box>:
                        <Box p='20px'>
                        {selected}
                        </Box>} */}
                </Box>
                
                

            </Box>
        </Box>
    )
}



export default Index;