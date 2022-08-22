/* eslint-disable react/display-name */
// import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { Divider, Pagination } from "components/ui"
import Card from "components/Card"
import CardFull from "components/CardFull"

export default function PageSpecial({ articles, pagination, pathname, categoryName }) {
  const router = useRouter()
  const list = [...articles]
  const firstElement = list.shift()
  function onChange(number) {
    router.push({
      pathname,
      query: { page: number }
    })
  }
  return (
    <section className="mb-8">
      <div className="items-center mb-2 sm:mb-4">
        <div className="__title flex items-center">
          <Divider />
          <span className="capitalize">{categoryName}</span>
        </div>
      </div>
      <CardFull article={firstElement} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {list.length > 0 &&
          list.map((article) => {
            return <Card article={article} isFull={true} key={article.id} />
          })}
      </div>
      <div>
        <Pagination pagination={pagination} onChange={onChange} />
      </div>
    </section>
  )
}
