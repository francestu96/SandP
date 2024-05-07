import { Center, VStack, Text, Image, Stack, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion';
import { useRef } from "react";

const HowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })
    
    return (
        <VStack id="howitworks" width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin">
            <Center py="20" backgroundImage="/tokenomics-bg.png" backgroundPosition="center" backgroundSize="cover" width="full">
                <VStack gap="10" width={["90%"]}>
                    <Text fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                        Come Funziona
                    </Text>
                    <Stack direction={["column", "row"]} ref={ref}>
                        <ChakraBox animate={isInView ? { opacity: [0, 1] } : 'none'} transition={{ duration: "1", ease: "easeInOut"}} opacity="0">
                            <VStack p="10" borderColor="gray.700" borderRadius="2xl">
                                <Image src="handshake.png" alt="img"/>
                                <Text fontWeight="500" fontSize="2xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                                    Affidati a noi
                                </Text>
                                <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem. Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa dui, porttitor tristique ipsum ac, volutpat viverra quam.</Text>
                            </VStack>
                        </ChakraBox>
                        <ChakraBox animate={isInView ? { opacity: [0, 1] } : 'none'} transition={{ duration: "1", ease: "easeInOut", delay: "0.5"}} opacity="0">
                            <VStack p="10" borderColor="gray.700" borderRadius="2xl">
                                <Image src="house.png" alt="img"/>
                                <Text fontWeight="500" fontSize="2xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                                    Sfrutta i tuoi immobili
                                </Text>
                                <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem. Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </VStack>
                        </ChakraBox>
                        <ChakraBox animate={isInView ? { opacity: [0, 1] } : 'none'} transition={{ duration: "1", ease: "easeInOut", delay: "1"}} opacity="0">
                            <VStack p="10" borderColor="gray.700" borderRadius="2xl">
                                <Image src="noworry.png" alt="img"/>
                                <Text fontWeight="500" fontSize="2xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                                    Nessun impegno da parte tua
                                </Text>
                                <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio efficitur, finibus quam ac, vestibulum sem. Sed volutpat dictum elit, id gravida nunc aliquam non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum!</Text>
                            </VStack>
                        </ChakraBox>
                    </Stack>
                </VStack>
            </Center>
        </VStack>
    );
};

export default HowItWorks;
