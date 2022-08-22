// import { isMobile } from "react-device-detect"
import Image from "next/image"
import { TagVideoTime, EmagazineIcon } from "components/ui"
// import { Emagazine } from "components/ui/Icons"
import Link from "next/link"
import cn from "classnames"

export default function Card({ article, isFull, isBoxEmagazine }) {
  const { slug, base_url, title, short_description, type, time, created, day, pundit } = article
  const url = "/post/" + slug
  return (
    <Link href={url}>
      <a>
        <div className="h-full flex __box flex-col mb-2 sm:mb-0">
          <div className="relative cursor-pointer">
            <div className="fix_img __border_t">
              {base_url && (
                <Image
                  className="__img"
                  src={isFull ? base_url?.pc_url : base_url?.mb_url}
                  alt={title}
                  width={690}
                  height={388.125}
                />
              )}
            </div>
            {type === "emagazine" && !isBoxEmagazine && <EmagazineIcon />}
            {type === "video" && <TagVideoTime time={time} />}
          </div>
          <div className="flex flex-col bg-white __border_b justify-between flex-grow px-2 md:px-4">
            <div>
              <h2 className={cn("__title_sub line-clamp-2 mb-2", { "text-xl": isFull })}>{title}</h2>
              <p className={cn("text-sm line-clamp-2 cursor-pointer mb-4", { "text-base": isFull })}>
                {short_description}
              </p>
            </div>
            {/* <div>
          <div className="text-time my-2 text-sm flex items-center">
            {pundit && <span className="text-link font-semibold mr-4">{pundit?.name}</span>}
            <span className="mr-4">
              {day} {new Date(created).toLocaleDateString("vi-VN")}
            </span>
          </div>
        </div> */}
          </div>
        </div>
      </a>
    </Link>
  )
}
// const BoxEmagazine = <div className={cn("absolute bottom-0 w-1/3 left-0", s.s1)}>{Emagazine}</div>
