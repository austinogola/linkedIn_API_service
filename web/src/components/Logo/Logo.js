import {Link,Text,Image,Box} from "@chakra-ui/react"
import img2 from '../Images/icons8-cloud-mail-50 (1).png'

import './Logo.css'

const Logo=({colored,bg})=>{
    console.log(colored);
    return(
        <Link  href="/" textDecoration='none' color='white' h='50px'>
            <Box display='flex' justifyContent='center' alignItems='center' height='fit-content' 
            p='0px' m='0px' position='relative' top='3px'>
                <Image src={img2} boxSize='1.8rem' transform='scale(-1,1)' m='0px' />
            </Box>
            
                {/* <Box src={colored===true?colored_img:img} fontSize:bg===true?'2em':'1.5rem' >
                        <AiOutlineCloudServer size='2rem' color='#FFE239'/>
                </Box> */}
                <Text style={{fontFamily:"Figtree",fontSize:'1.5rem' ,fontWeight:'500',
                color:colored===true?'#0F6972':'white',margin:'0px'}} m='0px'>
                <strong>A</strong>peDa<strong>t</strong>a</Text>
            </Link>
    )
}

export default Logo;