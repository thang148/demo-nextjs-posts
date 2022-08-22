import Link from "next/link"
import s from "./Tags.module.css"
export default function Tag({ tags }) {
  return (
    <div className="flex items-center space-x-2 my-4 flex-wrap">
      <div className="mr-2">Từ khóa:</div>
      {tags.length > 0 &&
        tags.map(({ name, code }) => {
          return (
            <div className={s.tag} key={code}>
              <Link href={`/tag/${code}`}>
                <a className="text-title hover:text-blue-600">{name}</a>
              </Link>
            </div>
          )
        })}
    </div>
  )
}
