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
  import { useState,useEffect } from "react";

const Index=()=>{
    useEffect(()=>{
        const cookies = document.cookie.split(';');
        let webToken
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Check if the cookie starts with the specified name
            if (cookie.startsWith('webToken=')) {
                webToken=cookie.substring('webToken='.length)
            }
        }
        if(!webToken){
            window.location.href = '/app/login';
        }
        
    })

    return(
        <div>
            App
        </div>
    )
}



export default Index;