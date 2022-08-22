import convertThumb from "lib/func"
import siteMetadata from "lib/siteMetadata"
import Head from "next/head"

export function PageSEO() {
  const { title, description, image, siteUrl, siteName } = siteMetadata

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Facebook */}
      <meta property="og:title" content={title} key="title" itemProp="headline" />
      <meta property="og:description" content={description} itemProp="description" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:rich_attachment" content="true" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} itemProp="url" />
      <meta property="og:image" content={image} itemProp="thumbnailUrl" />
      <meta property="og:image:width" content="560" />
      <meta property="og:image:height" content="292" />

      {/* Twitter  */}
      <meta name="twitter:title" content="OnSports - Báo thể thao nhiều người xem nhất" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:width" content="640" />
      <meta name="twitter:image:height" content="360" />
    </Head>
  )
}

export function BlogSEO({ article }) {
  const { title, short_description, slug, cates, tags, created } = article
  const __thumb = convertThumb(article)
  const tagNames = tags?.map((i) => i.name)?.toString()
  const category = cates?.length ? cates[0]?.name : "Thể thao"
  const { siteName, facebook } = siteMetadata
  const postLink = `https://onsports.vn/post/${slug}`
  const publishedAt = created ? new Date(created)?.toISOString() : new Date()?.toISOString()

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={short_description} />
      <link rel="alternate" href={postLink} hrefLang="vi-vn" />
      <meta content={category} itemProp="articleSection" />
      <meta content={publishedAt} name="pubdate" />
      <meta content={publishedAt} name="lastmod" />

      {/* Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={short_description} />
      <meta property="og:url" content={postLink} />
      <meta property="og:image" content={__thumb} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="360" />
      <meta property="article:publisher" content={facebook} />
      <meta property="article:tag" content={tagNames} />
      <meta property="article:published_time" content={publishedAt} />
      <meta property="article:modified_time" content={publishedAt} />

      {/* Twitter  */}
      <meta name="twitter:card" value="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={short_description} />
      <meta name="twitter:image" content={__thumb} />
      <meta name="twitter:image:width" content="640" />
      <meta name="twitter:image:height" content="360" />
      <meta name="twitter:url" content={postLink} />
      <meta name="twitter:site" content="@VnEnews" />
      <meta name="twitter:creator" content="@VnEnews" />
      <meta name="twitter:image:width" content="640" />
      <meta name="twitter:image:height" content="360" />
    </Head>
  )
}
