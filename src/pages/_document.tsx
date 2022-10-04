/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQWW5ZH');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* FONTS */}
        <link
          rel="preload"
          href="/fonts/denike-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/intelo-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/intelo-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/intelo-thin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/nouvelr-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* METAS */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Haia boa vista. Onde viver é mais que existir."
        />
        <meta
          name="facebook-domain-verification"
          content="ojtlkkiw6afpnrza825mmskj95v25w"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQWW5ZH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
      </body>
    </Html>
  );
};

export default Document;
