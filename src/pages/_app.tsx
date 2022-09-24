import type { AppProps } from 'next/app';

import { LayoutProvider } from '@contexts/Layout';
// import { Footer } from '@components/Footer';

import '@fancyapps/ui/dist/fancybox.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </LayoutProvider>
  );
};

export default MyApp;
