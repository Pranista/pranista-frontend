import { Flex, Heading, Text, Box, Stack, Link, SimpleGrid} from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={36} minH="500px" bgColor="#263D21" color="white" p={12} justifyContent="center">
  <Box>
    <Heading mb={4}>PRANISTA</Heading>
    <Text>
      The innovation of this marvel cream, dates back to 1948. In Veyangoda, a city in the Gampaha District,
      was an Ayurvedic shop that was owned by a renowned Ayurvedic Physician, by the name of Dr. R. D. P Jayaratne,
      he inherited this Ayurvedic shop from his forefathers.
    </Text>
  </Box>

  <Box>
    <Heading mb={4}>Quick Links</Heading>
    <Stack spacing={2}>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Products</Link>
      <Link>Contact</Link>
      <Link>Blog</Link>
    </Stack>
  </Box>

  <Box >
    <Heading mb={4}>Contact</Heading>
    <Stack spacing={2} >
      <Text>+92 321 1234567</Text>
      <Text>hello@mail.com</Text>
    </Stack>
  </Box>
</SimpleGrid>

  )
}

export default Footer
