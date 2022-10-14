import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LayoutProvider } from '@contexts/Layout';
import { Footer } from '@components/Footer';

import '@fancyapps/ui/dist/fancybox.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Haia Boa Vista</title>
      </Head>
      <LayoutProvider>
        <Component {...pageProps} />
        <Footer />
      </LayoutProvider>
    </>
  );
};

export default MyApp;
