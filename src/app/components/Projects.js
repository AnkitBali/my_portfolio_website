'use client';

import React from "react";
import { Box, Button, Flex, HStack, Heading, Image, Text } from "@chakra-ui/react";



const Projects = () => {

    const projects = [
        {
            title: "Free Tamil Nadu's Temples Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/project1.jpg",
            liveLink: "https://example.com",
            githubLink: "https://github.com/example/project1",
        },
        {
            title: "Project 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/project2.jpg",
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
