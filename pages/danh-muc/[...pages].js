/* eslint-disable react/display-name */
// import dynamic from "next/dynamic"
import { api } from "apiServer"
import { useRouter } from "next/router"
import { Layout } from "components/common"
import BoxTop from "components/category/BoxTop"
import ListArticles from "components/category/ListArticles"
import BoxLeftHotNews from "components/BoxLeftHotNews"
// import BoxLeftCalendar from "components/BoxLeftCalendar"
// import BoxLeftRanking from "components/BoxLeftRanking"
import BoxTopScreenBlock from "components/BoxTopScreenBlock"
import BoxNew from "components/BoxNew"
import { DividerTitle, Pagination } from "components/ui"
import PageSpecial from "components/PageSpecial"
import { Fragment } from "react"
import bannerDownloadAppVertical from "components/BannerDownloadAppVertical"
import { getPropsCategory } from "lib/dataStore"

function TitlePage({ categoryName }) {
  return (
    <div className="__title flex items-center mb-4">
      <span className="mr-4 capitalize">{categoryName}</span> <DividerTitle />
    </div>
  )
}
function Pages({ articles, subs, subSlug, slug, type, pagination, topNews }) {
  const { is_special, is_sub, categoryName } = type
  return (
    <section className="max_layout">
      {is_special ? (
        <Fragment>
          {articles.length > 0 ? (
            <PageSpecial
              pathname={`/danh-muc/${slug}`}
              articles={articles}
              categoryName={categoryName}
              pagination={pagination}
            />
          ) : (
            "No data"
          )}
        </Fragment>
      ) : (
        <Fragment>
          {is_sub && subs?.length > 0 ? (
            <ListSubs subs={subs} slug={slug} />
          ) : (
            <Articles
              topNews={topNews}
              categoryName={categoryName}
              pagination={pagination}
              articles={articles}
              pathname={`/danh-muc/${slug}/${subSlug}`}
            />
          )}
        </Fragment>
      )}
    </section>
  )
}

export default Pages
Pages.Layout = Layout

function Articles({ articles, categoryName, pathname, pagination, topNews }) {
  const router = useRouter()
  const __list = [...articles]
  const listTop3 = __list.slice(0, 3)
  __list.splice(0, 3)
  function onChange(number) {
    router.push({
      pathname,
      query: { page: number }
    })
  }
  return (
    <Fragment>
      <TitlePage categoryName={categoryName} />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="col-span-3 tb:col-span-2">
          {listTop3.length > 0 && <BoxTop articles={listTop3} />}
          <ListArticles articles={__list} />
          <Pagination pagination={pagination} onChange={onChange} />
        </div>
        <div className="hidden tb:block col-span-1">
          <BoxLeftHotNews articles={topNews} />
          {bannerDownloadAppVertical}
          {/* <BoxLeftCalendar />
          <BoxLeftRanking /> */}
        </div>
      </div>
    </Fragment>
  )
}

function ListSubs({ subs, slug }) {
  const __list = [...subs]
  __list.shift()
  return (
    <Fragment>
      <TitlePage categoryName={subs[0]?.name?.toUpperCase()} />
      <BoxTopScreenBlock {...subs[0]} />
      {__list.length > 0 &&
        __list.map((item, k) => {
          return <BoxNew {...item} key={k} slug={`${slug}/${item.slug}`} />
        })}
    </Fragment>
  )
}

export async function getServerSideProps({ query }) {
  const { pages, page } = query
  const subSlug = pages[pages.length - 1]
  let articles = [],
    layout = {
      menus: [],
      articles: [],
      topNews: []
    },
    subs = [],
    type = {},
    pagination = {
      page_num: page ? Number(page) : 1,
      page_size: 10,
      total: 0
    }

  const baseUrl = `${process.env.NEXT_PUBLIC_DOMAIN_API}/api/v1`

  try {
    const __category = fetch(
      `${baseUrl}/publish/articles/national-category/${subSlug}/?` + new URLSearchParams(pagination)
    )
    // eslint-disable-next-line no-undef
    const response = await Promise.all([getPropsCategory(), __category])
    if (response[0]) layout = response[0]
    if (response[1].ok) {
      const _category = await response[1].json()
      if (_category) {
        const { data, is_sub, is_special, count, cate_name } = _category
        if (is_sub && !is_special) {
          subs = data
        } else {
          articles = data
          pagination.total = count
        }
        type = { is_sub, is_special, categoryName: cate_name || "N/A" }
      }
    }
  } catch (error) {
    console.log("error", error)
  }

  if (!subs && !articles) {
    return {
      notFound: true
    }
  }
  return { props: { ...layout, articles, subs, pagination, subSlug, type, slug: `${pages[0]}` } }
}
