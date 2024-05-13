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
                            S&amp;P Management rappresenta l'eccellenza nel settore del property management a Genova. 
                            Con una consolidata esperienza nel campo, ci impegniamo a offrire soluzioni su misura per soddisfare le esigenze dei nostri clienti.<br/><br/>
                            Il nostro team è composto da professionisti esperti e dedicati, appassionati nel garantire tranquillità, trasparenza e il massimo rendimento per i nostri clienti. 
                            Ci occupiamo integralmente di ogni aspetto della gestione immobiliare dal marketing strategico, alla gestione degli affitti, la pulizia e sanificazione e l'accoglienza degli ospiti. 
                            Ci impegniamo a mantenere gli standard più elevati di trasparenza, affidabilità e servizio clienti.<br/><br/>
                            Affidati a noi per la gestione delle tue proprietà e scopri il vantaggio di avere un partner fidato a Genova. Contattaci oggi stesso per una consulenza personalizzata.
                        </Text>
                        <ChakraBox animate={isInView ? { opacity: [0, 1], translateX: ["150px", "0px"] } : 'none'} transition={{ duration: "2", ease: "easeInOut"}} opacity="0">
                            <Card  boxShadow={'2xl'} backgroundColor="gray.100" mr={["0", "10vw"]} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' p="5" borderRadius="2xl">
                                <Image objectFit='cover' w={{ base: '100%', sm: '200px' }} src='/francesco.jpg' alt='Francesco' borderRadius="full"/>

                                <Stack>
                                    <CardBody>
                                        <Heading size='md' color="main">Francesco</Heading>

                                        <Text py='2'>
                                            Con una laurea magistrale in cyber security, ho esperienza nell'infrastruttura<br/>informatica del business di property management.<br/>
                                            Gestisco l'integrazione con piattaforme di prenotazione e l'ottimizzazione per i motori di ricerca, utilizzando<br/>le API di Airbnb e Booking per automatizzare la pubblicazione e la gestione degli annunci.<br/><br/>
                                            Grazie alle competenze SEO, miglioriamo la visibilità degli annunci e analizzo i dati per strategie di pricing.<br/>
                                            Integro sistemi di gestione delle prenotazioni per una gestione efficiente e garantisco la sicurezza dei dati e <br/>delle transazioni finanziarie.
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
                                
                                <Stack align={["start", "end"]}>
                                    <CardBody>
                                        <Heading size='md' color="main" textAlign={["start", "end"]}>Paolo</Heading>

                                        <Text py='2'>
                                            Con una laurea magistrale in Sociologia e Ricerca Sociale, ho acquisito una<br/>profonda comprensione del territorio, del mercato immobiliare e delle tendenze sociali.<br/>
                                            Questo mi consente di identificare le esigenze degli ospiti e adattare gli annunci di conseguenza.<br/><br/>
                                            Utilizzo le mie capacità di ricerca e analisi per valutare il mercato locale,<br/> comprendere i comportamenti degli ospiti e identificare strategie di pricing e marketing efficaci.<br/>
                                            Conosco le politiche e le normative locali e nazionali per garantire la <br/>conformità legale degli annunci e delle operazioni di property management.
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
