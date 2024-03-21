import {Box,Flex,Text,Image
  } from "@chakra-ui/react"
  

  import profImage from '../Images/icons8-users-100.png'
  import compImage from '../Images/icons8-company-100.png'
  import searchImage from '../Images/icons8-search-100.png'
  import salesImage from '../Images/icons8-sales-performance-100.png'

import './Home.css'

const SecondSection=()=>{
    return(
        <Box classname='secondSection' justifyContent='space-between'
         px='50px' py='20px' border='1px solid white' paddingBottom='80px'>
                <Text textAlign='center' fontSize='2rem' fontWeight='bold'>API Features</Text>
                <Flex flexFlow='wrap' justifyContent='space-around' >
                    <Box border='1px solid white' id='featureBox'
                      h='fit-content'>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <Image src ={profImage} boxSize='100px'/>
                        </Box>
                        <Box id='featureTextBox'>
                            <Text fontWeight='bold'>#1. People's Profile Data</Text>
                            <Text>
                                Obtain real-time, up-to-date public personal data of LinkedIn 
                                users with our scalable API, covering the entire LinkedIn network.
                            </Text>
                        </Box>

                    </Box>

                    <Box border='1px solid white' id='featureBox'
                      h='fit-content'>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <Image src ={compImage} boxSize='100px'/>
                        </Box>
                        <Box id='featureTextBox'>
                            <Text fontWeight='bold'>#2. Companies Data</Text>
                            <Text>
                                Retrieve comprehensive company profile data using our API, 
                                encompassing the entire LinkedIn corporate landscape.
                            </Text>
                        </Box>

                    </Box>
                    
                    <Box id='featureBox'
                    border='1px solid white' h='fit-content'>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <Image src ={searchImage} boxSize='100px'/>
                        </Box>
                        <Box id='featureTextBox'>
                            <Text fontWeight='bold'>#3. People  & Company Search Data</Text>
                            <Text>
                                Effortlessly search and discover people and companies by their industry
                                name,location, occupations and more with our API, streamlining your 
                                LinkedIn exploration.
                            </Text>
                        </Box>

                    </Box>
                    <Box id='featureBox'
                    border='1px solid white'  h='fit-content'>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <Image src ={salesImage} boxSize='100px'/>
                        </Box>
                        <Box id='featureTextBox'>
                            <Text fontWeight='bold'>#4. Company Sales Data</Text>
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