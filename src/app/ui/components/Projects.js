'use client';

// import React from "react";
// import { Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";
// import Image from 'next/image';



// const Projects = () => {

//     const projects = [
//         {
//             title: "Free Tamil Nadu's Temples Website",
//             description: "This website is created using Next.js and React.js. It includes a variety of components and uses advanced JavaScript techniques to implement the different features you'll find on the site.",
//             image: "/freeTNT.png",
//             liveLink: "https://example.com",
//             githubLink: "https://github.com/example/project1",
//         },
//         {
//             title: "Amita Care Website",
//             description: "This website serves as a platform for mental health therapy, offering a range of services including counseling sessions and additional support. It is built on the WordPress framework and utilizes a variety of third-party plugins to enhance its functionality. These plugins enable features such as appointment scheduling, secure communication channels, and interactive resources to facilitate effective therapy sessions and support for visitors.",
//             image: "/amitacare.png",
//             liveLink: "https://example.com",
//             githubLink: "https://github.com/example/project2",
//         },
//         // Add more projects as needed
//     ];

    
//     return (
//         <>
//         <HStack justify={'center'} direction={"column"} spacing={'10px'}>
//         <Box color={'#42446E'} fontSize={'48px'} position={'relative'} alignItems={'center'} alignContent={'center'} top={'10%'} left={'5%'}>
//             <Heading>Projects</Heading>
            
//         </Box>
//         <Text color={666666} fontSize={'26px'} position={'relative'} top={'10%'} left={'1%'} mt={60} mb={10} 
//         // mr={400}
//         >Things I have built so far</Text>
//         <Flex position={'relative'} top={'0%'} left={'0%'} mt={80} flexWrap="wrap" justifyContent="space-between">

            
//             {projects.map((project, index) => (
//                 <Box
//                     key={index}
//                     bg="white"
//                     p={4}
//                     m={4}
//                     boxShadow="md"
//                     borderRadius="md"
//                     maxW="300px"
//                     w="100%"
//                 >
//                     <Image width={300} height={200} src={project.image} alt={project.title} borderRadius="md" />
//                     <Heading as="h3" size="md" mt={4} mb={2}>
//                         {project.title}
//                     </Heading>
//                     <Text fontSize="sm" color="gray.600" mb={4}>
//                         {project.description}
//                     </Text>
//                     <Flex justify="space-between" alignItems="center">
//                         <Button colorScheme="blue" size="sm">
//                             Live Preview
//                         </Button>
//                         <Button colorScheme="green" size="sm">
//                             GitHub Code
//                         </Button>
//                     </Flex>
//                 </Box>
//             ))}
//         </Flex>
//         </HStack>
//         </>
//     );
// };

// export default Projects;

import React from "react";
import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: "Free TN Temples Website",
            description: "This website is created using Next.js and React.js. It includes a variety of components and uses advanced JavaScript techniques to implement the different features you'll find on the site.",
            image: "/freeTNT.png",
            liveLink: "https://example.com",
            githubLink: "https://github.com/example/project1",
        },
        {
            title: "Amita Care Website",
            description: "This website serves as a platform for mental health therapy, offering a range of services including counseling sessions and additional support. It is built on the WordPress framework and utilizes a variety of third-party plugins to enhance its functionality. These plugins enable features such as appointment scheduling, secure communication channels, and interactive resources to facilitate effective therapy sessions and support for visitors.",
            image: "/amitacare.png",
            liveLink: "https://www.amitacare.com/",
            githubLink: null,
        },
        // Add more projects as needed
    ];

    return (
        <>
            <Box id="projects"></Box>
            <Spacer  mt={{base: '90px', md:'120px'}} />
              <Box
                textAlign={"center"}
                position={'relative'}
                
               
              >  
              
              
                <Heading color={'#42446E'} fontSize={{ base: '35px', md: '35px' }}  >Projects</Heading>
                
                <Text color={'#666666'} fontSize={{ base: '32px', md: '32px' }} mt={'20px'} mb={'20px'}>Things I have built so far</Text>
                
            <Flex mt={0} flexWrap="wrap" justify={'center'} >
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
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between" 
                    >
                        <Box>
                        <Image width={300} height={200} src={project.image} alt={project.title} borderRadius="md" />
                        <Heading as="h3" size="md" mt={4} mb={2}>
                            {project.title}
                        </Heading>
                            <Text fontSize="sm" color="gray.600" mb={4}>
                                {project.description}
                            </Text>
                        </Box>
                        
                        <Flex 
                        justify="space-between"
                         alignItems="center">
                            <Button colorScheme="blue" size="sm">
                                Live Preview
                            </Button>
                            {project.githubLink && <Button colorScheme="green" size="sm">
                                GitHub Code
                            </Button>}
                        </Flex>
                    </Box>
                ))}
            </Flex>
               
            </Box>
        </>
    );
};

export default Projects;
