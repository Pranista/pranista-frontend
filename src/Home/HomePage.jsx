import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  Stack,
  Link,
  Image,
  HStack,
  styled,
} from "@chakra-ui/react";
import OurStory from "./OurStory";
import Footer from "../Components/Footer";
import { FaPhone, FaUser, FaShoppingCart } from "react-icons/fa";

function HomePage() {
  return (
    <Box>
      <Box textAlign="center" m={3}>
        <Text fontWeight="900">Flat 30% off on First Appointment</Text>
      </Box>
      <Flex bgColor="#263D21" minHeight={530} justifyContent="space-between">
        <Stack spacing={6} justify="center" pl="50px" minHeight="479px">
          <Heading color="white">Heal Yourself Naturally</Heading>
          <Flex gap={3}>
            <Button bg="#1E7E1C" color="white">
              Buy Now
            </Button>
            <Button bg="none" border="1px solid #B87F61" color="#B87F61">
              Products
            </Button>
          </Flex>
        </Stack>
        <Box color="white" pr={10} mt={3} position="relative">
          <HStack color="white" justify="flex-end" spacing={6}>
            <FaPhone />
            <Text>1233456789</Text>
            <Button variant="ghost" color="white" leftIcon={<FaUser />}>
              My Account
            </Button>
            <Button variant="ghost" color="white" leftIcon={<FaShoppingCart />}>
              Cart
            </Button>
          </HStack>
          <HStack spacing={12} mt={3}>
            <Link>Home</Link>
            <Link>Products</Link>
            <Link>Gallery</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Blog</Link>
            <Button bgColor="#1E7E1C" color="white">
              Shop Now
            </Button>
          </HStack>

          <Image
            position="absolute"
            src="https://res.cloudinary.com/dlsv90kui/image/upload/v1755712252/headImg_kuv2uw.png"
            right={3}
            bottom={0}
          ></Image>
        </Box>
      </Flex>
      <Flex
        mt={12}
        pl="50px"
        justify="space-between"
        align="center"
      >
        <Box>
          <Text fontSize="4xl" maxW="460px">
            Our focus is Disease not just symptoms
          </Text>
          <Text fontWeight="300">
            Herbs are Powerful. Bodies have great healing capabilities. We
          </Text>
          <Button mt={10} bgColor="#1E7E1C" color="white" maxWidth="300px">
            
            Appointment
          </Button>
        </Box>
        <Box>
          <Image src="src/assets/leaf.png"></Image>
        </Box>
      </Flex>

      <OurStory />
      <Footer />
    </Box>
  );
}

export default HomePage;
