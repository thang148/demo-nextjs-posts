import Image from "next/image"
// import Script from "next/script"
import { useEffect } from "react"

const bannerDownloadAppVertical = (
  <div className="relative">
    <div className="mb-6">
      <Image
        src="https://j03qukjhr2obj.vcdn.cloud/image-upload/6214b3df-fb13-43d9-9c1f-4809f7e2a4bb.jpg"
        className="rounded-lg"
        alt="banner_app_onsport"
        height={702}
        width={304}
      />
    </div>
    {/* <div className="absolute banner_vertical flex space-x-4">
        <a
          target="_blank"
          href="https://apps.apple.com/vn/app/on-sports/id1282845933#?platform=iphone"
          rel="noreferrer"
        >
          <img
            src="https://j03qukjhr2obj.vcdn.cloud/image-upload/b7dcc842-733c-492c-9734-639a8b2beb9d.png"
            alt="app_store"
            className="md:mb-4"
          />
        </a>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.vtvcab.onsports" rel="noreferrer">
          <img
            src="https://j03qukjhr2obj.vcdn.cloud/image-upload/30dfdb73-8ecb-4dee-979c-767c5085c445.png"
            alt="app_store"
          />
        </a>
      </div> */}

    <Ads />
    {/* <Script src="https://jsc.mgid.com/o/n/onsports.vn.1294726.js" /> */}
  </div>
)

export default bannerDownloadAppVertical

function Ads() {
  useEffect(() => {
    if (window) {
      window.addEventListener("load", () => {
        if (document.getElementById("M797638ScriptRootC1294726")) {
          const script = document.createElement("script")
          script.src = "https://jsc.mgid.com/o/n/onsports.vn.1294726.js"
          script.async = true
          document.body.appendChild(script)
        }
      })
    }
  }, [])
  return <div id="M797638ScriptRootC1294726"></div>
}
