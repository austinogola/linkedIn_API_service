import {Link,Text,Image} from "@chakra-ui/react"
import img from '../Images/lg4.png'
const Logo=()=>{
    return(
        <Link display='flex' href="/" textDecoration='none' color='white' alignItems='center'>
                <Image src={img} boxSize='32px'/>
                <p style={{fontFamily:'Allerta Stencil',fontSize:'1.5rem'}}>RevoSight</p>
            </Link>
    )
}

export default Logo;