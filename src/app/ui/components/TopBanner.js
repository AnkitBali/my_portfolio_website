'use client';

import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import Image from 'next/image';


const TopBanner = () => {

    return (
        <>
            <Flex direction={{base: 'column', sm: 'row', md: 'row'}} align="center" justify="center" spacing={16}>
        <Box
        padding={{base: '0px', sm: '0px', md: '0px', lg: '0px'}}
                
                spacing={16}
                position="relative" 
                // top="50%" 
                left={{base:"35%", sm:"35%", md:"45%", lg:"30%"}} 
                transform="translateX(-50%)"
                    alignContent={{ base: 'center', sm: 'left', md: 'left' }}
                    // textAlign={{ base: 'center', md: 'left' }}
        >

            
               
            <Box
            mt={'150px'}
            width={{base: '300px', sm: '300px', md: '500px'}}
            
            >
                <Flex direction={{base: 'column', md: 'column'}} 
                // align={{base: 'center', md: 'left'}}
                >
                    <Text
                    fontWeight={'bold'}
                    fontSize={{base: '28px', sm: '28px', md: '35px'}} color="#42446E">
                        Hi 👋,  
                        
                    </Text>
                            <Text fontWeight={'bold'}
                                fontSize={{ base: '28px', sm: '28px', md: '35px' }} color="#42446E"
                            > 
                            My name is
                                 </Text>
                        </Flex>
                    <Text
                            fontSize={{ base: '28px', sm: '28px', md: '35px' }}
                            bgGradient="linear(to-r, #E70FAA 0%, #00C0FD 30%)"
                        bgClip="text"
                        fontWeight="bold"
                        ml={{base:'0px', md: '0px'}}

                    >
                        Ankit Bali
                    </Text>
                    <Text
                        fontWeight={'bold'}
                            fontSize={{ base: '28px', sm: '28px', md: '35px' }}
                         color="#42446E">
                        
                        I build things for web <br />
                    </Text>
            </Box>
        </Box>
        <Spacer />
            {/* <Box mt={20} mr={'100px'} 
            // position={'relative'}
            >
                    {/* <div
                        style={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '150px',
                            border: 'solid 10px transparent',
                            borderImage: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            borderImageSlice: 1
                        }}
                        borderRadius={'200px'}
                    > */}
                        {/* <Image
                            width={'300px'}
                            height={'300px'}
                            src='/dp.png'
                            borderRadius={'50%'} // Make the image circular
                            border={'solid 10px transparent'}
                            borderImage="linear-gradient(to right, #E70FAA, #00C0FD)"
                            borderImageSlice={1}
                        /> */}
                    {/* </div> */}
                {/* </Box> */} 
                <Box mt={{base:"30px", sm:'120px', md:'150px'}} mr={{base: '50px', sm:'50px', md: '100px'}}>
                    <Box
                        // id={{base:"", sm:"", md:"xyz"}}
                        id="xyz"
                        
                        // width={{ base: '20px', sm: '250px', md: '300px' }} // Adjust container size
                        // height={{ base: '10px', sm: '200px', md: '300px' }} // Adjust container size
                        borderRadius="full"
                    >
                        
                        <Image
                        
                        id="abc"
                        // id={{base:"", sm:"", md:"xyz"}}
                        borderRadius={'full'}
                            style={{
                                    borderRadius: '100%',
                                    // border: '1px solid #fff',
                                }}
                                // layout="responsive"
                            // width={{ base: '150', sm: '200', md: '250' }} // Adjust image size
                            // height={{ base: '100', sm: '150', md: '200' }}
                            width="200"
                            height="200"
                            src="/dpImg2.jpeg"
                            objectFit="cover" // Ensure the image fills the circular box
                        />
                    </Box>
                </Box>
            </Flex>
            <style global jsx>
                {`
        #abc{
          background: -webkit-linear-gradient(left top, #E70FAA 0%, #00C0FD 100%);
  width: 200px
  height : 200px
  border-radius: 100px;
  padding: 5px;
        }
        #xyz{
            width: 200px
  height : 200px
            background: black;
  
  border-radius: 100px;
        }
        `}
            </style>
        
        </>
    )
}

export default TopBanner;