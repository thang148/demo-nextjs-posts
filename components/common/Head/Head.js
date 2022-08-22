import siteMetadata from "lib/siteMetadata"
import NextHead from "next/head"

// import { DefaultSeo } from 'next-seo'
// import config from "@config/seo.json"

export default function Head() {
  const { appId, pageId, headerTitle, location, language } = siteMetadata
  return (
    <NextHead>
      <meta
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1"
        name="viewport"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap"
        rel="stylesheet"
      />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="onsport.vn" />
      <meta property="fb:app_id" content={appId} />
      <meta property="fb:pages" content={pageId} />
      <meta content="news" itemProp="genre" name="medium" />
      <meta content={language} itemProp="inLanguage" />
      <meta content="Tin nhanh OnSports" itemProp="sourceOrganization" name="source" />
      <meta name="copyright" content={headerTitle} />
      <meta name="author" content={headerTitle} />
      <meta name="robots" content="index, follow" />
      <meta name="geo.placename" content={location} />
      <meta name="geo.region" content="VN-HN" />
      <meta name="geo.position" content="21.030624;105.782431" />
      <meta name="ICBM" content="21.030624, 105.782431" />
      <meta name="revisit-after" content="days" />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112249419-1" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-112249419-1', {
                page_path: window.location.pathname,
                });
              `
        }}
      />
    </NextHead>
  )
}

// export default Head
