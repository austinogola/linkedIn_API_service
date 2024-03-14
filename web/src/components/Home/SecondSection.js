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
        <Box classname='secondSection' justifyContent='space-between'
         px='50px' py='20px' border='1px solid white' >
                <Text textAlign='center' fontSize='2rem' fontWeight='bold'>API Features</Text>
                <Flex flexFlow='wrap' justifyContent='space-around' >
                    <Box border='1px solid white' id='featureBox'
                      h='fit-content'>
                        <Box>

                        </Box>
                        <Box>
                            <Text fontWeight='bold'>#1. People's Profile Data</Text>
                            <Text>
                                Obtain real-time, up-to-date public personal data of LinkedIn 
                                users with our scalable API, covering the entire LinkedIn network.
                            </Text>
                        </Box>

                    </Box>

                    <Box border='1px solid white' id='featureBox'
                      h='fit-content'>
                        <Box>

                        </Box>
                        <Box>
                            <Text fontWeight='bold'>#2. Companies Data</Text>
                            <Text>
                                Retrieve comprehensive company profile data using our API, 
                                encompassing the entire LinkedIn corporate landscape.
                            </Text>
                        </Box>

                    </Box>
                    
                    <Box id='featureBox'
                    border='1px solid white' h='fit-content'>
                        <Box></Box>
                        <Box>
                            <Text fontWeight='bold'>#3. People  Search Data</Text>
                            <Text>
                                Effortlessly search and discover people by their names,occupation,
                                 location and more  with our API, streamlining your LinkedIn exploration.
                            </Text>
                        </Box>

                    </Box>
                    <Box id='featureBox'
                    border='1px solid white'  h='fit-content'>
                        <Box></Box>
                        <Box>
                            <Text fontWeight='bold'>#4. Company  Search Data</Text>
                            <Text>
                                Effortlessly search and discover companies by industry, size,
                                locations and more with our API, streamlining your LinkedIn exploration.
                            </Text>
                        </Box>

                    </Box>
                    <Box id='featureBox'
                    border='1px solid white'  h='fit-content'>
                        <Box></Box>
                        <Box>
                            <Text fontWeight='bold'>#5. Company Sales Data</Text>
                            <Text>
                                Discover a new world of insight on companies by accessing info such as revenues,
                                hirings and more with our API
                                
                            </Text>
                        </Box>
                    </Box>

                </Flex>
                
        </Box>
    )
}


export default SecondSection;