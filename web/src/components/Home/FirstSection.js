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

const FirstSection=()=>{
    return(
        <Flex classname='firstSection' p='50px'>
            <Box w='50%' border='1px solid red'>
                <Text fontSize='5rem' m={0}fontWeight={500}>LinkedIn Public Data API</Text>
                <Text fontSize='1.2rem' fontWeight={500}>
                Unlock the Power of LinkedIn: Leverage Our Enterprise-Grade, 
                Real-Time API for Fast, Stable & Affordable Public Data Insights
                </Text>

                <Flex>
                    <Button m={5}>Get Started for Free</Button>
                    <Button m={5}>Get Started with Google</Button>
                </Flex>
            </Box>
            <Box w='50%' border='1px solid red'>

            </Box>
        </Flex>
    )
}


export default FirstSection;