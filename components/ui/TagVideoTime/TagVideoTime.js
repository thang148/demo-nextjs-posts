import s from "./TagVideoTime.module.css"
import cn from "classnames"
export default function TagVideoTime({ isMobile }) {
  const ___class = isMobile ? "py-1 px-2" : "py-2 px-4"
  return (
    <div className="absolute bottom-1.5 flex left-1.5 w-1/3 opacity-90">
      <div className={cn("bg-red-600 flex items-center rounded-sm", ___class)}>
        <div className={isMobile ? s.timeMobile : s.time}></div>
      </div>
      {/* <div className="px-4 py-1 bg-gray-800 text-white">{time}</div> */}
    </div>
  )
}
