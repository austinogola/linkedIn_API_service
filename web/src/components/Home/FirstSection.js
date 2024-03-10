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
    Tabs ,
    TabList,
    Tab,
    TabPanel,
    TabPanels
  } from "@chakra-ui/react"
  import './Home.css'

const FirstSection=()=>{
    return(
        <Flex classname='firstSection' p='50px' backgroundColor='#0F6972' color='white' flexWrap='wrap' 
        justifyContent='space-between'>
            <Box  id="box3">
                <Text fontSize='4rem' m={0}fontWeight={500}>LinkedIn Public Data API</Text>
                <Text fontSize='1.2rem' fontWeight={500}>
                Unlock the Power of LinkedIn: Leverage Our Enterprise-Grade, 
                Real-Time API for Fast, Stable & Affordable Public Data Insights
                </Text>

                <Flex>
                    <Link href="#" cursor='pointer'>
                        <Button mr='10px'  cursor='pointer' h='50px' w='150px' border='none' color='white'
                            outline='none' backgroundColor='#F5A08C'
                            borderRadius='999px' fontWeight={500} transition='all .2s ease-in-out'
                             _hover={{backgroundColor:"#0F6972",color:'white' ,border:'2px solid #F5A08C'}}>
                        Get API Keys
                       </Button>
                    </Link>
                    <Link href="#" cursor='pointer'>
                        <Button ml='5px' h='50px' backgroundColor='#0F6972' w='150px' 
                        borderRadius='999px' border='2px solid #F5A08C' color='#F5A08C'
                        cursor='pointer' outline='none' >Try It For Free</Button>
                    </Link>
                </Flex>
            </Box>
            <Box  borderRadius='5px' h='400px' backgroundColor='white' id="box4" p='10px'>
                <Tabs color='black' border='1px solid red' align='center' isFitted >
                    <TabList border='1px solid red'>
                        <Tab w='20%'>Python</Tab>
                        <Tab w='20%'>Node</Tab>
                        <Tab w='20%'>JavaScript</Tab>
                        <Tab w='20%'>Java</Tab>
                        <Tab w='20%'>PHP</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                        <p>Python</p>
                        </TabPanel>
                        <TabPanel>
                        <p>Node</p>
                        </TabPanel>
                        <TabPanel>
                        <p>JavaScript</p>
                        </TabPanel>
                        <TabPanel>
                        <p>Java</p>
                        </TabPanel>
                        <TabPanel>
                        <p>Php</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    )
}


export default FirstSection;