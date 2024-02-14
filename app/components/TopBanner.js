'use client';

import React from "react";
import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";


const TopBanner = () => {

    return (
        <>
            <Flex align="center" justify="center" spacing={16}>
        <Box
                
                spacing={16}
                position="absolute" 
                top="50%" left="20%" transform="translateX(-50%)"
        >

            
               
            <Box
            
            >
                    <Text
                    fontWeight={'bold'}
                    fontSize={'35px'} color="#42446E">
                        Hi 👋, <br />
                        My name is <br />
                    </Text>
                    <Text
                        fontSize={'35px'}
                        bgGradient="linear(to-r, #E70FAA 10%, #E70FAA 0%, #00C0FD 50%, #00C0FD 100%)"
                        bgClip="text"
                        fontWeight="bold"
                    >
                        Ankit Bali
                    </Text>
                    <Text
                        fontWeight={'bold'}
                        fontSize={'35px'}
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
                <Box mt={40} mr={'100px'}>
                    <Box
                        id="xyz"
                    >
                        <Image
                        id="abc"
                        borderRadius={'full'}
                            width="100%"
                            height="100%"
                            src="/dp.png"
                            objectFit="cover" // Ensure the image fills the circular box
                        />
                    </Box>
                </Box>
            </Flex>
            <style global jsx>
                {`
        #abc{
          background: -webkit-linear-gradient(left top, #E70FAA 0%, #00C0FD 100%);
  width: 300px;
  height: 300px;
  border-radius: 1000px;
  padding: 10px;
        }
        #xyz{
            background: black;
  width: 300px;
  height: 300px;
  border-radius: 1000px;

        }
        `}
            </style>
        
        </>
    )
}

export default TopBanner;