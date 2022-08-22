// import Link from "next/link"
import cn from "classnames"

export default function HeaderBoxLeft({ background, title, href }) {
  return (
    // <Link href={href}>
    <div
      className={cn(
        "p-2 __border_t bg-gray-600 font-semibold text-white text-lg flex justify-between items-center",
        background
      )}
    >
      <h3>{title}</h3>
      {/* <div className="cursor-pointer hover:bg-gray-500 p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div> */}
    </div>
    // </Link>
  )
}
