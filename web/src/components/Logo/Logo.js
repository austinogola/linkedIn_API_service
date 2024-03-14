import {Link,Text,Image,Box} from "@chakra-ui/react"
import img from '../Images/lg4.png'
import colored_img from '../Images/lg-colored.png'
const Logo=({colored,bg})=>{
    console.log(colored);
    return(
        <Link display='flex' href="/" textDecoration='none' color='white' alignItems='center' >
            <Image src={colored===true?colored_img:img} boxSize='2rem'/>
                
                <Text style={{fontFamily:'Allerta Stencil',fontSize:bg===true?'2em':'1.5rem',
                color:colored===true?'#0F6972':'white'}}>RevoSight</Text>
            </Link>
    )
}

export default Logo;