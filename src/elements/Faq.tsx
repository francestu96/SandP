import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Link, VStack } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const Faq = () => {
  return (
    <VStack id="faq" backgroundImage="abstract.png" backgroundSize="cover" backgroundPosition="center" width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin">
      <Center py="20" backgroundImage="/tokenomics-bg.png" backgroundPosition="center" backgroundSize="cover" width="full">
        <VStack gap="10" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} width={["90%", "80%", "70%"]}>
          <Text textAlign="center" fontSize="4xl" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">
            Domande Frequenti
          </Text>
          <Accordion width="full" allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Come funziona il processo di gestione del mio immobile da parte della tua agenzia<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Il processo di gestione della tua proprietà inizia con una valutazione approfondita della stessa da parte del nostro team. Una volta che accettiamo la tua proprietà, ci occupiamo di tutti gli aspetti della gestione, dalla creazione degli annunci su piattaforme come Airbnb e Booking alla gestione delle prenotazioni, della pulizia e dell'accoglienza degli ospiti.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Quali servizi offri per la gestione del mio immobile<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Offriamo una gamma completa di servizi per la gestione della tua proprietà, tra cui la pubblicazione degli annunci, la gestione delle prenotazioni, la pulizia professionale tra un soggiorno e l'altro, la manutenzione regolare e l'accoglienza degli ospiti.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Quali vantaggi offre la gestione del mio immobile attraverso la tua agenzia<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Affidandoci la gestione della tua proprietà, potrai beneficiare di una maggiore visibilità online grazie alla nostra esperienza nella creazione di annunci efficaci. Inoltre, ci occupiamo di tutto, dal marketing alla gestione delle prenotazioni, permettendoti di guadagnare in modo passivo senza doverti preoccupare di nulla.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Come vengono determinate le tariffe di affitto per il mio immobile<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Le tariffe di affitto per la tua proprietà vengono determinate in base a diversi fattori, tra cui la posizione, le dimensioni, le caratteristiche e la stagionalità. Utilizziamo dati di mercato e analisi approfondite per garantire che le tariffe siano competitive e ottimizzate per massimizzare i tuoi guadagni.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Quali sono i costi associati alla gestione del mio immobile<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                I costi associati alla gestione della tua proprietà includono una commissione per ogni prenotazione gestita da noi, oltre a eventuali costi aggiuntivi per servizi extra come la pulizia o la manutenzione. Tutti i costi sono trasparenti e concordati in anticipo
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Quali sono le politiche di pagamento e di rimborso per i proprietari<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                I pagamenti vengono effettuati in base a un calendario stabilito, generalmente dopo il completamento di ogni soggiorno. Per quanto riguarda i rimborsi, seguiamo le politiche di cancellazione concordate con gli ospiti e ti informiamo tempestivamente su eventuali rimborsi da effettuare.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Come garantisci la sicurezza del mio immobile e dei miei dati<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                La sicurezza della tua proprietà e dei tuoi dati è la nostra massima priorità. Utilizziamo sistemi di sicurezza avanzati per proteggere la tua proprietà e i tuoi dati personali da accessi non autorizzati o frodi
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} fontFamily="CustomFont">
                  Come posso contattarti per ulteriori domande o per iniziare la collaborazione<Text as="span" fontFamily="arial">?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Puoi contattarci tramite il nostro sito web o tramite i nostri recapiti telefonici e email. Siamo sempre disponibili per rispondere alle tue domande e discutere di come possiamo aiutarti a gestire al meglio la tua proprietà.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Center>
    </VStack>
  );
};

export default Faq;