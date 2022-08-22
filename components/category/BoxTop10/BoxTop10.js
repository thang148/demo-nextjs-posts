import { Divider } from "components/ui"
import Link from "next/link"
import { useEffect } from "react"

export default function BoxHot({ articles }) {
  useEffect(() => {
    if (document.getElementById("M797638ScriptRootC1294720")) {
      const script = document.createElement("script")
      script.src = "https://jsc.mgid.com/o/n/onsports.vn.1294720.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])
  return (
    <div className="space-box mt-8">
      <div className="text-title text-lg flex items-center mb-4 font-bold">
        <Divider />
        <span>BÀI VIẾT CÙNG CHUYÊN MỤC</span>
      </div>
      <ul className="list-disc px-4">
        {articles &&
          articles.length > 0 &&
          articles.map(({ title, slug }, k) => {
            return (
              <li key={k} className="mb-2">
                <Link href={`/post/${slug}`}>
                  <a className="text-link hover:underline">{title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
      <div className="mt-6">
        <div id="M797638ScriptRootC1294720"></div>
        {/* <Script src="https://jsc.mgid.com/o/n/onsports.vn.1294720.js" /> */}
      </div>
    </div>
  )
}
