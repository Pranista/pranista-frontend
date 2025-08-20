import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Flex,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { IoCheckbox } from "react-icons/io5";


const ourStoryContent = [
  {
    img: "src/assets/img1.png",
    title: "Healing Naturally",
    description:
      "We activate the body’s innate self-healing through herbs and natural formulations.",
    points: {
      1: "Herbs are Powerful. ",
      2: "Bodies have great healing capabilities. ",
      3: "Our formulations focus on  activating bodies self healing capabilities naturally",
    },
  },
  {
    img: "src/assets/img2.png",
    title: "Innovation",
    description:
      "Ayurveda + Innovation – Bridging timeless wisdom with modern personalization and intelligent data. Our mission is to build upon Ayurvedic ancient principals",
    points: {
      1: "Utilizing continuos research to create the best treatments naturally ",
      2: "Personalized Treatment Approach ",
      3: "Identify mass creative Data Acquisition methods & Analytics",
    },
  },
  {
    img: "src/assets/img3.png",
    title: "Scientific Approach",
    description:
      "Science-backed – Blending ancient practices with evidence, diagnostics, and clinical trials.",
    points: {
      1: "Clinical Trials, ",
      2: "Modern Diagnostics ",

    },
  },
  {
    img: "src/assets/img4.png",
    title: "Ingredientz",
    description:
      "Pure & Ethical – Ingredients are ethically sourced, certified, and uncompromised in quality.",
    points: {
      1: "We use only the best.  ",
      2: "Sourced ethically ",
      3: "Lab Tested n Certified",
    },
  },
  {
    img: "src/assets/img5.png",
    title: "Certified Production Facilities",
    description:
      "Global Standards – Produced in world-class facilities with strict safety and compliance.",
    points: {
      1: "Best Manufacturing Practices. ",
      2: "USFDA Facilities ",

    },
  },
  {
    img: "src/assets/img6.png",
    title: "Software & AI",
    description:"Global Standards – Produced in world-class facilities with strict safety and compliance.",
    points: {
      1: "Personal Health Data Management ",
      2: "Doctor/Hospital Data Management ",
      3: "Personalized Treatment Approach",
      4 : "Wearable Development"
    },
  },
];

function OurStory() {
  return (
    <Box mt={12}>
      <Box textAlign="center">
        <Heading>Our Story</Heading>
        <Text>
          Focus on disease not just symptoms. Taking the Ancient Wisdom forward
        </Text>
      </Box>
      <VStack>
        {ourStoryContent.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <Flex 
            mt={12} 
            direction={isEven ? "row" : "row-reverse" } 
             justify="space-between"   
            align="center" 
            gap="250px" 
            px={8}  
            >
              <Box flex="1" maxW='450px'>
                <Image src={item.img} alt={item.title} borderRadius="xl" />
              </Box>
              <Box>
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                {item.title}
              </Text>
              <Text fontSize="md" mb={6} maxW="550px">
                {item.description}
              </Text>
              <VStack align="start" spacing={3}>
                {Object.values(item.points).map((point, idx) => (
                  <HStack key={idx} align="center">
                    <IoCheckbox color="#A96224" size="20px" />
                    <Text>{point}</Text>
                  </HStack>
                ))}
              </VStack>

              </Box>
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
}

export default OurStory;
