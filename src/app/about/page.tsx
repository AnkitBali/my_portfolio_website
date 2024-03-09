'use client';

import { Box, Text, Flex, HStack, VStack, Spacer, Link, Heading, UnorderedList, ListItem, Badge } from "@chakra-ui/react";
import { px } from "framer-motion";



export default function Page() {
  return (
    <Box
      position={"relative"}
      width={{ base: "100%", sm: "100%", md: "80%", lg: "80%", xl: "80%" }}
      textAlign={"left"}
      p={{ base: "20px", sm: "30px", md: "40px", lg: "50px" }}
      ml={{ base: "0px", md: "0px" }}
    >
      <Spacer mt={"120px"} />
      <VStack spacing={"50px"} alignItems="start">
        <Box
        // width={{"800px"}}
        >
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
        <Box
          // width={"800px"}
          width={{ base: "100%", md: "100%" }}
        >
          <Heading mb={"20px"} color={"#42446E"} fontSize={"25px"}>
            Work Experience
          </Heading>
          <VStack alignItems="start" spacing="10px">
            <HStack
              // direction={{ base: "column", md: "row" }}
              width={{ base: "100%", md: "100%" }}
              spacing={{ base: "0px", md: "0px" }}
              justifyContent={{ base: "flex-start", md: "" }}
            >
              <VStack align={"start"} textAlign={"left"}>
                <Text color={"#42446E"} fontWeight="bold">
                  React Developer
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
            <hr className="custom-hr-about" />
            {/* <UnorderedList width={{base:"250px", md:"100%"}} ml={{base:"0px", md:"20px"}}>
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
            </UnorderedList> */}

            <HStack
              // direction={{ base: "column", md: "row" }}
              mt={"50px"}
              width={{ base: "100%", md: "100%" }}
              spacing={{ base: "0px", md: "0px" }}
              justifyContent={{ base: "flex-start", md: "" }}
            >
              <VStack align={"start"} textAlign={"left"}>
                <Text color={"#42446E"} fontWeight="bold">
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
            <hr className="custom-hr-about" />

            {/* <UnorderedList width={{base:"250px", md:"100%"}} ml={{base:"0px", md:"20px"}}>
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
            </UnorderedList> */}
            <HStack
              mt={"50px"}
              width={{ base: "100%", md: "100%" }}
              spacing={{ base: "0px", md: "0px" }}
              justifyContent={{ base: "flex-start", md: "" }}
            >
              <VStack align={"start"} textAlign={"left"}>
                <Text color={"#42446E"} fontWeight="bold">
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
            <hr className="custom-hr-about" />

            {/* <UnorderedList ml="20px">
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
            </UnorderedList> */}
          </VStack>
        </Box>
        <Heading mb={"0px"} color={"#42446E"} fontSize={"25px"}>
          Education
        </Heading>
        <HStack
          // mt={"50px"}
          width={{ base: "100%", md: "100%" }}
          spacing={{ base: "0px", md: "0px" }}
          justifyContent={{ base: "flex-start", md: "" }}
        >
          <VStack align={"start"} textAlign={"left"}>
            <Text  color={"#42446E"} fontWeight="bold">
              Bachelor in Computer Science Engineering
            </Text>
            <Text fontSize="sm">Shri Mata Vaishno Devi University, Jammu</Text>
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
            <Text fontSize="sm">June 2018 - June 2022</Text>
          </VStack>
        </HStack>
        <hr  className="custom-hr-about" />
      </VStack>
      <style global jsx>
        {`
          .custom-hr-about {
            height: 1px;
            background-color: #ebeaed;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>
    </Box>
  );
}
