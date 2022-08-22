import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
          <link rel="alternate" type="application/rss+xml" href="/rss" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://cse.google.com/cse.js?cx=d3a4933293639cf38"></script>
          <div className="gcse-search" enablehistory="false"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
