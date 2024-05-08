import { Center, VStack, Text, Link, Image, Stack, SimpleGrid, chakra, shouldForwardProp, Box } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion';
import { useRef } from "react";
import CountUp from 'react-countup';

const Numbers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })
    
    return (
        <VStack width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin">
            <Center id="numbers" py="20" width="full">
                <VStack gap="10" fontSize="2xl" width={["90%", "80%", "70%"]}>
                    <Text fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                        I Nostri Numeri
                    </Text>
                    <Stack ref={ref} direction={["column", "row"]} alignItems="center" gap="20" >
                        <SimpleGrid columns={2} textAlign="center">
                            <ChakraBox borderBottom="1px solid #3bb7ff" borderRight="1px solid #3bb7ff" animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.5" }} opacity="0">
                                <VStack pr={["5", "10"]} pb={["5", "10"]}>
                                    <Text color="main" fontSize={["2xl", "4xl"]}><CountUp useEasing={false} end={4} duration={5}/></Text>
                                    <Text color="gray.500" fontWeight="bold" fontSize="lg" fontFamily="CustomFont">Immobili gestiti</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox borderBottom="1px solid #3bb7ff" animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut" }} opacity="0">
                                <VStack pl={["5", "10"]} pb={["5", "10"]}>
                                    <Text color="main" fontSize={["2xl", "4xl"]}><CountUp useEasing={false} end={120} duration={5}/>+</Text>
                                    <Text color="gray.500" fontWeight="bold" fontSize="lg" fontFamily="CustomFont">Inquilini soddisfatti</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.6"}} opacity="0">
                                <VStack borderRight="1px solid #3bb7ff" pr={["5", "10"]} pt={["5", "10"]}>
                                    <Text color="main" fontSize={["2xl", "4xl"]}><CountUp useEasing={false} end={5000} start={4900} duration={5}/>€+</Text>
                                    <Text color="gray.500" fontWeight="bold" fontSize="lg" fontFamily="CustomFont">Guadagni annui dei clienti</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.8" }} opacity="0">
                                <VStack pl={["5", "10"]} pt={["5", "10"]}>
                                    <Text color="main" fontSize={["2xl", "4xl"]}>1</Text>
                                    <Text color="gray.500" fontWeight="bold" fontSize="lg" fontFamily="CustomFont">Anni di business</Text>
                                </VStack>
                            </ChakraBox>
                        </SimpleGrid>
                        <Box overflow={["hidden", "hidden", "hidden", "unset"]}>
                            <ChakraBox animate={isInView ? { translateX: [200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut" }} opacity="0">
                                <Image src={"logo.png"} height={["250px", "400px"]} alt="Logo"/>
                            </ChakraBox>
                        </Box>
                    </Stack>
                </VStack>
            </Center>
        </VStack>
    );
};

export default Numbers;
