import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

function Signup() {
  return (
    <Box border="1px solid #D1D1D1" m="100px auto" minH="550px" maxW="420px" borderRadius="20px" p={12}>
        <Heading textAlign="center" fontSize="2xl" >Create Account</Heading>
        <Stack spacing={4} textAlign="center" mt={12}>
            <FormControl id="name" >
                  <FormLabel>Name</FormLabel>
                  <Input type="name"  name="name"/>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="email" />
                </FormControl>
                {/* Email Input */}
                <FormControl id="email">
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="number" name="phoneNumber" />
                </FormControl>
    
                {/* Password Input */}
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" />
                </FormControl>
    
            
                {/* Login button */}
                <Button
                  bg={"#1E7E1C"} // button background color
                  color={"white"} // text color
                  _hover={{
                    bg: "#176716", // hover color
                  }}
                >
                  Sign up
                </Button>
    
                <Text>Already have a account? <Link color="#1E7E1C">login</Link></Text>
              </Stack>
       </Box>
  )
}

export default Signup
