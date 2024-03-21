import {
    Box,
  
    Text,
    
    Link,
    
  } from "@chakra-ui/react"
  import './app.css'
  
  

  const Keys=()=>{
    const emptyKeys=[]
    return new Promise((resolve, reject) => {
        <Box>
            <Text fontSize='14px'>Your secret API keys are listed below</Text>
                <Text fontSize='14px'>Do not share your API key with others, or expose it in the browser or 
                other client-side code</Text>
                <Text fontSize='14px'>You can see usage per API key on the 
                <Link href='/app/usage' textDecoration='none'> usage page.</Link></Text>
                <table border='1px solid blue' w='50%'>
                    <thead >
                        <tr >
                            <th>Name</th>
                            <th>Secret Key</th>
                            <th>Created</th>
                            <th>Last Used</th>
                        </tr>
                    </thead>
                    <tbody>
                    {emptyKeys.map(apiKey => (
                        <tr key={apiKey.key}>
                            <td>{apiKey.name}</td>
                            <td>{apiKey.key}</td>
                            <td>{apiKey.created}</td>
                            <td>{apiKey.lastUsed}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </Box>
    })
}


export default Keys;