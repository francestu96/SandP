import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Footer from 'elements/Footer';
import Header from 'elements/Header';
import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header/>
      {children}
    <Footer/>
    <Box display={["none", "none", "none", "fixed"]}>
      <Link href="https://api.whatsapp.com/send?phone=393890298500" target="_blank">
        <Image src="/whatsapp-button.png" position="fixed" bottom="15px" right="15px" alt="wp-logo"/>
      </Link>
    </Box>
  </>
);

export default Default;
