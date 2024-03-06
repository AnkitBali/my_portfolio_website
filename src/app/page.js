

// Page imports : 
import Navbar from './ui/components/Navbar';
import TopBanner from './ui/components/TopBanner';
import TechStack from './ui/components/TechStack';
import Projects from './ui/components/Projects';
import Footer from './ui/components/Footer';

// Other imports : 

import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';
// import { Element } from 'react-scroll';


// function Header({ title }) {
//   return <h1>{title ? title : 'Default title'}</h1>;
// }

export default function HomePage() {

  return (
    <>
    
      <ChakraProvider>
        <Box position={"relative"}>
      {/* <Navbar /> */}
      <TopBanner />
      {/* <Element name={'abc'}> */}
      <TechStack />
          {/* </Element> */}
          {/* <Element name='projects'> */}
      <Projects />
          {/* </Element> */}
        </Box>

      </ChakraProvider>
    </>
  );
}