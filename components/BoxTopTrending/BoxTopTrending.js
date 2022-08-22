import CardFlex from "components/CardFlex"
// import { TitleByHome } from "components/ui"

const list = []
for (let i = 0; i < 6; i++) {
  list.push(i)
}

export default function BoxTopTrending() {
  return (
    <article className="space-box">
      {/* <TitleByHome title="TOP TRENDING" href="/detail" /> */}
      <div>
        {list.map((item, k) => {
          return <CardFlex key={k} {...item} />
        })}
      </div>
    </article>
  )
}
