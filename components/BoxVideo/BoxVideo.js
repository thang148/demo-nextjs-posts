import Card from "components/Card"
import CardFull from "components/CardFull"
import CardFlex from "components/CardFlex"

import { TitleByHome } from "components/ui"

export default function BoxVideo({ name, articles, slug }) {
  const list = [...articles]
  list.splice(0, 2)
  return (
    <article className="space-box">
      <TitleByHome title={name} href={slug} />
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-2 gap-4">
        {articles[0] && <Card key={articles[0].id} article={articles[0]} isFull={true} />}
        {articles[1] && <Card key={articles[1].id} article={articles[1]} isFull={true} />}
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {list.map((article) => {
          return <Card key={article.id} time="03:05" article={article} />
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
        return <CardFlex key={article.id + "1"} article={article} />
      })}
    </div>
  )
}
