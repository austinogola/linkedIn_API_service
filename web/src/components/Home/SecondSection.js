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
    List,
    MenuButton ,
    Menu,
    MenuList,
    MenuItem
  } from "@chakra-ui/react"
  import './Home.css'

const SecondSection=()=>{
    return(
        <Flex classname='secondSection' justifyContent='space-between'
        flexWrap='wrap' p='50px' border='1px solid green' h='300px'>
                <Box border='1px solid blue' m={3} w='49%' h='100px'>

                </Box>
                <Box border='1px solid blue'm={3} w='49%' h='100px'>

                </Box>
                <Box border='1px solid blue'm={3} w='49%' h='100px'>

                </Box>
                <Box border='1px solid blue'm={3} w='49%' h='100px'>
                </Box>
        </Flex>
    )
}


export default SecondSection;