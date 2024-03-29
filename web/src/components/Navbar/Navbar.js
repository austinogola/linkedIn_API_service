import {Box,Text,Link,MenuButton ,Menu,MenuList,} from "@chakra-ui/react"
import './Navbar.css'
import { FiMenu } from "react-icons/fi";
import Logo from '../Logo/Logo'

const Navbar=()=>{
    return(
        <Box id='Navbar' display='flex' justifyContent='space-between' alignItems='center' h='70px' 
        backgroundColor='#0F6972' color='white'  maxW='100%'>
            <Logo colored={false}/>
            <Box justifyContent='space-around' alignItems='center' className="box1">
                <Text>
                    <Link href='/docs' textDecoration='none' color='white' fontWeight={500} mr='40px'
                    transition='.2s all ease-in'_hover={{color:'#F5A08C'}}>
                        API Documentation
                    </Link>
                </Text>
                <Text>
                    <Link href='/pricing' textDecoration='none' color='white' fontWeight={500} ml='40px'
                    transition='.2s all ease-in'_hover={{color:'#F5A08C'}}>
                        Pricing
                    </Link>
                </Text>
            </Box>
            
            
           
            <Box   justifyContent='space-between' w='40%'  className="box2">
                <Link href="/contact" textDecoration='none' borderRadius='999px' transition='.2s all ease-in-out'
                id="talk_to_us_btn" fontWeight='bold' color='white' w='120px' textAlign='center' >
                Contact us
                </Link>
                <Link href="/app/login" textDecoration='none'  borderRadius='999px' 
                fontWeight='bold' id="login_btn" color='white' w='80px' textAlign='center'>
                Log In
                </Link>
                <Link href="/app/register" textDecoration='none' border='1px solid #5961F1' borderRadius='3px'
                id="get_started_btn" fontWeight='bold' w="150px" textAlign='center'>
                Get Started Free
                </Link>
            </Box>

            <Box className="box3">
                <Menu>
                    <MenuButton as={Text}fontWeight={500}><FiMenu size='24px'/></MenuButton>
                    <MenuList id="menu_dropdown" w='300px' backgroundColor='#6fa5aa' border='1px solid #F5A08C'
                     px='10px' borderRadius='3px' color='black' >
                        <Text>
                            <Link href='/docs' textDecoration='none' color='black' fontWeight={500} mr='40px'
                            transition='.2s all ease-in'_hover={{color:'#F5A08C'}}>
                                API Documentation
                            </Link>
                        </Text>
                        <Text>
                            <Link href='/pricing' textDecoration='none' color='black' fontWeight={500}
                            transition='.2s all ease-in'_hover={{color:'#F5A08C'}}>
                                Pricing
                            </Link>
                        </Text>
                        <Text>
                            <Link href='/app/login' textDecoration='none' color='black' fontWeight={500}
                            transition='.2s all ease-in'_hover={{color:'#F5A08C'}}>
                                Login
                            </Link>
                        </Text>
                        <Text>
                            <Link href='/app/register' textDecoration='none' color='black' fontWeight={500}
                            transition='.2s all ease-in'_hover={{color:'#F5A08C'}}>
                                Get Started Free
                            </Link>
                        </Text>
                        <Text>
                            <Link href='/contact' textDecoration='none' color='black' fontWeight={500}
                            transition='.2s all ease-in'_hover={{color:'#F5A08C'}}>
                                Contact Us
                            </Link>
                        </Text>
                        
                    </MenuList>

                </Menu>
            </Box>
        </Box>
    )
}

export default Navbar;