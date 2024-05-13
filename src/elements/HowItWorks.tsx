import { Center, VStack, Text, Image, Stack, chakra, shouldForwardProp, Card } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion';
import { useRef } from "react";

const HowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })
    
    return (
        <VStack id="howitworks" width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin">
            <Center py="20" backgroundImage="/tokenomics-bg.png" backgroundPosition="center" backgroundSize="cover" width="full">
                <VStack gap="10" width={["90%"]}>
                    <Text textAlign="center" fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                        Come Funziona
                    </Text>
                    <Card boxShadow={'2xl'} backgroundColor="gray.100" variant='outline' gap="3" p="5" borderRadius="2xl" textAlign="center" width={["100%", "50%"]}>
                        <Text fontFamily="CustomFont">Un<Text fontFamily="cursive" fontWeight="bold" as="span">'</Text>immagine che vale pi<Text fontWeight="bold" fontFamily="cursive" as="span">ù</Text> di mille parole</Text>
                        <Image src="/benefit.png" mx={["0", "20"]}/>
                    </Card>
                    <Stack direction={["column", "row"]} ref={ref} textAlign="center">
                        <ChakraBox flex="1" animate={isInView ? { opacity: [0, 1] } : 'none'} transition={{ duration: "1", ease: "easeInOut"}} opacity="0">
                            <VStack p="5" borderColor="gray.700" borderRadius="2xl">
                                <Image src="handshake.png" width={["30%", "50%", "30%", "35%", "40%"]} alt="img"/>
                                <Text fontWeight="500" fontSize="2xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                                    Affidati a noi
                                </Text>
                                <Text>Affidati a noi e lascia che il nostro team di esperti si prenda cura delle tue proprietà con totale trasparenza e impegno. Con S&amp;P Management, la gestione immobiliare diventa semplice e sicura.</Text>
                            </VStack>
                        </ChakraBox>
                        <ChakraBox flex="1" animate={isInView ? { opacity: [0, 1] } : 'none'} transition={{ duration: "1", ease: "easeInOut", delay: "0.5"}} opacity="0">
                            <VStack p="5" borderColor="gray.700" borderRadius="2xl">
                                <Image src="house.png" width={["30%", "50%", "30%", "35%", "40%"]} alt="img"/>
                                <Text fontWeight="500" fontSize="2xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                                    Sfrutta i tuoi immobili
                                </Text>
                                <Text>Sfrutta al meglio il potenziale del tuo immobile, guadagna senza stress e preoccupazioni, eliminando il rischio di morosità e danni. I tuoi immobili saranno puliti e curati grazie dalle migliori imprese di pulizia che collaborano con noi.</Text>
                            </VStack>
                        </ChakraBox>
                        <ChakraBox flex="1" animate={isInView ? { opacity: [0, 1] } : 'none'} transition={{ duration: "1", ease: "easeInOut", delay: "1"}} opacity="0">
                            <VStack p="5" borderColor="gray.700" borderRadius="2xl">
                                <Image src="noworry.png" width={["30%", "50%", "30%", "35%", "40%"]} alt="img"/>
                                <Text fontWeight="500" fontSize="2xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                                    Nessun impegno da parte tua
                                </Text>
                                <Text>Ci prendiamo cura di ogni aspetto dal marketing alla pulizia, manutenzione e accoglienza degli ospiti. Non occorre nessun investimenti iniziali per avviare la gestione, valuteremo gratuitamente il tuo immobile per fornirti una stima dei potenziali guadagni.</Text>
                            </VStack>
                        </ChakraBox>
                    </Stack>
                </VStack>
            </Center>
        </VStack>
    );
};

export default HowItWorks;
