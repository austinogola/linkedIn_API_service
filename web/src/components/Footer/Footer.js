import {
    Box,
    Flex,
    Text,
    Link
  } from "@chakra-ui/react"
  import './Footer.css'

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
                        <Text fontSize='12px' fontWeight='500'><Link href="/app/login" color='white' textDecoration='none'>Login</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="/app/register"  color='white' textDecoration='none'>Register</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="/app" color='white' textDecoration='none'>Account</Link></Text>
                    </Box>
                    
                </Flex>
                
                <Flex id='footerBox' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='600' fontSize='12px' color='#e5e1c4'>RESOURCES</Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="/docs" color='white' textDecoration='none'>API Docs</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="faq" color='white' textDecoration='none'>FAQ</Link></Text>
                        <Text fontSize='12px' fontWeight='500'><Link href="/contact" color='white' textDecoration='none'>Talk to Us</Link></Text>
                    </Box>
                    
                </Flex>

                <Flex id='footerBox' justifyContent='center'>
                    <Box textAlign='left'>
                        <Text fontWeight='600' fontSize='12px' color='#e5e1c4'>LEGAL</Text>
                        <Text fontSize='11px' fontWeight='500'><Link href="/privacy" color='white' textDecoration='none'>Privacy Policy</Link></Text>
                        <Text fontSize='11px' fontWeight='500'><Link href="/terms" color='white' textDecoration='none'>Terms of Service</Link></Text>
                    </Box>
                </Flex>
            </Flex>
            <Box display='flex'justifyContent='center' mt='10px' p='5px'>
                <Flex borderTop='1px solid green' justifyContent='space-between' w='90%' alignItems='center'>
                <Text style={{fontFamily:"Figtree",fontSize:'1.5rem' ,fontWeight:'500',
                color:'white'}} m='0px'><strong>A</strong>peDa<strong>t</strong>a</Text>
                    <Text fontSize='12px' color='white'>2023. All Rights Reserved</Text>
                </Flex>
            </Box>
        </Box>
    )
}


export default Footer;