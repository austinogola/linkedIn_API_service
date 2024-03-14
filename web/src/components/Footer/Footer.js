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
    MenuItem
  } from "@chakra-ui/react"
  import './Footer.css'
  import Logo from '../Logo/Logo'

const Footer=()=>{
    return(
        <Box classname='footer'  backgroundColor='#0F6972' p='50px'>
            <Flex flexFlow='wrap' justifyContent='space-around'>
                
                <Flex id='footerBox' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='600' fontSize='12px' color='#e5e1c4'>COMPANY</Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="/about" color='white' textDecoration='none'>About Us</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="/pricing" color='white' textDecoration='none'>Our Pricing</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="/contact" color='white' textDecoration='none'>Contact Us</Link></Text>
                    </Box>
                    
                </Flex>
                <Flex id='footerBox' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='600' fontSize='12px' color='#e5e1c4'>ACCOUNT</Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='/login' textDecoration='none'>Login</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='/app' textDecoration='none'>Register</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='white' textDecoration='none'>Account</Link></Text>
                    </Box>
                    
                </Flex>
                <Flex id='footerBox' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='600' fontSize='12px' color='#e5e1c4'>RESOURCES</Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='white' textDecoration='none'>API Documentation</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='white' textDecoration='none'>FAQ</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='white' textDecoration='none'>Talk to Us</Link></Text>
                    </Box>
                    
                </Flex>

                <Flex id='footerBox' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='600' fontSize='12px' color='#e5e1c4'>LEGAL</Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='white' textDecoration='none'>Privacy Policy</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='white' textDecoration='none'>Terms of Service</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="#" color='white' textDecoration='none'>Data Processing Addenum</Link></Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex justifyContent='center' mt='50px' p='5px'>
                <Flex borderTop='1px solid green' justifyContent='space-between' w='90%' alignItems='center'>
                    <Text fontSize='12px' color='white'>2023. All Rights Reserved</Text>
                </Flex>
            </Flex>
        </Box>
    )
}


export default Footer;