import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

function Login() {
  return (
   <Box border="1px solid #D1D1D1" m="100px auto" minH="550px" maxW="420px" borderRadius="20px" p={12}>
    <Heading textAlign="center" fontSize="2xl" >Welcome Back</Heading>
    <Stack spacing={4} textAlign="center" mt={12}>
            {/* Email Input */}
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>

            {/* Password Input */}
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>

        
            {/* Login button */}
            <Button
              bg={"#1E7E1C"} // button background color
              color={"white"} // text color
              _hover={{
                bg: "#176716", // hover color
              }}
            >
              Sign in
            </Button>

            <Text>Don’t have a account? <Link color="#1E7E1C">signup</Link></Text>
          </Stack>
   </Box>
  )
}

export default Login
