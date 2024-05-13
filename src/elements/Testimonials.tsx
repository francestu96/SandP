
import { ReactNode } from 'react';
import { Box, Flex, Heading, Text, Stack, Container, Avatar } from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack bg="gray.100" boxShadow={'lg'} p={8} rounded={'xl'} align={'center'} pos={'relative'} _after={{ content: `""`, w: 0, h: 0, borderLeft: 'solid transparent', borderLeftWidth: 16, borderRight: 'solid transparent', borderRightWidth: 16, borderTop: 'solid', borderTopWidth: 16, pos: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)' }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={'center'} color="gray.600" fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }: { src: string; name: string; title: string}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color="gray.600">
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align="center" textAlign="center">
            <Text fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                Cosa dicono di Noi
            </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Lorem ipsum</TestimonialHeading>
              <TestimonialText>
                Aliquam id odio efficitur, finibus quam ac, vestibulum sem. Sed volutpat dictum elit, id gravida nunc aliquam non.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/alessio_rossi.jpg"}
              name={'Alessio Rossi'}
              title={'Genova, Sturla'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Dolor sit amet</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa dui, porttitor tristique ipsum ac, volutpat viverra quam.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/giorgia_levi.jpg"}
              name={'Giorgia Levi'}
              title={'Genova, Centro storico'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Consectetur adipiscing</TestimonialHeading>
              <TestimonialText>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ultrices sodales leo at pharetra.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"/luca_grasso.jpg"}
              name={'Luca Grasso'}
              title={'Genova, Castelletto'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
