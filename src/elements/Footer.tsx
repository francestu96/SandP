import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  HStack,
  Tooltip,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Logo from './Logo';
import Link from 'next/link';


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: "blackAlpha.200",
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box color="gray.700" borderTop="1px" borderTopColor="chakra-border-color">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '4fr 3fr 3fr 3fr' }} spacing={8}>
          <Stack spacing={6}>
            <HStack gap="3">
              <Logo/>
              <HStack alignItems="end">
                    <Text fontSize="2xl" px="1" mb="-1" fontFamily="CustomFont" fontWeight="900" backgroundImage={'linear-gradient(to right, #9945FF, #14F195)'} backgroundClip="text" fill="transparent">S<Text as={'span'} fontFamily="arial">&</Text>P Management</Text>
                </HStack>
            </HStack>
            <Text fontSize={'sm'}>
              © 2024 S&amp;P Management. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Telegram'} href={""}>
                <FaTelegram />
              </SocialButton>
              <SocialButton label={'Twitter'} href={""}>
                <FaTwitter />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contatti</ListHeader>
            <Link href={""}>info@spmanagement.house</Link>
            <Link href={""}>+39 348 094 4572</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Informazioni</ListHeader>
            <Text>Viale Bernabò Brea 57, GE</Text>
            <Text>P.IVA 03763720102</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Rimani aggiornato</ListHeader>
            <Stack direction={'row'}>
              <Input placeholder={'Indirizzo email'} bg="blackAlpha.100" border={0} _focus={{ bg: 'whiteAlpha.300' }}/>
              <Tooltip label="coming soon!" hasArrow>
                <IconButton bg="main" color="white" aria-label="Subscribe" cursor="not-allowed" icon={<BiMailSend />}/>
              </Tooltip>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}