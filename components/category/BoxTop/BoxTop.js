import Card from "components/Card"
import CardFlex from "components/CardFlex"

export default function BoxHot({ articles }) {
  return (
    <div className="space-box">
      <Card article={articles[0]} isFull={true} />
      <div className="hidden md:grid grid-cols-2 gap-4 mt-4">
        {articles[1] && <Card article={articles[1]} />}
        {articles[2] && <Card article={articles[2]} />}
      </div>
      <div className="md:hidden mt-4">
        {articles[1] && <CardFlex article={articles[1]} />}
        {articles[2] && <CardFlex article={articles[2]} />}
      </div>
    </div>
  )
}
