import Link from "next/link"

export default function Breadcrumb({ cates }) {
  return (
    <div className="cursor-pointer mb-4">
      {cates?.length > 0 && (
        <div className="flex items-center">
          <Link href={"/"}>
            <a className="text-title hover:text-blue-500">Trang chủ</a>
          </Link>
          <span className="text-gray-500">{Icon}</span>
          <Item {...cates[0]} />
          {cates[0]?.child[0]?.name && (
            <div className="flex items-center">
              <span className="text-gray-500">{Icon}</span>
              <Item baseSlug={cates[0]?.slug} {...cates[0]?.child[0]} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const Item = ({ slug, name, baseSlug }) => {
  const _slug = baseSlug ? `/${baseSlug}` : ""
  return (
    <Link href={`/danh-muc${_slug}/${slug}`}>
      <a className="text-title hover:text-blue-600">{name}</a>
    </Link>
  )
}

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
)
