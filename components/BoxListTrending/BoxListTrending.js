import Link from "next/link"
import Divider from "components/ui/Divider"
import cn from "classnames"

function convertToRow(articles) {
  let count = 0
  let list = []
  while (count < articles.length) {
    const item = { item1: articles[count], item2: {} }
    if (articles[count + 1]) {
      item.item2 = articles[count + 1]
      count += 2
    } else {
      count++
    }
    list.push(item)
  }
  return list
}

export default function BoxListTrending({ articles, name }) {
  // articles.shift()

  const list = convertToRow(articles)
  return (
    <article className="space-box">
      <div className="items-center mb-2 sm:mb-4">
        {/* <Link href={slug} scroll={false} passHref> */}
        <div className="__title flex items-center hover:no-underline">
          <Divider />
          {name.toUpperCase()}
        </div>
        {/* </Link> */}
      </div>
      <div className="rounded-lg bg-white ">
        {list?.map(({ item1, item2 }, k) => {
          const { title, id, slug } = item1
          const border = list.length - 1 === k
          const index = k * 2 + 1
          return (
            <div key={id} className="md:grid grid-cols-2 gap-4">
              <ItemBox title={title} slug={slug} index={index} notBorder={border} />
              {item2?.title && <ItemBox title={item2.title} slug={item2.slug} index={index + 1} isBorder={border} />}
            </div>
          )
        })}
      </div>
    </article>
  )
}

const ItemBox = ({ slug, title, index, notBorder }) => {
  return (
    <div className="col-span-1 px-2 md:px-4 cursor-pointer">
      <div className={cn("flex h-full py-4 border-gray-200", { "border-b": !notBorder })}>
        <div className="mr-2 md:mr-4 text-xl md:text-2xl font-semibold text-blue-900">{index}</div>
        <div className="sm:text-lg line-clamp-2">
          <Link href={`/post/${slug}`}>
            <a className="text-title">{title}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
