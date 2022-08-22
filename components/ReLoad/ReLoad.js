import Link from "next/link"

export default function ReLoad({ url }) {
  return (
    <div className="text-center p-4" style={{ height: "50vh" }}>
      <h2 className="mb-4">Hệ thống đang quá tải vui lòng thử lại</h2>
      <Link href={url}>
        <button className="py-1 px-4 text-white bg-primary-600 rounded hover:bg-primary-500">Thử lại</button>
      </Link>
    </div>
  )
}
