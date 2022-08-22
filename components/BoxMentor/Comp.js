import Image from "next/image"
import Link from "next/link"
import s from "./BoxMentor.module.css"

export function ItemMentor({ title, slug, pundit }) {
  const { name, avatar } = pundit || {}
  const url = "/post/" + slug
  return (
    <div className={s.roott}>
      <Link href={url}>
        <div className={s.avatar}>
          {avatar && <Image src={avatar} alt="avatar" width={80} height={80} className="rounded-full" />}
        </div>
      </Link>
      <div className={s.wapper}>
        <div className="h-8"></div>
        <div>
          <div className="font-semibold text-xl line-clamp-2 mb-1">{name}</div>
          <div className="text-sm sm:text-base text-time">Chuyên gia</div>
        </div>
        <div className="flex py-4">
          <div>{quato}</div>
          <div className="border-b border-gray-300 flex-grow"></div>
        </div>
        <div>
          <Link href={url}>
            <div className="line-clamp-3 mb-2 text-title">{title}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

const quato = (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.77313 0.929688L6.20895 2.84014C5.22189 3.89088 4.52139 4.87795 4.10746 5.80133C3.69353 6.72471 3.48657 7.67994 3.48657 8.667L2.00597 7.28193H6.73433V13.9685H0V9.57446C0 7.95058 0.286567 6.45407 0.859701 5.08491C1.43284 3.71576 2.40398 2.33068 3.77313 0.929688ZM13.0388 0.929688L15.4746 2.84014C14.4876 3.89088 13.7871 4.87795 13.3731 5.80133C12.9592 6.72471 12.7522 7.67994 12.7522 8.667L11.2716 7.28193H16V13.9685H9.26567V9.57446C9.26567 7.95058 9.55224 6.45407 10.1254 5.08491C10.6985 3.71576 11.6697 2.33068 13.0388 0.929688Z"
      fill="#DFE1E6"
    />
  </svg>
)
