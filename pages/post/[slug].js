import { useEffect } from "react"
import { LayoutPost } from "components/common"
import Article from "components/category/Article"
import BoxTop10 from "components/category/BoxTop10"
import BoxLeftHotNews from "components/BoxLeftHotNews"
import bannerDownloadAppVertical from "components/BannerDownloadAppVertical"
import ReLoad from "components/ReLoad"
import { getPropsPost } from "lib/dataStore"

function PostArticle({ article, articles, topNews, slug }) {
  if (!article?.id) return <ReLoad url={`/post/${slug}`} />
  const isNormal = article.type !== "emagazine"
  useEffect(async () => {
    setTimeout(() => {
      if (window) {
        var script = document.createElement("script")
        script.src = "https://sp.zalo.me/plugins/sdk.js"
        document.getElementsByTagName("head")[0].appendChild(script)
      }
    }, 1000)
  }, [])

  return (
    <section className="__view_article">
      {isNormal ? (
        <article className="max_layout" id="article">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="col-span-3 tb:col-span-2 max_content mx-auto">
              {article?.id ? <Article article={article} /> : <div className="text-center">Bài viết không tồn tại</div>}
              <BoxTop10 articles={articles} />
            </div>
            <div className="hidden tb:block col-span-1">
              <BoxLeftHotNews articles={topNews} />
              {bannerDownloadAppVertical}
            </div>
          </div>
        </article>
      ) : (
        <article className="_emagazine">
          {article?.id ? (
            <Article article={article} isEmagazine={true} />
          ) : (
            <div className="text-center">Bài viết không tồn tại</div>
          )}
        </article>
      )}
    </section>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  let article = {},
    layout = {
      menus: [],
      articles: [],
      topNews: []
    }

  const baseUrl = `${process.env.NEXT_PUBLIC_DOMAIN_API}/api/v1`
  try {
    const __article = fetch(`${baseUrl}/publish/articles/${slug}/`)
    // eslint-disable-next-line no-undef
    const response = await Promise.all([getPropsPost(slug), __article])
    if (response[0]) layout = response[0]
    if (response[1].ok) {
      const _article = await response[1].json()
      if (_article?.data?.id) article = _article.data
    }
  } catch (error) {
    console.log("error: Post", error)
  }
  return { props: { ...layout, article, slug }, revalidate: 30 }
}

export async function getStaticPaths() {
  const paths = []
  return { paths, fallback: "blocking" }
}
export default PostArticle
PostArticle.Layout = LayoutPost
