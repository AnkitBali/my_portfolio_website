'use client';

import { Box, Text, Flex, HStack, Spacer, Link, Heading} from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return (
        <>
        <Spacer mt={'100px'}/>
            <Box textAlign="right">
                <Flex direction={{base: "column", sm:"row", md: "row"}}
                //  spacing={{base: "2px", md:'100px'}}
                 justifyContent={{base: "center", md:"flex-end"}}
                 mr={{base:"0px", md:'200px'}}
                 textAlign={{base: "center", md: "left"}}
                 >
                    <Heading color={'#42446E'} fontSize={{base: "15px", md: "15px"}}>
                        +91 8148253461
                    </Heading>
                    <Heading ml="20px" color={'#42446E'} fontSize={{ base: "15px", md: "15px" }}>
                        ankitbali.webdev@gmail.com
                    </Heading>
                    
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
                    mb={'50px'}>
                    
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