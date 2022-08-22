import Card from "components/Card"
import CardFlex from "components/CardFlex"
import CardFull from "components/CardFull"

export default function BoxTopScreenBlock({ type, articles }) {
  const list = [...articles]
  list.splice(0, 1)
  return (
    <article className="space-box">
      {articles.length > 0 && <CardFull article={articles[0]} />}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {list.map((article) => {
          return <Card type={type} key={article.id} article={article} />
        })}
      </div>
      <div className="block md:hidden">
        {list.map((article) => {
          return <CardFlex type={type} key={article.id} article={article} />
        })}
      </div>
    </article>
  )
}
