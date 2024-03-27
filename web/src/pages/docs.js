import {
    Box, Flex,Text,Button, Table,Thead,Tbody,Tr,Th,Td
  } from "@chakra-ui/react"

  import { FiChevronDown,FiChevronRight } from "react-icons/fi";

import Logo from "../components/Logo/Logo";
import ExamplePanel from "../components/Docs/ExamplePanel";
import { useState } from "react";
import '../components/Docs/Docs.css'



  const Docs=()=>{
    const [openedFields,setOpenFields]=useState({basic:true,search:false,selected:'AA'})
    const toggleBasicField=()=>{
        setOpenFields({...openedFields,basic:!openedFields.basic,selected:'AA'})

    }
    const toggleSearchField=()=>{
        setOpenFields({...openedFields,search:!openedFields.search,selected:'BB'})
    }
    const setSelected=(e)=>{
        let val=e.target.id
        console.log(val);
        const allSelectors=document.querySelectorAll('.selectors')
        allSelectors.forEach(elmt=>{
            elmt.style.backgroundColor='inherit'
        })
        e.target.style.backgroundColor='#EDEDED'
        setOpenFields({...openedFields,selected:val})
        if(val.includes('A')){

        }else{

        }
    }
    return(
        <Box h='100vh'>
            <Box px='15px' backgroundColor='black' h='15vh'>
                <Flex justifyContent='start'><Logo/></Flex>
            </Box>
            <Box display='grid' gridTemplateColumns='20% 80%' h='85vh' id='mainBox'>
                <Box  p='15px' backgroundColor='#F5F6F8' minW='200px'>
                    <Text fontSize='18px' fontWeight='500'>API Endpoints</Text>

                    <Box>
                        <Flex alignItems='center' cursor='pointer' justifyContent='space-between'
                        onClick={toggleBasicField} >
                            <Text fontSize='16px'>People & Company Data </Text>
                            <Box position='relative' top='4px' >
                            {openedFields.basic?<FiChevronDown color='black' />:
                            <FiChevronRight color='black' />}
                             </Box>
                            
                        </Flex>
                        {openedFields.basic?
                            <Box px='5px'>
                            <Flex alignItems='center' h='30px' my='3px' p='2px'
                            backgroundColor='#EDEDED' cursor='pointer' className='selectors' id='A0' onClick={setSelected}>
                                <Button border='1px solid #186FAF' 
                                outline='none' fontSize='10px' h='15px'
                                backgroundColor='#186FAF' color='white' mx='2px'
                                borderRadius='1px'>POST</Button>
                                <Text fontSize='13px'>Profile</Text>
                            </Flex>
                        
                            <Flex alignItems='center'  h='30px' my='3px' p='2px'
                            cursor='pointer' className='selectors' id='A1' onClick={setSelected}>
                                <Button border='1px solid #186FAF' 
                                outline='none' fontSize='10px' h='15px'
                                backgroundColor='#186FAF' color='white' mx='2px'
                                borderRadius='1px'>POST</Button>
                                <Text fontSize='13px'>Company</Text>
                            </Flex>
                        </Box>:null}
                        
                        

                    </Box>

                    <Box>
                    {/* <Flex alignItems='center' cursor='pointer' justifyContent='space-between' 
                    onClick={toggleSearchField} >
                            <Text fontSize='16px'>Search People & Companies </Text>
                            <Box position='relative' top='4px' >
                            {openedFields.search?<FiChevronDown color='black' />:
                            <FiChevronRight color='black' />} </Box>
                    </Flex> */}
                    {openedFields.search?
                        <Box px='5px'>
                            <Flex alignItems='center' h='30px' my='3px' p='2px' cursor='pointer'
                            className='selectors' id='B0' onClick={setSelected}>
                                <Button border='1px solid #186FAF' 
                                outline='none' fontSize='10px' h='15px'
                                backgroundColor='#186FAF' color='white' mx='2px'
                                borderRadius='1px'>POST</Button>
                                <Text fontSize='13px'>Profiles</Text>
                            </Flex>
                        
                            <Flex alignItems='center'  h='30px' my='3px' p='2px'
                            cursor='pointer'
                            className='selectors' id='B1' onClick={setSelected}>
                                <Button border='1px solid #186FAF' 
                                outline='none' fontSize='10px' h='15px'
                                backgroundColor='#186FAF' color='white' mx='2px'
                                borderRadius='1px'>POST</Button>
                                <Text fontSize='13px'>Companies</Text>
                            </Flex>
                        </Box>:null}
                        

                    </Box>

                    
                    
                </Box>
                <Box  p='15px' overflowY='auto' h='400px'>
                        {openedFields.selected==='A0'?
                        <Box px='15px'>
                            <Text fontSize='20px' fontWeight='500' borderBottom='1px solid #1D2429' 
                            my='10px'>Profile Data </Text>
                            
                            <span style={{backgroundColor:'#EDEDED',padding:'5px',borderRadius:'5px' }}>
                                <span style={{marginRight:'10px',fontWeight:'500' }}>POST</span>
                                <span>https://api.apedata.net/profile</span>
                            </span>

                            {/* <ExamplePanel url='https://api.apedata.net/profile'/> */}
                            <Text fontSize='16px' fontWeight='500' color='#8e9194' 
                            borderBottom='1px solid #bbbdbe' my='20px'>Request Parameters </Text>

                            <table >
                                <thead>
                                    <tr >
                                        <th>Parameter</th>
                                        <th>Details</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>profile_id</td>
                                        <td>string</td>
                                        <td>'williamhgates'</td>
                                    </tr>
                                    <tr>
                                        <td>bypass_cache</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                    </tr>
                                </tbody>
                            </table>
                            

                        </Box>:


                        openedFields.selected==='A1'?
                        <Box px='15px'>
                            <Text fontSize='20px' fontWeight='500' borderBottom='1px solid #1D2429' 
                            my='10px'>Company Data </Text>
                            
                            <span style={{backgroundColor:'#EDEDED',padding:'5px',borderRadius:'5px' }}>
                                <span style={{marginRight:'10px',fontWeight:'500' }}>POST</span>
                                <span>https://api.apedata.net/company</span>
                            </span>

                            <Text fontSize='16px' fontWeight='500' color='#8e9194' 
                            borderBottom='1px solid #bbbdbe' my='20px'>Request Parameters </Text>

                            <table >
                                <thead>
                                    <tr >
                                        <th>Parameter</th>
                                        <th>Details</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>company_id</td>
                                        <td>string</td>
                                        <td>'ibm'</td>
                                    </tr>
                                    <tr>
                                        <td>bypass_cache</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Box>:


                        openedFields.selected==='B0'?
                        <Box px='15px'>
                            <Text fontSize='20px' fontWeight='500' borderBottom='1px solid #1D2429' 
                            my='10px'>Search Profiles </Text>
                            
                            <span style={{backgroundColor:'#EDEDED',padding:'5px',borderRadius:'5px' }}>
                                <span style={{marginRight:'10px',fontWeight:'500' }}>POST</span>
                                <span>https://api.apedata.net/profileSearch</span>
                            </span>

                            <Text fontSize='16px' fontWeight='500' color='#8e9194' 
                            borderBottom='1px solid #bbbdbe' my='20px'>Request Parameters </Text>

                            <table >
                                <thead>
                                    <tr >
                                        <th>Parameter</th>
                                        <th>Details</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>profile_id</td>
                                        <td>string</td>
                                        <td>'williamhgates'</td>
                                    </tr>
                                    <tr>
                                        <td>bypass_cache</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Box>:


                        openedFields.selected==='B1'?
                        <Box px='15px'>
                            <Text fontSize='20px' fontWeight='500' borderBottom='1px solid #1D2429' 
                            my='10px'>Search Companies </Text>
                            
                            <span style={{backgroundColor:'#EDEDED',padding:'5px',borderRadius:'5px' }}>
                                <span style={{marginRight:'10px',fontWeight:'500' }}>POST</span>
                                <span>https://api.apedata.net/companySearch</span>
                            </span>
                        </Box>:


                        openedFields.selected==='AA'?
                        <Box px='15px'>
                            <Text fontSize='25px' fontWeight='500'>People and Company Data </Text>
                            <Text fontSize='14px'>
                                The "People & Company Data" endpoint group provides access to real-time 
                                LinkedIn data for both individuals and companies. To utilize these 
                                endpoints, users are required to make an HTTP POST request and provide 
                                the API key obtained from ApeData. Additionally, users must have a 
                                positive credit balance in order to access this data.
                            </Text>
                        </Box>:


                        openedFields.selected==='BB'?
                        <Box px='15px'>
                            <Text fontSize='25px' fontWeight='500'>Search People and Companies </Text>
                            <Text fontSize='14px'>
                                The "People and Companies serach" endpoint facilitates targeted searches for 
                                up-to-date personal and company profiles. To utilize these 
                                endpoints, users are required to make an HTTP POST request and provide 
                                the API key obtained from ApeData. Additionally, users must have a 
                                positive credit balance in order to access this data.
                            </Text>
                        </Box>:null
                         }
                        
                       

                </Box>
                
            </Box>
            
            
        </Box>
    )
}

export default Docs;