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
    ListItem,
    List,
    MenuButton ,
    Menu,
    MenuList,
    MenuItem,
    Button
  } from "@chakra-ui/react"
  import Logo from "../Logo/Logo";
  import './app.css'
  import { useState } from "react";

const Register=()=>{
    const [errors,setErrors]=useState({})

    function isValidEmail(email) {
        const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors({})
        let pass=document.querySelector('#pwd').value
        let confirmPass=document.querySelector('#pwd_confirm').value
        let email=document.querySelector('#email').value

        if(!email || email.length<1){
            return setErrors({email:'Field is required'})
        }else{
            if(!pass || pass.length<1){
                return setErrors({pwd:'Field is required'})
            }else{
                if(!confirmPass || confirmPass.length<1){
                    return setErrors({pwd_confirm:'Field is required'})
                }
                if(isValidEmail(email)){
                    if(pass!==confirmPass){
                        console.log(pass,confirmPass);
                        return setErrors({pwd:'Passwords do not match',pwd_confirm:'Passwords do not match'})
                    }
                    let url=`http://localhost:3005/auth/register`
                    try {
                        fetch(url,{
                            method:'POST',
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify({email,password:pass})
                        })
                        .then(async res=>{
                            let response= await res.json()
                            if(res.status===200){
                                const {webToken}=response
                                document.cookie = `webToken=${webToken}; max-age=${3 * 60 * 60};`
                                window.location.href = '/app';
                            }else{
                                if(response.type){
                                    if(response.type==='email'){
                                        return setErrors({email:response.message})
                                    }else{
                                        return setErrors({pwd:response.message})
                                    }
                                }
                                return setErrors({email:response.message,pwd:response.message})
                            }
                            
                        })
                        
                    } catch (error) {
                        return setErrors({email:'Network error. Please try again'})
                    }
                    

                }else{
                    return setErrors({email:'Please provide a valid email address'})
                }
            }
        }
    }
    return(
        <Flex justifyContent='center' alignItems='center'  h='100vh'  id='login' py='10px'
        backgroundColor='#e7f0f0'>
            <Box minW='300px' w='40%' height='fit-content' py='50px'
            borderRadius='5px'  backgroundColor='white'>
                <Flex justifyContent='center' alignItems='center'>
                    <Logo colored={true} bg={true}/>
                </Flex>
                <Text textAlign='center' fontSize='12px' m='5px' fontWeight='400' marginBottom='10px' >
                    Already have an account? 
                    <Link href="/app/login" textDecoration='none' color='#F7941D'> Log in</Link>
                </Text>
                <Flex variant='filled'justifyContent='center' alignItems='center' my='5px'>
                    <Input placeholder="Email" variant='filled' w='80%' h='30px' p='5px' id='email'
                    outline='none' border={errors.email?'1px solid #E53E3E':'2px solid #EDEFF2'} 
                    borderRadius='6px' />
                </Flex>
                
                    {errors.email?
                        <Flex justifyContent='center' alignItems='center' h='15px'>
                            <Text w='82%' fontSize='12px' fontWeight={500}color='#E53E3E'>{errors.email}</Text>
                        </Flex>:
                        null}
                    
                
                <Flex variant='filled'justifyContent='center' alignItems='center' my='5px'>
                    <Input placeholder="Password" variant='filled' w='80%' h='30px' p='5px' id='pwd'
                    outline='none' border={errors.pwd?'1px solid #E53E3E':'2px solid #EDEFF2'}  
                    borderRadius='6px'/>
                </Flex>
                {errors.pwd?
                        <Flex justifyContent='center' alignItems='center' h='15px'>
                            <Text w='82%' fontSize='12px' fontWeight={500}color='#E53E3E'>{errors.pwd}</Text>
                        </Flex>:
                        null}


                <Flex variant='filled'justifyContent='center' alignItems='center' my='5px'>
                    <Input placeholder="Confirm password" variant='filled' w='80%' h='30px' p='5px' id='pwd_confirm'
                    outline='none' border={errors.pwd_confirm?'1px solid #E53E3E':'2px solid #EDEFF2'}  
                    borderRadius='6px'/>
                </Flex>
                {errors.pwd_confirm?
                        <Flex justifyContent='center' alignItems='center' h='15px'>
                            <Text w='82%' fontSize='12px' fontWeight={500}color='#E53E3E'>{errors.pwd_confirm}</Text>
                        </Flex>:
                        null}

                <Flex justifyContent='center' alignItems='center' my='10px' >
                    <Button w='83%' h='40px' border='none' p='5px' cursor='pointer'
                    outline='none' borderRadius='5px' color='white' backgroundColor='#0F6972'
                    onClick={handleSubmit}>Register</Button>
                </Flex>
                
                    
            </Box>
        </Flex>
    )
}



export default Register;