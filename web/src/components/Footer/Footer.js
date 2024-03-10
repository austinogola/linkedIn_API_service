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
            <Flex flexWrap='wrap'>
                
                <Flex w='25%' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='500' fontSize='14px'>COMPANY</Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>About Us</Link></Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>Our Pricing</Link></Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>Contact Us</Link></Text>
                    </Box>
                    
                </Flex>
                <Flex w='25%' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='500' fontSize='14px'>ACCOUNT</Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>My Account</Link></Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>API Keys</Link></Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>Recovery</Link></Text>
                    </Box>
                    
                </Flex>
                <Flex w='25%' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='500' fontSize='14px'>RESOURCES</Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>API Documentation</Link></Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>FAQ</Link></Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>Talk to Us</Link></Text>
                    </Box>
                    
                </Flex>

                <Flex w='25%' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='500' fontSize='14px'>LEGAL</Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>Privacy Policy</Link></Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>Terms of Service</Link></Text>
                        <Text fontSize='13px'><Link href="#" color='white' textDecoration='none'>Data Processing Addenum</Link></Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex justifyContent='center' mt='50px' p='5px'>
                <Flex borderTop='1px solid green' justifyContent='space-between' w='90%' alignItems='center'>
                    <Logo/>
                    <Text fontSize='12px' color='white'>2023. All Rights Reserved</Text>
                </Flex>
            </Flex>
        </Box>
    )
}


export default Footer;