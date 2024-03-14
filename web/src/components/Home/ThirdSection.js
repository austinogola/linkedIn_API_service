import {
    Box,
    Flex,
    Text,
    Button,
    UnorderedList,
    Input,
    Image,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Link,
    List,
    MenuButton ,
    Menu,
    MenuList,
    MenuItem
  } from "@chakra-ui/react"
  import './Home.css'

const ThirdSection=()=>{
    return(
        <Box classname='thirdSection' py='50px'  backgroundColor='#e7f0f0'  position='relative'>
            
            <Box textAlign='center'>
                <Text fontSize='2rem' fontWeight='500'>Access LinkedIn's Power with our API</Text>
                <Box id='textBox3'>
                    <Text fontSize='1rem' fontWeight='500' textAlign='center' my='50px'>
                    Unlock LinkedIn's power with our cost-effective, high-volume API solution, 
                    providing 100% fresh, real-time data to meet even the most demanding requirements.
                    </Text>
                    <Link href='/login'>
                        <Button border='none' borderRadius='999px' cursor='pointer'
                        backgroundColor='#0F6972' h='50px' w='150px' color='white'>Get Started Now</Button>

                    </Link>
                    
                </Box>
                
            </Box>
            {/* <Text>Trusted by so many companies</Text> */}
        </Box>
    )
}


export default ThirdSection;