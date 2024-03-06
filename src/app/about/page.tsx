'use client';

import { Box, Text, Flex, HStack, VStack, Spacer, Link, Heading, UnorderedList, ListItem, Badge } from "@chakra-ui/react";



export default function Page() {
  return (
    <Box position={"relative"} textAlign={"left"} p={"50px"} ml={"50px"}>
      <Spacer mt={"120px"} />
      <VStack spacing={"50px"} alignItems="start">
        <Box width={"800px"}>
          <Heading mb={"20px"} color={"#42446E"} fontSize={"25px"}>
            About Me
          </Heading>
          <Text>
            I'm Ankit Bali, an experienced web developer with over three years
            of proficiency in React.js development. My commitment to excellence
            is evident through my continuous pursuit of expanding technical
            knowledge and skills. I stay updated with the latest trends by
            actively engaging in tech blogs and enrolling in relevant courses.
            Additionally, I possess exceptional English communication and adept
            team management skills. Let's collaborate to create exceptional
            digital solutions.
          </Text>
        </Box>
        <Box width={"800px"}>
          <Heading mb={"20px"} color={"#42446E"} fontSize={"25px"}>
            Work Experience
          </Heading>
          <VStack alignItems="start" spacing="10px">
            <HStack spacing={"200px"}>
              <VStack align={"start"} textAlign={"left"}>
                <Text color={"#42446E"} fontWeight="bold">
                  React Developer{" "}
                </Text>
                <Text fontSize={"sm"}>Isha Foundation, Coimbatore </Text>
              </VStack>
              <Spacer />
              <VStack textAlign={"right"}>
                <Badge
                  borderRadius={"full"}
                  p={2}
                  px={4}
                  ml={20}
                  fontSize={"10px"}
                  colorScheme="green"
                >
                  Full Time
                </Badge>
                <Text fontSize="sm">June 2023 - Feb 2024</Text>
              </VStack>
            </HStack>
            <UnorderedList ml="20px">
              <ListItem>
                Developed and maintained web applications using{" "}
                <Text fontWeight={"bold"} as={"span"}>
                  React.js and Next.js
                </Text>
                .
              </ListItem>
              <ListItem>
                Collaborated with cross-functional teams to deliver high-quality
                projects.
              </ListItem>
              <ListItem>
                Implemented best practices for code optimization and performance
                improvement.
              </ListItem>
            </UnorderedList>

            <HStack mt={"50px"} spacing={"200px"}>
              <VStack align={"start"} textAlign={"left"}>
                <Text width={"150px"} color={"#42446E"} fontWeight="bold">
                  Technical Analyst, UI/UX Developer
                </Text>
                <Text fontSize="sm">Isha Foundation, Coimbatore</Text>
              </VStack>
              <Spacer />
              <VStack textAlign={"right"}>
                <Badge
                  borderRadius={"full"}
                  p={2}
                  px={4}
                  ml={20}
                  fontSize={"10px"}
                  colorScheme="green"
                >
                  Full Time
                </Badge>
                <Text fontSize="sm">July 2022 - June 2023</Text>
              </VStack>
            </HStack>

            <UnorderedList ml="20px">
              <ListItem>
                Collaborated with teams to integrate UI/UX designs effectively
                with backend systems.
              </ListItem>
              <ListItem>
                Researched emerging technologies to enhance application
                performance and user engagement.
              </ListItem>
              <ListItem>
                Provided technical guidance and support for problem-solving
                throughout the development lifecycle.
              </ListItem>
            </UnorderedList>
            <HStack mt={"50px"} spacing={"200px"}>
              <VStack align={"start"} textAlign={"left"}>
                <Text width={"180px"} color={"#42446E"} fontWeight="bold">
                  Back-end Developer
                </Text>
                <Text fontSize="sm">Famstar, Chandigarh</Text>
              </VStack>
              <Spacer />
              <VStack textAlign={"right"}>
                <Badge
                  borderRadius={"full"}
                  p={2}
                  px={4}
                  ml={20}
                  fontSize={"10px"}
                  colorScheme="green"
                >
                  Full Time
                </Badge>
                <Text fontSize="sm">Dec 2022 - June 2022</Text>
              </VStack>
            </HStack>

            <UnorderedList ml="20px">
              <ListItem>
                Implemented backend solutions using {" "}
                <Text as={"span"} fontWeight={"bold"}>
                  node.js, express.js & firebase cloud functions
                </Text>
              </ListItem>
              <ListItem>
                Collaborated with front-end developers to integrate frontend and
                backend components.
              </ListItem>
              <ListItem>
                Ensured scalability and performance optimization of backend
                systems.
              </ListItem>
            </UnorderedList>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
