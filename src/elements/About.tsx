import { PhoneIcon } from "@chakra-ui/icons";
import { Center, VStack, Text, Image, Stack, chakra, shouldForwardProp, Button, Card, CardBody, CardFooter, Heading, Link } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion';
import { useRef } from "react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })

    return (
        <VStack id="about" width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin" backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="center">
            <Center id="trade" py="20" backgroundImage="/tokenomics-bg.png" backgroundPosition="center" backgroundSize="cover" width="full">
                <VStack gap="10" width={["90%"]}>
                    <Text fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                        Chi Siamo
                    </Text>
                    <VStack ref={ref} gap="10" overflowX="clip">
                        <ChakraBox animate={isInView ? { opacity: [0, 1], translateX: ["150px", "0px"] } : 'none'} transition={{ duration: "2", ease: "easeInOut"}} opacity="0">
                            <Card  boxShadow={'2xl'} backgroundColor="gray.100" mr={["0", "10vw"]} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' p="5" borderRadius="2xl">
                                <Image objectFit='cover' w={{ base: '100%', sm: '200px' }} src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e' alt='Francesco' borderRadius="full"/>

                                <Stack>
                                    <CardBody>
                                        <Heading size='md' color="main">Francesco</Heading>

                                        <Text py='2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem.<br/>
                                            Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem.<br/>
                                            Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Text>
                                    </CardBody>

                                    <CardFooter>
                                        <Link href="tel:3890298501">
                                            <Button leftIcon={<PhoneIcon/>} rounded={'full'} bg={'main'} color={'white'}  _hover={{ bg: "gray.200", color: "gray.700" }}>
                                                Chiama
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        </ChakraBox>
                        <ChakraBox animate={isInView ? { opacity: [0, 1], translateX: ["-150px", "0px"] } : 'none'} transition={{ duration: "2", ease: "easeInOut", delay: "1"}} opacity="0">
                            <Card boxShadow={'2xl'} backgroundColor="gray.100" ml={["0", "10vw"]} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' p="5" borderRadius="2xl">
                                <Image objectFit='cover' display={["flex", "none"]} w="100%" src='https://images.unsplash.com/photo-1534308143481-c55f00be8bd7' alt='Francesco' borderRadius="full"/>
                                
                                <Stack align={["start", "end"]} textAlign={["start", "end"]}>
                                    <CardBody>
                                        <Heading size='md' color="main">Paolo</Heading>

                                        <Text py='2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem.<br/>
                                            Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/><br/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem.<br/>
                                            Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Text>
                                    </CardBody>

                                    <CardFooter>
                                        <Link href="tel:3480944572">
                                            <Button leftIcon={<PhoneIcon/>} rounded={'full'} bg={'main'} color={'white'}  _hover={{ bg: "gray.200", color: "gray.700" }}>
                                                Chiama
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Stack>
                                <Image objectFit='cover' display={["none", "flex"]} w="200px" src='https://images.unsplash.com/photo-1534308143481-c55f00be8bd7' alt='Francesco' borderRadius="full"/>
                            </Card>
                        </ChakraBox>
                    </VStack>
                </VStack>
            </Center>
        </VStack>
    );
};

export default About;
