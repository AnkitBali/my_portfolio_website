'use client';

import { Box, Text, Flex, HStack, Spacer, Link, Heading} from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return (
        <>
        <Spacer mt={'100px'}/>
            <Box textAlign="right">
                <Flex 
                direction={{base: "row", sm:"row", md: "row"}}
                //  spacing={{base: "2px", md:'100px'}}
                 justifyContent={{base: "center", md:"flex-end"}}
                 mr={{base:"0px", md:'200px'}}
                 textAlign={{base: "center", md: "left"}}
                 alignItems={{base: "center", md: "left"}}
                 >
                    <Flex textAlign={{base: "left", md: "center"}} flexDirection={{base: "column", md: "row"}}>
                    <Heading display={{base: "block", md: "block"}} color={'#42446E'} fontSize={{base: "15px", md: "15px"}}>
                            <a target="_blank" href="tel:+918148253461"> +91 8148253461 </a>
                    </Heading>
                    <Heading display={{ base: "block", md: "block" }} ml={{base: "0px", md:"20px"}} color={'#42446E'} fontSize={{ base: "15px", md: "15px" }}>
                            <a target="_blank" href="mailto:ankitbali.webdev@gmail.com"> ankitbali.webdev@gmail.com </a>
                    </Heading>
                    </Flex>
                    <Box display={{ base: "block", md: "none" }}>
                    <HStack 
                    spacing={"20px"} 
                    mx={"10px"}
                    
                    >


                        <Link
                            // width={'0px'}
                            // width={'-30px'}
                            href="https://github.com/AnkitBali"
                            bg="transparent"
                            target="_blank"

                            // border="0"
                            // py="1"
                            // px="300"
                            // ml={100}
                            // borderRadius="md"
                            color="gray.800"
                            // mt={{ base: "4", md: "0" }}
                            // _hover={{ bg: "gray.700" }}
                            
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
                        <Link
                            href="https://www.linkedin.com/in/ankit-bali-2415431ba/"
                            target="_blank"
                            
                            >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link >
                        <Link
                            href="https://twitter.com/AnkitBali14"
                            target="_blank"
                            
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z">

                                </path>
                            </svg>
                        </Link>
                    </HStack>
                    </Box>
                    
                    
                </Flex>
                

                <Spacer mt="10px" />

                <hr class="custom-hr" />
                <Spacer mt={{base:"0px", md:"10px"}} mb="20px" />
                <Box 
                textAlign={{base: "center", md: "right"}}
                mr={{base:"0px", md:'200px'}}
                px={{base: "30px", md: "0px"}}
                mb={'10px'}>
                <Text>
                        Designed and built by {' '}
                        <Text
                            as="span"
                            // fontSize="35px"
                            bgGradient="linear(to-r, #E70FAA 0%, #E70FAA 10%, #00C0FD 100%, #00C0FD 100%)"
                            bgClip="text"
                            fontWeight="bold"
                        > 
                         Ankit Bali 
                        </Text>
                        {' '} with {' '}
                         {/* <Text
                            as="span"
                            // fontSize="35px"
                            bgGradient="linear(to-r, #E70FAA 110%, #E70FAA 30%, #00C0FD 70%, #00C0FD 100%)"
                            bgClip="text"
                            fontWeight="bold"
                            > Love, 
                        </Text> */}
                        <Text
                            as="span"
                            // fontSize="35px"
                            bgGradient="linear(to-r, #E70FAA 10%, #E70FAA 20%, #00C0FD 60%, #00C0FD 40%)"
                            bgClip="text"
                            fontWeight="bold"
                        ><a href="https://chakra-ui.com/" target="_blank">Chakra UI {' '}</a>
                        </Text>
                        & {' '}
                        <Text
                            as="span"
                            // fontSize="35px"
                            bgGradient="linear(to-r, #E70FAA 10%, #E70FAA 20%, #00C0FD 60%, #00C0FD 40%)"
                            bgClip="text"
                            fontWeight="bold"
                        ><a href="https://nextjs.org/" target="_blank">Next.js</a> 
                        </Text>
                        {/* <Text
                            as="span"
                            // fontSize="35px"
                            bgGradient="linear(to-r, #E70FAA 10%, #E70FAA 20%, #00C0FD 60%, #00C0FD 40%)"
                            bgClip="text"
                            fontWeight="bold"
                        > & Coffee
                        </Text> */}
                </Text>
                </Box>
                <Box 
                    textAlign={{ base: "center", md: "right" }}
                    mr={{ base: "0px", md: '200px' }}
                    px={{ base: "20px", md: "0px" }}
                    mb={{base:"30px", md:'50px'}}
                    >
                    
                    <Text>
                        Design inspiration from Figma Design by <Text
                            as="span"
                            // fontSize="35px"
                            bgGradient="linear(to-r, #E70FAA 10%, #E70FAA 20%, #00C0FD 60%, #00C0FD 40%)"
                            bgClip="text"
                            fontWeight="bold"
                        > <a href="https://www.figma.com/@pavanmg007" target="_blank">Pavan MG</a> </Text>
                    </Text>
                </Box>
                <Text 
                mb={{base:"5px", md:"10px"}}
                 color={"gray.500"} align="center"><p> Copyright &copy; Ankit Bali | All Rights Reserved | {new Date().getFullYear()}</p> </Text>
                


                <style global jsx>
                    {`
        .custom-hr {
          height: 2px; 
          background-color: #ebeaed; 
          width: 80%; 
          margin-left: auto; 
          margin-right: auto;
        }
        `}
                </style>

            </Box>
            
            
        </>
    );
}