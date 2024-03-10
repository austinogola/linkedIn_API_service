import {
    Box,
    Text,
    Flex,
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

  import './Navbar.css'
  import { FiMenu } from "react-icons/fi";

  import Logo from '../Logo/Logo'
 

const Navbar=()=>{
    return(
        <Box classname='Navbar' display='flex' justifyContent='space-between' alignItems='center' h='70px' 
        backgroundColor='#0F6972' color='white' px='50px'>
            <Logo/>
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
                <Link href="#" textDecoration='none' borderRadius='999px' transition='.2s all ease-in-out'
                id="talk_to_us_btn" fontWeight='bold' color='white' w='120px' textAlign='center' >
                Contact us
                </Link>
                <Link href="/login" textDecoration='none'  borderRadius='999px' 
                fontWeight='bold' id="login_btn" color='white' w='80px' textAlign='center'>
                Log In
                </Link>
                <Link href="" textDecoration='none' border='1px solid #5961F1' borderRadius='3px'
                id="get_started_btn" fontWeight='bold' w="150px" textAlign='center'>
                Get Started Free
                </Link>
            </Box>

            <Box className="box3">
                <Menu w='100%'>
                    <MenuButton as={Text}fontWeight={500}><FiMenu size='24px'/></MenuButton>
                    <MenuList id="menu_dropdown"  w='400px' backgroundColor='#6fa5aa' 
                     px='10px'
                    border='1px solid #6fa5aa' borderRadius='3px' color='black' >
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
                            <Link href='/login' textDecoration='none' color='black' fontWeight={500}
                            transition='.2s all ease-in'_hover={{color:'#F5A08C'}}>
                                Login
                            </Link>
                        </Text>
                        <Text>
                            <Link href='/register' textDecoration='none' color='black' fontWeight={500}
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