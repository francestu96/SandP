import { Text, Button, Heading, Stack, Image, Box } from '@chakra-ui/react';
;

const Hero = () => {
    return (
        <Stack minH={'91vh'} direction={{ base: 'column', md: 'row' }} width="100%" overflow="hidden" gap="0" backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="right" >
            <Stack px="40" gap={10} w="40%" justifyContent="center" className="animated-hero-text">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text as={'span'}>
                        Benvenuti in
                    </Text>
                    <br/>
                    <Text backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent" as={'span'} fontFamily="CustomFont" position={'relative'}>
                        S<Text as={'span'} fontFamily="arial">&</Text>P Management
                    </Text>
                </Heading>
                <Text m="2" fontSize={{ base: 'md', lg: 'lg' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem.<br/><br/>
                    Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa dui, porttitor tristique ipsum ac, volutpat viverra quam.<br/><br/>
                     Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ultrices sodales leo at pharetra.
                </Text>
                <Button rounded={'full'} bg={'main'} color={'white'} _hover={{ bg: 'main' }}>
                    Contattaci
                </Button>
            </Stack>
            <Box className="animated-hero-border" width="60%" display="flex" position="relative" justifyContent="end" clipPath="polygon(0 0, 100% 0%, 100% 100%, 0 60%)">
                <Image className="animated-hero-img" w="99.7%" h="99.6%" src="hero-bg.png" alt='background' clipPath="polygon(0 0, 100% 0%, 100% 100%, 0 60%)" />
            </Box>
        </Stack>
    );
};

export default Hero;
