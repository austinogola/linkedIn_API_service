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
                <Flex flexWrap='wrap'>
                    <Box border='1px solid white' 
                    m={3} w='49%' h='150px' display='grid' gridTemplateColumns='30% 70%'>
                        <Box>

                        </Box>
                        <Box>
                            <Text fontWeight='bold'>#1. Personal Data</Text>
                            <Text>
                                Obtain real-time, up-to-date public personal data of LinkedIn 
                                users with our scalable API, covering the entire LinkedIn network.
                            </Text>
                        </Box>

                    </Box>
                    <Box border='1px solid white'm={3} w='49%' h='150px' display='grid' gridTemplateColumns='30% 70%'>

                        <Box></Box>
                        <Box>
                            <Text fontWeight='bold'>#2. Companies Data</Text>
                            <Text>
                                Retrieve comprehensive company profile data using our API, 
                                encompassing the entire LinkedIn corporate landscape.
                            </Text>
                        </Box>

                    </Box>
                    <Box border='1px solid white'm={3} w='49%' h='150px' display='grid' gridTemplateColumns='30% 70%'>
                        <Box></Box>
                        <Box>
                            <Text fontWeight='bold'>#3. People & Company Search Data</Text>
                            <Text>
                                Effortlessly search and discover people and companies with our API, 
                                streamlining your LinkedIn exploration.
                            </Text>
                        </Box>

                    </Box>
                    <Box border='1px solid white'm={3} w='49%' h='150px' display='grid' gridTemplateColumns='30% 70%'>
                        <Box></Box>
                        <Box>
                            <Text fontWeight='bold'>#4. Company Jobs & Employee Data</Text>
                            <Text>
                                Seamlessly obtain employee lists of LinkedIn companies using our API, 
                                enriching your corporate data insights.
                            </Text>
                        </Box>
                    </Box>

                </Flex>
                
        </Box>
    )
}


export default SecondSection;