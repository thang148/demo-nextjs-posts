import Link from "next/link"
import { useEffect, useState } from "react"
import { DividerTitle } from "components/ui"
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export default function BoxSportLive({ articles }) {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const time = setInterval(() => {
      setNumber(getRandomInt(articles.length - 1))
    }, 3000)
    return () => clearInterval(time)
  }, [])

  return (
    <div className="md:flex items-center py-4">
      <h1 className="__title mr-2 whitespace-nowrap flex items-center hover:no-underline">
        BREAKING NEWS &nbsp;
        {/* <div>dddd</div> */}
        <DividerTitle />
      </h1>
      <Item article={articles[number]} />
    </div>
  )
}

function Item({ article }) {
  const { slug } = article
  const _slug = "/post/" + slug
  const string = article.title

  return (
    <div className="line-clamp-1">
      <div className="text-link cursor-pointer">
        <Link href={_slug}>
          <a>{string}</a>
        </Link>
      </div>
    </div>
  )
}
