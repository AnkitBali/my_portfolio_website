'use client';



// Import Chakra UI components
// import { Box, Flex, Link, Image, useDisclosure, HStack } from "@chakra-ui/react";
// import { ArrowRightIcon } from "@heroicons/react/solid";
// import React from "react";
// import { Link as ScrollLink } from 'react-scroll';

// const navData = [
//     {
//         name: "Home",
//         link: "/"
//     },
//     {
//         name: "Tech Stack",
//         link: "/#techstack"
//     },
//     {
//         name: "Projects",
//         link: "/#projects"
//     },
//     {
//         name: "Contact",
//         link: "/contact"
//     },
//     {
//         name: "About",
//         link: "/about"
//     },
// ]

// export default function Navbar() {

//     const {isOpen, onToggle} = useDisclosure();
//     return (
//         <Box 
//         as="header"
//         bg="white"
//         position="fixed" 
//         //  pos={"sticky"}
//         top={"0%"} 
//         zIndex="100"
//         >
//             <Flex
//                 as="div"
//                 mx="auto"
//                 p="5"
//                 flexWrap="wrap"
//                 flexDirection={{ base: "column", md: "row" }}
//                 alignItems="center"
//             >
//                 <Link 
//                 // href="#about" fontSize={'0px'} color="white" fontWeight="bold" 
//                 // mb={{ base: "4", md: "0" }}
//                 //  mr={{ base: "0", md: "3" }}
//                 href="/"
//                  >
//                     <Image 
//                     display={{'base': 'none', 'md': 'block'}}
//                     width={'200px'}
//                     //  height={'250px'} 
//                      src="./logo.png"
//                       />
                    
//                 </Link>
//                 <Flex

//                     as="nav"
//                     mr="auto"
//                     spacing={10}
//                     align="center"
//                     justify="space-between"
//                     w={{ base: 'auto', md: 'full' }}
//                     ml={{ base: "0", md: "4" }}
//                     // py="1"
//                     pl="250"
//                     // borderLeft="1px"
//                     borderColor="gray.700"
//                     flexWrap="wrap"
//                     alignItems="center"
//                     fontSize="lg"
//                     // justify={{ base: "center", md: "flex-start" }}
//                 >
//                     <Box display={{ base: 'block', md: 'none' }} onClick={onToggle}>
//                         <svg
//                             fill="black"
//                             width="22px"
//                             viewBox="0 0 20 20"
//                             xmlns="http://www.w3.org/2000/svg"
//                             mr="12px"
//                         >
//                             <title display={{ base: 'block', md: 'none' }} fontSize="2002px" color="black">Menu</title>
//                             <path d="M0 0h20v20H0V0z" fill="black" />
//                             <path
//                                 fill="black"
//                                 d="M2.5 5h15M2.5 10h15m-15 5h15"
//                             />
//                         </svg>
//                     </Box>
//                     <HStack
//                         display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
//                         width={{ base: 'full', md: 'auto' }}
//                         // alignItems="center"
//                         // flexGrow={1}
//                         ml={{ base: 'auto', md: '20px' }}
//                         mt={'-70px'}
//                         // justify="space-around"
//                         // space-x={40}
//                         // mr={40}
//                         // wrap="wrap"
//                         fontWeight={'bold'}
//                         spacing={{ base: "auto", md: '20px' }}
//                         >
//                     {navData.map((item) => (
//                         <Link href={item.link} fontWeight={"bold"} color="gray.800" mr="50px" _hover={{ color: "black" }}> {item.name}</Link>
//                     ))}
                    
//                     <Link
//                         // width={'0px'}
//                         width={'-30px'}
//                         href="https://github.com/AnkitBali"
//                         bg="transparent"
//                         target="_blank"
                        
