import { chakra, shouldForwardProp, VStack, Text, Image, Heading, Center, Stack, Button, Link, Flex } from '@chakra-ui/react';
import { motion, isValidMotionProp, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import dynamic from "next/dynamic";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const textAnimation = { translateY: [100, 0], opacity: [0, 1] };
    const logoAnimation = { opacity: [0, 1], filter: ["blur(12px)", "blur(0px)"] };

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    });
    return (
        <Center backgroundImage="/roadmap-bg.png" backgroundPosition="center" backgroundSize="cover" width="full" id="about" p="10">
            <VStack maxW="container.xl">
                <Heading color="white">
                    About <Text as="span" fontFamily="customFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">Trading Angel</Text>
                </Heading>
                <Stack ref={ref} direction={["column", "column", "column", "row"]} px={["0", "3", "7", "10"]} gap={["10", "10", "10", "0"]}>
                    <ChakraBox width={["100%", "100%", "100%", "50%"]} display="flex" justifyContent="center" alignContent="center" flexWrap="wrap" animate={isInView ? logoAnimation : 'none'} transition={{ duration: "2", ease: "easeInOut" }} opacity="0">
                        <Image src={"/tradingAngel.png"} width="60%" alt="TradingAngel"/>
                    </ChakraBox>
                    <VStack fontSize={["md", "lg", "xl"]} backgroundColor="gray.800" p="5" _hover={{ boxShadow: "0px 0px 100px rgba(255,255,255,0.5);", cursor: "pointer"}} my="2" borderWidth="thin" borderColor="gray.700" borderRadius="2xl" width={["100%", "100%", "100%", "50%"]} gap="5" alignItems="start">
                        <ChakraBox animate={isInView ? textAnimation : 'none'} transition={{ duration: "1", ease: "easeInOut" }} opacity="0" p={["0", "3", "7", "10"]}>
                            <Text color="gray.400">In a world where messages can be lost in the chaos, where authenticity is often questioned, <Text as="span" fontWeight="bold" color="white">Certified.</Text> provides a beacon of assurance. Our motto is simple yet powerful:</Text>
                            <Text fontWeight="bold" color="white" mb="4">&quot;Empower Trust, Ensure Certainty&quot;</Text>
                            <Text color="gray.400" mb="4">We bring you a groundbreaking solution - the ability to send messages and certify them with unbreakable security. Certified Blockchain guarantees your messages remain secure, transparent, and immutable. Your words, your data, your trust, all protected by the immutable power of blockchain.</Text>
                            <Text color="white" mb="8">Join us in shaping the future of secure communication and data certification. Together, we&apos;re rewriting the rules of trust.</Text>
                        </ChakraBox>
                    </VStack>
                </Stack>
            </VStack>
        </Center>
    );
};

export default About;