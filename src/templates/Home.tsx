import { VStack } from '@chakra-ui/react';
import Hero from 'elements/Hero';
import { FC } from 'react';
import About from 'elements/About';
import Testimonials from 'elements/Testimonials';

const Home: FC = () => {
  return (
    <VStack gap="0">
      <Hero/>
      {/* <About/> */}
      <Testimonials/>
    </VStack>
  );
};

export default Home;
