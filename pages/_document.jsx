import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
import { Default } from '../themes';


export default class DefaultDocument extends Document {

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    //const theme = {theme: Default};

    const page = renderPage((Page) => (props) =>
      sheet.collectStyles(
        <ThemeProvider theme={Default}>
          
            <>
              <GlobalStyle {...props} />
              <Page {...props} />
            </>
          
        </ThemeProvider>
      ),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }

}