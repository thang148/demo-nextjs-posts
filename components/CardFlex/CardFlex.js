import Image from "next/image"
import Link from "next/link"
import { TagVideoTime, EmagazineIcon } from "components/ui"

export default function CardFlex({ article }) {
  const { slug, base_url, title, short_description, created, day, type } = article
  const url = "/post/" + slug
  return (
    <Link href={url}>
      <a>
        <div className="border-b border-primary py-2 sm:py-4">
          <div className="grid grid-cols-7 md:grid-cols-3 lg:grid-cols-5 gap-2">
            <span className="relative overflow-hidden rounded fix_img col-span-3 md:col-span-1 lg:col-span-2 cursor-pointer">
              {base_url && <Image src={base_url?.mb_url} width={320} height={180} alt={title} />}
              {type === "emagazine" && <EmagazineIcon isMobile={true} />}
              {type === "video" && <TagVideoTime isMobile={true} />}
            </span>

            <div className="col-span-4 md:pl-2 md:col-span-2 lg:col-span-3">
              <h2 className="text-sm xs:text-base md:text-lg font-semibold text-title mb-1 line-clamp-3 xs:line-clamp-2 cursor-pointer">
                {title}
              </h2>
              <p className="hidden xs:line-clamp-1 sm:line-clamp-2 text-sm xs:text-base">{short_description}</p>
              {/* <p className="text-time text-xs mt-1">
            {day} {new Date(created).toLocaleDateString("vi-VN")}
          </p> */}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

// const BoxEmagazine = <div className={cn("absolute bottom-0 w-1/3 left-0", s.s1)}>{Emagazine}</div>
