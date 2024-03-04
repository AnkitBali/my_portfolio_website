'use client';

import { Box, Text, Flex, HStack, Spacer, Link} from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return (
        <>
        <Spacer mt={'100px'}/>
            <Box textAlign="right">
                <HStack
                 spacing={'100px'}
                 justifyContent="flex-end"
                 mr={'200px'}
                 >
                    <Text>
                        +91 8148253461
                    </Text>
                    <Text>
                        ankitbali.webdev@gmail.com
                    </Text>
                    
                </HStack>
                

                <Spacer mt="20px" />

                <hr class="custom-hr" />
                <Spacer mt="10px" mb="20px" />
                <Box textAlign="right"
                mr={'200px'}
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
                <Box textAlign="right"
                    mr={'200px'}
                    mb={'20px'}>
                    <Text>
                        Design inspiration from Figma Design by <a href="https://www.figma.com/@pavanmg007" target="_blank">Pavan MG</a>
                    </Text>
                </Box>


                <style global jsx>
                    {`
        .custom-hr {
          height: 2px; 
          background-color: black; 
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