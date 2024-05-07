import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Link, VStack } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const Faq = () => {
    return (
        <VStack id="faq" backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="center" width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin">
            <Center py="20" backgroundImage="/tokenomics-bg.png" backgroundPosition="center" backgroundSize="cover" width="full">
                <VStack gap="10" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} width={["90%", "80%", "70%"]}>
                    <Text fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
                        Domande Frequenti
                    </Text>
                    <Accordion width="full" allowToggle>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                                    Proin non interdum eros nunc efficitur ex vitae ultrices eleifend<Text as="span" fontFamily="arial">?</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt odio sit amet odio blandit rhoncus ut ut leo. Vestibulum consectetur lectus at viverra varius.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                                    Cras euismod varius elit non imperdiet erat varius nec nunc vel convallis justo ut aliquam tellus<Text as="span" fontFamily="arial">?</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Proin non interdum eros. Nunc efficitur ex vitae ultrices eleifend. Sed ultricies, turpis ac sodales suscipit, erat tortor eleifend enim, quis sagittis ligula odio sit amet elit. Cras eu commodo turpis.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos<Text as="span" fontFamily="arial">?</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Nam turpis dui, dignissim ut ipsum vehicula, imperdiet ullamcorper ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nec quam elementum, sodales ipsum non, sodales turpis. Mauris quis urna non ligula semper aliquet. Fusce auctor libero enim, eget vehicula felis suscipit ut.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                                    Nam turpis dui dignissim ut ipsum vehicula imperdiet ullamcorper ante<Text as="span" fontFamily="arial">?</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                The only required license is (at least) the <b>TradingView Pro</b> license. This is necessary to access the <b>Alert Webhook</b> notification =(
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                                    Praesent in massa placerat tempor augue quis accumsan nisi<Text as="span" fontFamily="arial">?</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Sed nulla odio, pretium ut lobortis at, varius id erat. Phasellus molestie dictum pharetra. Sed condimentum sapien ut purus laoreet imperdiet. Fusce est est, volutpat aliquet enim sed, eleifend dictum neque. Suspendisse eu risus nec dolor auctor dictum. 
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </VStack>
            </Center>
        </VStack>
    );
};

export default Faq;