import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // permite criação de estilos css em javascript
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // eslint-disable-next-line no-undef
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          {/* METAS */}
          <meta charSet="UTF-8" />
          {/* Google Tag Manager */} 
          <script>
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id=%27+i+dl';f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TBTVNVF');
          </script> 
          {/* End Google Tag Manager */} 
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TBTVNVF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          {/* End Google Tag Manager (noscript) */}

          {/* SCRIPTS */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,900;1,400;1,600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
            rel="stylesheet"
          />
          {/* LOGO */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <Main />

          {/* SCRIPTS */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
