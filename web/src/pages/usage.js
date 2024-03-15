import {
    Box,
  } from "@chakra-ui/react"

  import Navbar from "../components/Navbar/Navbar";
  import FirstSection from "../components/Home/FirstSection";
  import SecondSection from "../components/Home/SecondSection";
  import ThirdSection from "../components/Home/ThirdSection";
  import Footer from "../components/Footer/Footer";
  import Index from '../components/app/Index'
  import Playground from '../components/app/Playground'

const Usage=()=>{
    return(
        <Box>
        <Index selected='usage'/>
        </Box>
    )
}

export default Usage;