
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack} from "@chakra-ui/react"
import React,{ useState } from "react"

const Sign = () => {
  const [show, setShow]=useState(false);
  const handleClick=()=>setShow(!show)
    const [name, setName]=useState();
    const [email, setEmail]=useState();
    const [confirmpassword, setConfrimPassword]=useState();
    const [password,setPassword]=useState();
    const [pic,setPic]=useState();
    const postDetails = (pics)=>{

    }
    const submitHandler=()=>{}

  return (
    <VStack spacing='5px'>
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
                <Input
                placeholder='Enter Your Name'
                onChange={(e)=>setName(e.target.value)}
                />
        </FormControl>
       <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
                <Input
                placeholder='Enter Your email'
                onChange={(e)=>setEmail(e.target.value)}
                />
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
                <Input
                type={show ? "text":"password"}
                pr="4.5rem"
                placeholder='Enter Your Password'
                onChange={(e)=>setPassword(e.target.value)}
                />
                <InputRightElement width={"4.5rem"}>
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
  
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
                </InputGroup>
        </FormControl>
       
        <FormControl id="confirmpassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size="md">
                <Input
                type={show ? "text":"password"}
                placeholder='Enter Your Password'
                onChange={(e)=>setConfrimPassword(e.target.value)}
                />
                <InputRightElement width={"4.5rem"}>
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
                </InputGroup>
        </FormControl>

        <FormControl id="pic">
          <FormLabel>
            Upload Your Picture
          </FormLabel>
          <Input 
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e)=> postDetails(e.target.files)}/>
        </FormControl>
<Button
colorScheme="blue"
width={"100%"}
style={{marginTop: 15}}
onClick={submitHandler}
>
Sign Up
</Button>

    </VStack>
  )
}

export default Sign
