import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import { Children } from '@/types';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


export default function Layout({children}: Children) {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Box maxWidth='1280px' m='auto'>
                <header>
                    <NavBar />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}
