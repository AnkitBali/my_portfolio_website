'use client';



// Import Chakra UI components
import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <Box 
        as="header"
        bg="white"
        position="fixed" 
        //  pos={"sticky"}
        top={"0%"} 
        zIndex="100"
        >
            <Flex
                as="div"
                mx="auto"
                p="5"
                flexWrap="wrap"
                flexDirection={{ base: "column", md: "row" }}
                alignItems="center"
            >
                <Link 
                // href="#about" fontSize={'0px'} color="white" fontWeight="bold" 
                // mb={{ base: "4", md: "0" }}
                //  mr={{ base: "0", md: "3" }}
                 >
                    <Image 
                    width={'200px'}
                    //  height={'250px'} 
                     src="./logo.png"
                      />
                    
                </Link>
                <Flex
                    as="nav"
                    mr="auto"
                    spacing={10}
                    ml={{ base: "0", md: "4" }}
                    py="1"
                    pl="250"
                    // borderLeft="1px"
                    borderColor="gray.700"
                    flexWrap="wrap"
                    alignItems="center"
                    fontSize="lg"
                    justify={{ base: "center", md: "flex-start" }}
                >
                    <Link href="#projects" fontWeight={"bold"} color="gray.800" mr="50px" _hover={{ color: "whiteAlpha.700" }}>
                        Home
                    </Link>
                    <Link href="#skills" fontWeight={"bold"}   color="gray.800" mr="50px" _hover={{ color: "whiteAlpha.700" }}>
                        About
                    </Link>
                    <Link href="#testimonials" fontWeight={"bold"} color="gray.800" mr="50px" _hover={{ color: "whiteAlpha.700" }}>
                        Tech Stack
                    </Link>
                    <Link href="#testimonials" fontWeight={"bold"} color="gray.800" mr="50px" _hover={{ color: "whiteAlpha.700" }}>
                        Projects
                    </Link>
                    <Link href="#testimonials" fontWeight={"bold"} color="gray.800" mr="50px" _hover={{ color: "whiteAlpha.700" }}>
                        Contact
                    </Link>
                    <Link
                        // width={'0px'}
                        width={'-30px'}
                        href="#contact"
                        bg="transparent"
                        // border="0"
                        // py="1"
                        // px="300"
                        // ml={100}
                        // borderRadius="md"
                        color="gray.800"
                        mt={{ base: "4", md: "0" }}
                        _hover={{ bg: "gray.700" }}
                        mr="50"
                    // display="inline-flex"
                    // alignItems="center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {/* <ArrowRightIcon  */}
                        {/* // className="w-4 h-4 ml-1" */}
                        {/* /> */}
                    </Link>
                    <Link mr="50">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </Link >
                    <Link mr="50">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z">

                            </path>
                        </svg>
                        </Link>
                </Flex>
                <Box ml={'40px'}>
                
                </Box>
            </Flex>
        </Box>
    );
}
