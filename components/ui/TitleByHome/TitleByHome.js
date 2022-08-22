import Link from "next/link"
import Divider from "components/ui/Divider"

export default function TitleByHome({ title, href }) {
  return (
    <div className="items-center mb-2 sm:mb-4">
      <div className="__title flex items-center">
        <Divider />
        <Link href={`/danh-muc/${href}`}>
          <a className="text-title">{title.toUpperCase()}</a>
        </Link>
      </div>
    </div>
  )
}
