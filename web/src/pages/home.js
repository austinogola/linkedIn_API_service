import {
    Box,
  } from "@chakra-ui/react"

  import Navbar from "../components/Navbar/Navbar";
  import FirstSection from "../components/Home/FirstSection";
  import SecondSection from "../components/Home/SecondSection";
  import ThirdSection from "../components/Home/ThirdSection";
  import Footer from "../components/Footer/Footer";

const Home=()=>{
    return(
        <Box>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <Footer />
        </Box>
    )
}

export default Home;