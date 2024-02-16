

// Page imports : 
import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import TechStack from './components/TechStack';
import Projects from './components/Projects';

// Other imports : 

import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Box } from '@chakra-ui/react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

  return (
    <>
    
      <ChakraProvider>
      <Navbar />
      <TopBanner />
      <TechStack />
      <Projects />

      </ChakraProvider>
    </>
  );
}