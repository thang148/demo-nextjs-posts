import { isMobile } from "react-device-detect"
import Image from "next/image"
import { Emagazine } from "components/ui/Icons"
import { TagVideoTime } from "components/ui"
import Link from "next/link"

export default function CardFull({ article }) {
  const { short_description, base_url, title, slug, type, day, created } = article
  const url = "/post/" + slug
  return (
    <Link href={url}>
      <a>
        <div className="overflow-hidden relative rounded-lg __box pb-2 md:pb-0 bg-white grid-cols-5 gap-4 border-primary border mb-2 sm:mb-4 md:grid">
          <div className="col-span-3">
            <div className="relative cursor-pointer">
              <div className="fix_img">
                {base_url && (
                  <Image
                    className="__img"
                    src={isMobile ? base_url?.mb_url : base_url?.pc_url}
                    alt={title}
                    width={690}
                    height={388.125}
                  />
                )}
              </div>
              {type === "emagazine" && (
                <div className="absolute bottom-0 w-1/3 left-0 rounded-tr overflow-hidden">{Emagazine}</div>
              )}
              {type === "video" && <TagVideoTime />}
            </div>
          </div>
          <div className="col-span-2 flex items-center p-2">
            <div>
              <h2 className="line-clamp-2 mb-2 md:mb-6 mt-2 __title">{title}</h2>
              <p className="cursor-pointer line-clamp-3">{short_description}</p>
              {/* <div className="text-time mt-4 text-sm">
            {day} {new Date(created).toLocaleDateString("vi-VN")}
          </div> */}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
