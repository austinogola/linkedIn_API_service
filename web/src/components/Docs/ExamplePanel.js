import {Box,Flex,Text,Button,Link,Tabs ,TabList,Tab,TabPanel,TabPanels,Stack,Code
} from "@chakra-ui/react"

const ExamplePanel=({url})=>{
    return(
        <Box  borderRadius='5px' h='400px' backgroundColor='white' w="500px" p='10px'>
                <Tabs   isFitted >
                    <TabList  backgroundColor='white' h='30px' borderBottom='#E2E8F0 1px solid'>
                        <Tab w='25%' border="none" backgroundColor='white' 
                            borderBottom='2px solid #E2E8F0' cursor='pointer' color='#a5a9ac'
                            _selected={{ borderBottom: '#3182CE 2px solid',color:'black' }}>
                                cURL
                        </Tab>
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
                        
                    </TabList>
                    

                    <TabPanels>
                        <TabPanel>
                            <Stack direction='column' color='black' fontSize='13px' padding='10px'>
                                <Code children={`curl -X POST \\` }  />
                                <Code children={` -H "Content-Type: application/json"  \\` }  />
                                <Code children={` -H "X-API-KEY: your_api_key"  \\` }  />
                                <Code children={` -d '{"profile_id": "williamhgates"}' \\` }  />
                                {/* <Code colorScheme='yellow' children={'-H "Content-Type: application/json" \\'} /> */}
                               
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack direction='column' color='black' fontSize='13px' padding='10px'>
                                <Code children={`url = "${url}"` } />
                              
                                <Code children="headers = {'X-API-KEY': 'your_api_key'}"  />
                               
                                <Code colorScheme='yellow' children="payload = {'profile_id': 'williamhgates'}" />
                               
                                <Code colorScheme='red' children="resp = requests.post(url, json=payload, headers=headers)" />
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack direction='column' color='black' fontSize='13px' padding='10px'>
                                <Code children="const fetch = require('node-fetch');"  />
                                
                                <Code children={`const url = "${url}"` }  />
                              
                                <Code children={`const headers = {'X-API-KEY': 'your_api_key' }`}  />

                                <Code colorScheme='yellow' children="const body = JSON.stringify({'profile_id': 'williamhgates'})" />
                             
                                <Code colorScheme='red' children='fetch(url, {method:"POST",headers,body}))' />
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
    )
}

export default ExamplePanel