//                         // border="0"
//                         // py="1"
//                         // px="300"
//                         // ml={100}
//                         // borderRadius="md"
//                         color="gray.800"
//                         mt={{ base: "4", md: "0" }}
//                         // _hover={{ bg: "gray.700" }}
//                         mr="50"
//                     // display="inline-flex"
//                     // alignItems="center"
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg"
//                             width="24" height="24"
//                             viewBox="0 0 24 24">
//                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                         </svg>
//                         {/* <ArrowRightIcon  */}
//                         {/* // className="w-4 h-4 ml-1" */}
//                         {/* /> */}
//                     </Link>
//                     <Link mr="50">
//                         <svg xmlns="http://www.w3.org/2000/svg"
//                             width="24" height="24"
//                             viewBox="0 0 24 24">
//                             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                         </svg>
//                     </Link >
//                     <Link mr="50">
//                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
//                             <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z">

//                             </path>
//                         </svg>
//                         </Link>
//                     </HStack>
//                 </Flex>
//                 {/* Mobile Navbar */}
//                 {isOpen && (
//                     <Box
//                         display={{ base: 'flex', md: 'none' }}  // Changed display property to 'flex'
//                         flexDirection="column" 
//                         bg="white"
//                         position={"fixed"}
//                         // top={10}
//                         // left={0}
//                         // right={0}
//                         zIndex="100"
//                         p={4}
//                         boxShadow="md"
//                     >
//                         {navData.map((item) => (
//                             <Link href={item.link} fontWeight={"bold"} color="gray.800" mr="50px" _hover={{ color: "black" }}> {item.name}</Link>
//                         ))}
//                     </Box>
//                 )}
//             </Flex>
            
//         </Box>
//     );
// }

// import { Box, Flex, Link, Image, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
// import { ArrowRightIcon } from "@heroicons/react/solid";
// import React from "react";

// export default function Navbar() {
//     return (
//         <Box
//             as="header"
//             bg="white"
//             position="fixed"
//             //  pos={"sticky"}
//             top={"0%"}
//             zIndex="100"
//         >
//             <Flex
//                 as="div"
//                 mx="auto"
//                 p="5"
//                 flexWrap="wrap"
//                 flexDirection={{ base: "column", md: "row" }}
//                 alignItems="center"
//             >
//                 <Link href="/">
//                     <Image width={'200px'} src="./logo.png" />
//                 </Link>
//                 <Flex
//                     as="nav"
//                     ml={{ base: "0", md: "4" }}
//                     pl={{ base: "0", md: "250" }}
//                     pr={{ base: "0", md: "250" }}
//                     py="1"
//                     flexWrap="wrap"
//                     alignItems="center"
//                     fontSize="lg"
//                     justify={{ base: "center", md: "flex-start" }}
//                 >
//                     <Menu>
//                         <MenuButton
//                             as={Button}
//                             bg="transparent"
//                             border="none"
//                             fontWeight="bold"
//                             color="gray.800"
//                             _hover={{ color: "whiteAlpha.700" }}
//                             mr="50px"
//                             href="/"
//                         >
//                             Home <ArrowRightIcon ml="4" color="gray.800" fontWeight="bold" fontSize={"2px"} />
//                         </MenuButton>
//                         <MenuList>
//                             <MenuItem>
//                                 <Link href="#testimonials" fontWeight="bold" color="gray.800">Tech Stack</Link>
//                             </MenuItem>
//                             <MenuItem>
//                                 <Link href="#testimonials" fontWeight="bold" color="gray.800">Projects</Link>
//                             </MenuItem>
//                         </MenuList>
//                         <Flex
//                                             as="nav"
//                                             mr="auto"
//                                             spacing={10}
//                                             ml={{ base: "0", md: "4" }}
//                                             py="1"
//                                             pl="250"
//                                             // borderLeft="1px"
//                                             borderColor="gray.700"
//                                             flexWrap="wrap"
//                                             alignItems="center"
//                                             fontSize="lg"
//                                             justify={{ base: "center", md: "flex-start" }}
//                                         >

                        
//                             <Link href="/about" fontWeight="bold" color="gray.800">About</Link>

