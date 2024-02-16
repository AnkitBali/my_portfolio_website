'use client';

import React from "react";
import { Box, Button, Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";



const Projects = () => {

    const projects = [
        {
            title: "Free Tamil Nadu's Temples Website",
            description: "This website is created using Next.js and React.js. It includes a variety of components and uses advanced JavaScript techniques to implement the different features you'll find on the site.",
            image: "/freeTNT.png",
            liveLink: "https://example.com",
            githubLink: "https://github.com/example/project1",
        },
        {
            title: "Amita Care Website",
            description: "This website serves as a platform for mental health therapy, offering a range of services including counseling sessions and additional support. It is built on the WordPress framework and utilizes a variety of third-party plugins to enhance its functionality. These plugins enable features such as appointment scheduling, secure communication channels, and interactive resources to facilitate effective therapy sessions and support for visitors.",
            image: "/amitacare.png",
            liveLink: "https://example.com",
            githubLink: "https://github.com/example/project2",
        },
        // Add more projects as needed
    ];

    
    return (
        <>
        <HStack direction={"column"} spacing={'100px'}>
        <Box position={'absolute'} alignItems={'center'} alignContent={'center'} top={'330%'} left={'45%'}>
            <Heading>Projects</Heading>
            
        </Box>
        <Text position={'absolute'} top={'340%'} left={'44%'} mt={8} mb={10} mr={400}>Things I have built so far</Text>
        <Flex position={'absolute'} top={'350%'} left={'30%'} mt={8} flexWrap="wrap" justifyContent="space-between">

            
            {projects.map((project, index) => (
                <Box
                    key={index}
                    bg="white"
                    p={4}
                    m={4}
                    boxShadow="md"
                    borderRadius="md"
                    maxW="300px"
                    w="100%"
                >
                    <Image src={project.image} alt={project.title} borderRadius="md" />
                    <Heading as="h3" size="md" mt={4} mb={2}>
                        {project.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600" mb={4}>
                        {project.description}
                    </Text>
                    <Flex justify="space-between" alignItems="center">
                        <Button colorScheme="blue" size="sm">
                            Live Preview
                        </Button>
                        <Button colorScheme="green" size="sm">
                            GitHub Code
                        </Button>
                    </Flex>
                </Box>
            ))}
        </Flex>
        </HStack>
        </>
    );
};

export default Projects;
