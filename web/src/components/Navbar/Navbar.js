import {
    Box,
    Text,
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

const Navbar=()=>{
    return(
        <Box classname='Navbar'display='flex' justifyContent='space-around' alignItems='center' h='70px' 
        backgroundColor='#106971' color='white'>
            <Text>LOGO</Text>
            <Box display='flex' justifyContent='space-around' id="navbar_first_items" w='40%' >
               <Menu w='100%'>
                    <MenuButton as={Text}fontWeight={500}>Solutions</MenuButton>
                    <MenuList id="menu_dropdown"  w='400px' backgroundColor='white' 
                    display='flex' justifyContent='space-around' p={3}
                    border='1px solid grey' borderRadius='3px' >
                        <Text>LinkedIn Public Data API</Text>
                        <Text>Email Solutions</Text>
                        
                    </MenuList>

                </Menu>

                <Menu w='100%'>
                    <MenuButton as={Text}fontWeight={500}>Data APIs</MenuButton>
                    <MenuList id="menu_dropdown"  w='400px' backgroundColor='white' p={3}
                    border='1px solid grey' borderRadius='3px' >
                        <Text>Company API</Text>
                        <Text>People API</Text>
                        <Text>Jobs API</Text>
                        
                    </MenuList>

                </Menu>
                <Text fontWeight={500}>Use Cases</Text>
                <Menu w='100%'>
                    <MenuButton as={Text}fontWeight={500}>Resources</MenuButton>
                    <MenuList id="menu_dropdown"  w='400px' backgroundColor='white' p={3}
                    border='1px solid grey' borderRadius='3px' >
                        <Text>API Documentation</Text>
                        <Text>Try the API</Text>
                        <Text>FAQS</Text>
                        
                    </MenuList>

                </Menu>
                <Text>
                    <Link href='/pricing' textDecoration='none' color='white' fontWeight={500}>
                        Pricing
                    </Link>
                </Text>
                
            </Box>
            <Box display='flex'  justifyContent='space-around' w='30%'>
                <Link href="#" textDecoration='none' borderRadius='5px'
                id="talk_to_us_btn" fontWeight='bold' color='white' >
                Contact us
                </Link>
                <Link href="#" textDecoration='none' border='1px solid #5961F1' borderRadius='3px'
                fontWeight='bold' id="login_btn" color='#5961F1'>
                Log in
                </Link>
                <Link href="#" textDecoration='none' border='1px solid #5961F1' borderRadius='3px'
                id="get_started_btn" fontWeight='bold' >
                Get Started for Free
                </Link>
            </Box>
        </Box>
    )
}

export default Navbar;