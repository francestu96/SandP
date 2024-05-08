import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Text, Button, Heading, Stack, Image, Box, Link, HStack } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Stack borderBottom="1px" borderBottomColor="chakra-border-color" minH={'91vh'} direction={{ base: 'column', md: 'row' }} width="100%" overflow="hidden" gap={["5", "0"]} backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="right" >
            <Stack px={["10", "15", "20", "40"]} py="10" gap={["5", "10"]} w={["100%", "40%"]} justifyContent="center" className="animated-hero-text">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text as={'span'}>
                        Benvenuti in
                    </Text>
                    <br/>
                    <Text backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent" as={'span'} fontFamily="CustomFont" position={'relative'}>
                        S<Text as={'span'} fontFamily="arial">&</Text>P Management
                    </Text>
                </Heading>
                <Text m="2" fontSize={["md", "lg"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem.<br/><br/>
                    Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa dui, porttitor tristique ipsum ac, volutpat viverra quam.<br/><br/>
                     Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ultrices sodales leo at pharetra.
                </Text>
                <HStack>
                    <Link href="mailto:info@spmanagement.house">
                        <Button leftIcon={<EmailIcon/>} rounded={'full'} bg={'main'} color={'white'} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Scrivici
                        </Button>
                    </Link>
                    <Link href="tel:3480944572">
                        <Button leftIcon={<PhoneIcon/>} rounded={'full'} bg={'gray.700'} color={'white'} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Chiamaci
                        </Button>
                    </Link>
                </HStack>
            </Stack>
            <Box className="animated-hero-border" w={["100%", "60%"]} display="flex" position="relative" justifyContent="end" clipPath="polygon(0 0, 100% 0%, 100% 100%, 0 60%)">
                <Image className="animated-hero-img" w="99.2%" h="98%" objectFit="cover" src="hero-bg.png" alt='background' clipPath={["polygon(0 0, 100% 0, 100% 96%, 0 57.5%)", "polygon(0 0, 100% 0%, 100% 100%, 0 60.5%)"]}/>
            </Box>
        </Stack>
    );
};

export default Hero;
