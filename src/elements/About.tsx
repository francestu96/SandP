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
        <VStack id="about" width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin" backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="center" backdropInvert="">
            <Center py="20" width="full">
                <VStack gap="10" width={["90%"]}>
                    <Text fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                        Chi Siamo
                    </Text>
                    <VStack ref={ref} gap="10" overflowX="clip">
                        <Text px={["0", "10", "20"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ultrices elit. Pellentesque feugiat urna nec magna auctor, et dapibus arcu hendrerit.<br/><br/>
                            Mauris sollicitudin elit arcu, et placerat ipsum ultricies nec. Pellentesque mattis urna eu felis sagittis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel purus sed sem tristique faucibus.<br/><br/>
                            Phasellus sit amet sollicitudin quam, id imperdiet felis. Nam quis massa ornare, volutpat augue luctus, viverra dolor. Phasellus eu tempor enim. Ut ac quam ac ante posuere lobortis nec eget nulla. Proin aliquet suscipit finibus. Donec sagittis vulputate mauris a cursus. Etiam eget tristique eros. Ut volutpat enim nec dolor tempor, vel luctus quam dictum. Quisque mollis diam fringilla risus mollis consectetur. Sed vel odio consectetur nulla maximus bibendum.
                        </Text>
                        <ChakraBox animate={isInView ? { opacity: [0, 1], translateX: ["150px", "0px"] } : 'none'} transition={{ duration: "2", ease: "easeInOut"}} opacity="0">
                            <Card  boxShadow={'2xl'} backgroundColor="gray.100" mr={["0", "10vw"]} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' p="5" borderRadius="2xl">
                                <Image objectFit='cover' w={{ base: '100%', sm: '200px' }} src='/francesco.jpg' alt='Francesco' borderRadius="full"/>

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
                                <Image objectFit='cover' display={["flex", "none"]} w="100%" src='/paolo.jpg' alt='Paolo' borderRadius="full"/>
                                
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
                                <Image objectFit='cover' display={["none", "flex"]} w="200px" src='/paolo.jpg' alt='Paolo' borderRadius="full"/>
                            </Card>
                        </ChakraBox>
                    </VStack>
                </VStack>
            </Center>
        </VStack>
    );
};

export default About;