//                             <Link href="#testimonials" fontWeight="bold" color="gray.800">Contact</Link>
//                         </Flex>
//                     </Menu>
//                     <Link mr="50">
//                         <svg xmlns="http://www.w3.org/2000/svg"
//                             width="24" height="24"
//                             viewBox="0 0 24 24">
//                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                         </svg>
//                     </Link>
//                     <Link mr="50">
//                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
//                             <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z">
//                             </path>
//                         </svg>
//                     </Link>
//                 </Flex>
//                 <Box ml={'40px'}></Box>
//             </Flex>
//         </Box>
//     );
// }

import React, { useState } from "react";
import { Box, Image, Link, IconButton, CloseButton, HStack, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      as="header"
      bg="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={3}
      >
        <Box>
          <Link href="/">
            <Image src="/logo.png" width="150px" alt="Logo" />
          </Link>
        </Box>

        {/* Hamburger menu button for mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={toggleMenu}
          />
        </Box>

        {/* Navigation links */}
        <Box
          display={{ base: "none", md: "flex" }}
          flexBasis={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
        >
          <Link 
          fontWeight="bold"
          color="gray.800"
          _hover={{ color: "gray.600" }}
          mx={4} 
          href="/"
          // fontSize={'18px'}
            >Home</Link>
          <Link
            fontWeight="bold"
            color="gray.800"
            _hover={{ color: "gray.600" }}
            mx={3} 
            href="/#techstack"
            // fontSize={'18px'}
             >Tech Stack</Link>
          <Link
            fontWeight="bold"
            color="gray.800"
            _hover={{ color: "gray.600" }}
            mx={4} 
            href="/#projects" 
            // fontSize={'18px'}
            >Projects</Link>
          <Link
            fontWeight="bold"
            color="gray.800"
            _hover={{ color: "gray.600" }}
            mx={4} 
            href="/about"
            // fontSize={'18px'}
             >About</Link>
          <Link
            fontWeight="bold"
            color="gray.800"
            _hover={{ color: "gray.600" }}
            mx={4} 
            href="/contact"
            // fontSize={'18px'}
             >Contact</Link>
          <HStack mr={{ base: '0px', sm: '0px', md: '0px', lg: '50px' }} ml={{ base: '10px', sm: '20px', md: '10px', lg: '50px' }} spacing={{base: '10px', sm: '20px', md:'20px', lg:'50px'}}>


            <Link
              // width={'0px'}
              href="https://github.com/AnkitBali"
              bg="transparent"
              target="_blank"

              // border="0"
              // py="1"
              // px="300"
              // ml={100}
              // borderRadius="md"
              color="gray.800"
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
            {/* <Link
              href="https://twitter.com/AnkitBali14"
              target="_blank"
              
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z">

                </path>
              </svg>
            </Link> */}
            <Link href="https://wakatime.com/@ankitBali" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128 0c70.693 0 128 57.307 128 128s-57.307 128-128 128S0 198.693 0 128S57.307 0 128 0m0 30.118c-54.06 0-97.882 43.822-97.882 97.882S73.94 225.882 128 225.882S225.882 182.06 225.882 128S182.06 30.118 128 30.118m54.372 53.96c5.405 0 9.628 4.66 9.628 10.234c0 2.23-.674 4.367-1.909 6.124l-.105.145l-43.706 62.363l-.084.115c-1.813 2.39-4.551 3.843-7.541 3.843a9.705 9.705 0 0 1-2.022-.227a8.966 8.966 0 0 1-.881-.253a10.536 10.536 0 0 1-.722-.274l-.214-.097l-.364-.179l-.186-.097l-.171-.095l-.09-.053l-.322-.2l-.217-.142a9.351 9.351 0 0 1-.684-.513l-.223-.189a8.73 8.73 0 0 1-.344-.31l-.059-.057a11.14 11.14 0 0 1-.829-.913a10.687 10.687 0 0 1-.865-1.266l-.096-.173l-3.42-5.495l-3.42 5.498l-.054.097c-1.699 2.931-4.677 4.845-8.03 4.935l-.246.003c-3.413 0-6.464-1.893-8.185-4.848l-.116-.204l-28.898-42.1l-.056-.069a10.592 10.592 0 0 1-2.224-6.244l-.004-.302c0-5.573 4.224-10.234 9.628-10.234c3.361 0 6.376 1.837 8.114 4.73l.04.07l21.216 31.35l3.78-6.155l.026-.048c1.632-3.103 4.699-5.147 8.167-5.238l.243-.003c3.34 0 6.35 1.815 8.09 4.682l4.128 6.777l35.158-50.336l.043-.07c1.709-2.739 4.572-4.49 7.773-4.578z" />
              </svg>
            
            </Link>
          </HStack>
          
        </Box>
      </Box>

      {/* Mobile Menu */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        position="absolute"
        right={0}
        bg="white"
        py={4}
        px={4}
        // boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="md" // Add rounded borders
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" // Add box shadow
      >
        {/* <CloseButton onClick={toggleMenu} /> */}
        <Box>
          <NavItem href="/" onClick={toggleMenu}>Home</NavItem>
          <NavItem href="/#techstack" onClick={toggleMenu}>Tech Stack</NavItem>
          <NavItem href="/#projects" onClick={toggleMenu}>Projects</NavItem>
          <NavItem href="/about" onClick={toggleMenu}>About</NavItem>
          <NavItem href="/contact" onClick={toggleMenu}>Contact</NavItem>
          <HStack mt={'20px'} spacing={'25px'}>


            <Link
              // width={'0px'}
              href="https://github.com/AnkitBali"
              bg="transparent"
              target="_blank"

              // border="0"
              // py="1"
              // px="300"
              // ml={100}
              // borderRadius="md"
              color="gray.800"
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
            {/* <Link
              href="https://twitter.com/AnkitBali14"
              target="_blank"

            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z">

                </path>
              </svg>
            </Link> */}
            <Link href="https://wakatime.com/@ankitBali" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128 0c70.693 0 128 57.307 128 128s-57.307 128-128 128S0 198.693 0 128S57.307 0 128 0m0 30.118c-54.06 0-97.882 43.822-97.882 97.882S73.94 225.882 128 225.882S225.882 182.06 225.882 128S182.06 30.118 128 30.118m54.372 53.96c5.405 0 9.628 4.66 9.628 10.234c0 2.23-.674 4.367-1.909 6.124l-.105.145l-43.706 62.363l-.084.115c-1.813 2.39-4.551 3.843-7.541 3.843a9.705 9.705 0 0 1-2.022-.227a8.966 8.966 0 0 1-.881-.253a10.536 10.536 0 0 1-.722-.274l-.214-.097l-.364-.179l-.186-.097l-.171-.095l-.09-.053l-.322-.2l-.217-.142a9.351 9.351 0 0 1-.684-.513l-.223-.189a8.73 8.73 0 0 1-.344-.31l-.059-.057a11.14 11.14 0 0 1-.829-.913a10.687 10.687 0 0 1-.865-1.266l-.096-.173l-3.42-5.495l-3.42 5.498l-.054.097c-1.699 2.931-4.677 4.845-8.03 4.935l-.246.003c-3.413 0-6.464-1.893-8.185-4.848l-.116-.204l-28.898-42.1l-.056-.069a10.592 10.592 0 0 1-2.224-6.244l-.004-.302c0-5.573 4.224-10.234 9.628-10.234c3.361 0 6.376 1.837 8.114 4.73l.04.07l21.216 31.35l3.78-6.155l.026-.048c1.632-3.103 4.699-5.147 8.167-5.238l.243-.003c3.34 0 6.35 1.815 8.09 4.682l4.128 6.777l35.158-50.336l.043-.07c1.709-2.739 4.572-4.49 7.773-4.578z" />
              </svg>

            </Link>
          </HStack>

          
        </Box>
      </Box>
    </Box>
  );
};

const NavItem = ({ href, children, onClick }) => {
  return (
    <Box as="li" my={2} mx={{ base: 0, md: 2 }}>
      <Link
        href={href}
        onClick={onClick}
        fontWeight="bold"
        // fontSize={"16px"}
        color="gray.800"
        _hover={{ color: "gray.600" }}
      >
        {children}
      </Link>
    </Box>
  );
};

export default Navbar;
