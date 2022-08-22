import Card from "components/Card"
import { TitleByHome } from "components/ui"
import CardFlex from "components/CardFlex"
import CardFull from "components/CardFull"

export default function BoxNew({ name, articles, slug }) {
  return (
    <article className="space-box">
      <TitleByHome title={name} href={slug} />
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => {
          return <Card key={article.id} article={article} />
        })}
      </div>
      <ViewMobile articles={articles} />
    </article>
  )
}

function ViewMobile({ articles }) {
  const item0 = { ...articles[0] }
  const list = [...articles]
  list.splice(0, 1)
  return (
    <div className="block md:hidden">
      <CardFull key={item0.id} article={item0} />
      {list.map((article) => {
        return <CardFlex key={article.id + "2"} article={article} />
      })}
    </div>
  )
}
