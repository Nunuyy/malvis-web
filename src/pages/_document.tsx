import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { extractCritical } from '@emotion/server'

export default class _DOCUMENT extends Document<{
  ids: string[]
  css: string
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const page = await ctx.renderPage()
    const styles = extractCritical(page.html)
    return { ...initialProps, ...page, ...styles }
  }

  render() {
    return (
      <Html>
        <Head>
          <style data-emotion-css={this.props.ids.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const qchatInit = document.createElement('script');
              qchatInit.src = "https://webchat.qontak.com/qchatInitialize.js";
              const qchatWidget = document.createElement('script');
              qchatWidget.src = "https://webchat.qontak.com/js/app.js";
              document.head.prepend(qchatInit);
              document.head.prepend(qchatWidget);
              qchatInit.onload = function () {qchatInitialize({ id: '893dca5c-ae42-4005-a334-a9060f8ebe17', code: 'wexb92CgFwzD2caRWpUJEA' })};
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
