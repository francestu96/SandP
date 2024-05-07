import { VStack } from '@chakra-ui/react';
import Hero from 'elements/Hero';
import { FC } from 'react';
import HowItWorks from 'elements/HowItWorks';
import Testimonials from 'elements/Testimonials';
import About from 'elements/About';
import Numbers from 'elements/Numbers';
import Faq from 'elements/Faq';

const Home: FC = () => {
  return (
    <VStack gap="0">
      <Hero/>
      <HowItWorks/>
      <About/>
      <Numbers/>
      <Faq/>
      <Testimonials/>
    </VStack>
  );
};

export default Home;
