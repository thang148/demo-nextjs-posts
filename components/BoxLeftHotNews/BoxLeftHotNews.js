import Image from "next/image"
import { HeaderBoxLeft } from "components/ui"
import Link from "next/link"
import cn from "classnames"

export default function BoxLeftHotNews({ articles }) {
  return (
    <article className="space-box rounded">
      <HeaderBoxLeft title="Tin hot" href="/tin-noi-bat" background="bg-secondary" />
      <div className="border-primary border py-2 bg-white __border_b">
        {articles.map((article, k) => {
          const { slug, base_url, title, created, day } = article
          const __slug = `/post/${slug}`
          const isEnd = k !== articles.length - 1
          return (
            <Link href={__slug} key={k}>
              <a>
                <div className="px-2 cursor-pointer">
                  <div className={cn("grid grid-cols-12 space-x-2 border-primary py-2 pl-1", isEnd && "border-b")}>
                    <div className="col-span-8">
                      <div className="line-clamp-2">
                        <span className="text-content text-sm hover:text-blue-400 hover:underline">{title}</span>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="fix_img">
                        {base_url?.mb_url && (
                          <Image src={base_url?.mb_url} className="rounded" width={160} height={90} alt={title} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          )
        })}
        {/* <div className="p-2 text-center font-bold text-lg cursor-pointer hover:text-secondary">Xem thêm</div> */}
      </div>
    </article>
  )
}
