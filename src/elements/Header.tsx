import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, VStack, useDisclosure, Text, Slide, Link, Image } from '@chakra-ui/react';
import React from 'react';
import { ISubNav } from './SubNav';
;
import Logo from './Logo';
import NavItem from './NavItem';

const NAV_LINKS: ISubNav[] = [
    { label: "Come Funziona", href: "/#howitworks" },
    { label: "Chi Siamo", href: "/#about" },
    { label: "I Nostri Numeri", href: "/#numbers" },
    { label: "F.A.Q.", href: "/#faq" },
    {
      label: "Social",
      href: "#",
      children: [
        {
          label: "Instagram",
          subLabel: "Seguici su Instagram!",
          href_blank: "",
          logo: "/instagram_logo.png",
        },
        {
          label: "Facebook",
          subLabel: "Seguici su Facebook!",
          href_blank: "",
          logo: "/facebook_logo.png",
        }
      ]
    }
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box borderBottom="1px" borderBottomColor="chakra-border-color" p='10px 10%'>
      <Flex justify="space-between" display={['none', 'none', 'none','flex']}>
        <HStack>
            <Logo/>
            <Text fontSize="xl" fontFamily="CustomFont" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">S<Text as={'span'} fontWeight="bold" fontFamily="arial">&</Text>P Management</Text>
        </HStack>
        <HStack gap={'15px'} alignItems="center">
          {NAV_LINKS.map((link) => (
            <NavItem key={`link-${link.label}`} {...link} />
          ))}
        </HStack>
      </Flex>
      <Flex align="center" justify="space-between" display={['flex', 'flex', 'flex','none']}>
        <Logo />
        <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon/>} onClick={onToggle}/>
      </Flex> 


      <Slide in={isOpen} transition={{"enter": {duration: 0.5}, "exit": {duration: 0.5}}} style={{ zIndex: 10 }}>
        <Flex w='100vw' h="100vh" flexDir="column" backgroundColor="white">
          <Flex justify="flex-end">
          <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg" icon={<CloseIcon/>} onClick={onToggle}/>
        </Flex>
          <VStack gap={'15px'}>
            {NAV_LINKS.map((link) => (
              <NavItem key={`link-${link.label}`} {...link} />
            ))}
          </VStack>
        </Flex>   
        <Link href="https://api.whatsapp.com/send?phone=393480944572" target="_blank">
          <Image src="/whatsapp-button.png" position="fixed" bottom="15px" right="15px" alt="wp-logo"/>
        </Link>
      </Slide> 
    </Box>
  );
};

export default Header;
