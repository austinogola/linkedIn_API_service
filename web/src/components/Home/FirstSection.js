import './Home.css'
import {Box,Flex,Text,Button,Link,Tabs ,TabList,Tab,TabPanel,TabPanels,Stack,Code
} from "@chakra-ui/react"
  

const FirstSection=()=>{
    return(
        <Flex id='firstSection' backgroundColor='#0F6972' color='white'
        flexFlow='wrap' justifyContent='space-between'
        >
            <Box  id="box3">
                <Text fontSize='3.5rem' fontWeight={500} m='0px' textAlign='center'>LinkedIn Public Data API</Text>
                <Text fontSize='1.2rem' fontWeight={400} textAlign='center'>
                Unlock the Power of LinkedIn: Leverage Our Enterprise-Grade, 
                Real-Time API for Fast, Stable & Affordable Public Data Insights
                </Text>

                <Flex justifyContent='center'>
                    <Link href="/register" cursor='pointer'>
                        <Button mr='10px'  cursor='pointer' h='40px' w='150px' border='none' color='white'
                            outline='none' backgroundColor='#F5A08C'
                            borderRadius='999px' fontWeight={500} transition='all .1s'
                             _hover={{transform:"scale(0.98)",color:'white' ,border:'2px solid #F5A08C'}}>
                        Get API Keys
                       </Button>
                    </Link>
                    {/* <Link href="#" cursor='pointer'>
                        <Button ml='5px' h='40px' backgroundColor='#0F6972' w='150px' 
                        borderRadius='999px' border='2px solid #F5A08C' color='#F5A08C'
                        cursor='pointer' outline='none' >Try It For Free</Button>
                    </Link> */}
                </Flex>
            </Box>
            <Box  borderRadius='5px' h='400px' backgroundColor='white' id="box4" p='10px'>
                <Tabs   isFitted >
                    <TabList  backgroundColor='white' h='30px' borderBottom='#E2E8F0 1px solid'>
                        <Tab w='25%' border="none" borderBottom='2px solid #E2E8F0'
                         backgroundColor='white' cursor='pointer' color='#a5a9ac'
                         _selected={{ borderBottom: '#3182CE 2px solid',color:'black' }}>
                            Python
                         </Tab>
                        <Tab w='25%'border="none" backgroundColor='white' 
                        borderBottom='2px solid #E2E8F0' cursor='pointer' color='#a5a9ac'
                        _selected={{ borderBottom: '#3182CE 2px solid',color:'black' }}>
                            Node.js
                        </Tab>
                        <Tab w='25%' border="none" backgroundColor='white' 
                        borderBottom='2px solid #E2E8F0' cursor='pointer' color='#a5a9ac'
                        _selected={{ borderBottom: '#3182CE 2px solid',color:'black' }}>
                            PHP
                        </Tab>
                        <Tab w='25%' border="none" backgroundColor='white' 
                        borderBottom='2px solid #E2E8F0' cursor='pointer' color='#a5a9ac'
                        _selected={{ borderBottom: '#3182CE 2px solid',color:'black' }}>
                            HTTP/REST
                        </Tab>
                    </TabList>
                    

                    <TabPanels>
                        <TabPanel>
                            <Stack direction='column' color='black' fontSize='13px' padding='10px'>
                                <Code color='#B80672' children="# Set API URL" />
                                <Code children='url = "https://api.iscraper.io/v2/profile-details"'  />
                                <Code color='#B80672' children='# Set API key' />
                                <Code children="headers = {'X-API-KEY': 'your_api_key'}"  />
                                <Code color='#B80672' children="# Set payload" />
                                <Code colorScheme='yellow' children="payload = {'profile_id': 'williamhgates'}" />
                                <Code color='#B80672' children='# Get Response'  />
                                <Code colorScheme='red' children="resp = requests.post(url, json=payload, headers=headers)" />
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack direction='column' color='black' fontSize='13px' padding='10px'>
                                <Code children="const fetch = require('node-fetch');"  />
                                <Code color='#B80672' children="// Set API URL" />
                                <Code children='const url = "https://api.iscraper.io/v2/profile-details"'  />
                                <Code colorScheme='yellow' children='# Set API key' />
                                <Code children={`const headers = {
                                    \n\n'X-API-KEY': 'your_api_key'}`}  />
                                <Code colorScheme='red' children="# Set payload" />
                                <Code colorScheme='yellow' children="const payload = {'profile_id': 'williamhgates'}" />
                                <Code children='# Get Response'  />
                                <Code colorScheme='red' children="resp = requests.post(url, json=payload, headers=headers)" />
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack direction='column' color='black' fontSize='13px' padding='10px'>
                                <Code color='#B80672' children="// Set API URL" />
                                <Code children='url = "https://api.iscraper.io/v2/profile-details"'  />
                                <Code colorScheme='yellow' children='# Set API key' />
                                <Code children="headers = {'X-API-KEY': 'your_api_key'}"  />
                                <Code colorScheme='red' children="# Set payload" />
                                <Code colorScheme='yellow' children="payload = {'profile_id': 'williamhgates'}" />
                                <Code children='# Get Response'  />
                                <Code colorScheme='red' children="resp = requests.post(url, json=payload, headers=headers)" />
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack direction='column' color='black' fontSize='13px' padding='10px'>
                                <Code color='#8C98A4' children="# Set API URL" />
                                <Code children='url = "https://api.iscraper.io/v2/profile-details"'  />
                                <Code colorScheme='yellow' children='# Set API key' />
                                <Code children="headers = {'X-API-KEY': 'your_api_key'}"  />
                                <Code colorScheme='red' children="# Set payload" />
                                <Code colorScheme='yellow' children="payload = {'profile_id': 'williamhgates'}" />
                                <Code children='# Get Response'  />
                                <Code colorScheme='red' children="resp = requests.post(url, json=payload, headers=headers)" />
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    )
}


export default FirstSection;