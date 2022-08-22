import s from "./EmagazineIcon.module.css"
import cn from "classnames"
import { Emagazine } from "components/ui/Icons"

export default function BoxEmagazine({ isMobile }) {
  return (
    <div className={cn("absolute rounded-tr bottom-0 w-1/3 left-0 overflow-hidden", isMobile ? s.s2 : s.s1)}>
      {Emagazine}
    </div>
  )
}
