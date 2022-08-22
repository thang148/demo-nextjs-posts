// import { api } from "apiServer"
import { Layout } from "components/common"
import PageSpecial from "components/PageSpecial"

export default function PageTags({ articles, pagination, tag, tagName }) {
  return (
    <section className="max_layout">
      <PageSpecial articles={articles} pagination={pagination} pathname={`/tag/${tag}`} categoryName={tagName} />
    </section>
  )
}

PageTags.Layout = Layout

export async function getServerSideProps({ query }) {
  const baseUrl = `${process.env.NEXT_PUBLIC_DOMAIN_API}/api/v1`
  const { page } = query
  let pagination = {
    page_num: page ? Number(page) : 1,
    page_size: 10,
    total: 0,
    tag_code: query?.tag
  }
  let articles = [],
    menus = [],
    tagName = ""

  try {
    const __menus = fetch(`${baseUrl}/publish/categories/all/`)
    const __tag = fetch(`${baseUrl}/publish/articles-elasticsearch/?` + new URLSearchParams(pagination))
    // eslint-disable-next-line no-undef
    const response = await Promise.all([__menus, __tag])
    const _menus = await response[0].json()
    if (_menus.data?.length > 0) menus = _menus.data

    const _tag = await response[1].json()
    if (_tag) {
      const { data, count, tag } = _tag
      pagination.total = count
      if (data?.length > 0) articles = data
      tagName = tag?.tag_name
    }
  } catch (error) {
    console.log("error", error)
  }

  if (!articles?.length) {
    return {
      notFound: true
    }
  }
  return { props: { menus, articles, pagination, tagName, tag: query?.tag } }
}
