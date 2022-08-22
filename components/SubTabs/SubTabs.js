import cn from "classnames"
import s from "./SubTabs.module.css"
import { useState } from "react"

export default function SubTabs({ subs }) {
  const [active, setActive] = useState(subs[0].slug)
  return (
    <div>
      <ul className="flex space-x-4 border-b border-gray-300 border-t mb-2">
        {subs.length > 0 &&
          subs.map(({ name, slug }) => {
            return (
              <li key={slug}>
                <div
                  tabIndex="0"
                  className={cn("p-2 font-semibold cursor-pointer", {
                    [s.active_sub]: active === slug
                  })}
                  onKeyUp={() => setActive(slug)}
                  role="button"
                  onClick={() => setActive(slug)}
                >
                  {name}
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
