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
        <Box classname='thirdSection' p='50px'>
            
            <Box textAlign='center'>
                <Text fontSize='2rem'>Access LinkedIn's Power with our API</Text>
                <Box px='100px'>
                    <Text fontSize='1rem'>Unlock LinkedIn's power with our cost-effective, high-volume API 
                    solution, providing 100% fresh, real-time data to meet even the most demanding 
                    requirements.
                    </Text>
                    <Button>Get Started Now</Button>
                </Box>
                
            </Box>
            <Text>Trusted by so many companies</Text>
        </Box>
    )
}


export default ThirdSection;