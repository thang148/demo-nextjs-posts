import CardFlex from "components/CardFlex"

export default function ListArticles({ articles }) {
  return (
    <div className="space-box">
      {articles.map((article) => {
        return <CardFlex article={article} key={article.id} />
      })}
    </div>
  )
}
