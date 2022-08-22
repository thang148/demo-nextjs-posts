import { Layout } from "components/common"
import { useEffect, useState } from "react"
import Image from "next/image"
import BoxTopScreenBlock from "components/BoxTopScreenBlock"
import Box6 from "components/BoxNew"
import Emagazine from "components/Emagazine"
import Box5 from "components/BoxVideo"
// import BoxMentor from "components/BoxMentor"
import BoxSportLive from "components/BoxSportLive"
import BoxListTrending from "components/BoxListTrending"

export default function IndexPage({ screenblocks, events }) {
  useEffect(() => {
    if (document.getElementById("M797638ScriptRootC1294720")) {
      const script = document.createElement("script")
      script.src = "https://jsc.mgid.com/o/n/onsports.vn.1294720.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="bg-ccc">
      <div className="max_layout">
        {screenblocks?.length > 0 &&
          screenblocks.map((screenblock, k) => {
            screenblock.slug = screenblock?.category?.slug || "/"
            if (k === 3) {
              return (
                <div key={98}>
                  <div className="mb-8 rounded-lg">
                    <ImageBanner />
                  </div>
                  <BoxRender screenblock={screenblock} key={k} events={events} />
                </div>
              )
            }
            // if (k === 4) {
            //   return (
            //     <div key={99}>
            //       <div id="M797638ScriptRootC1347373" className="mb-6"></div>
            //       <BoxRender screenblock={screenblock} key={k} events={events} />
            //     </div>
            //   )
            // }
            return <BoxRender screenblock={screenblock} key={k} events={events} />
          })}
        {/* {screenblocks?.find((i) => i.slug === "pundit") && <BoxMentor pundits={pundits} />} */}
        <div className="mt-6">
          <div id="M797638ScriptRootC1294720"></div>
        </div>
      </div>
    </section>
  )
}
function ImageBanner() {
  const [item, setItem] = useState({
    w: 680,
    h: 354,
    url: "https://j03qukjhr2obj.vcdn.cloud/image-upload/84ef0c20-3623-4e21-ad61-a9f2393f7396.png"
  })

  useEffect(() => {
    if (window && window.innerWidth > 767) {
      setItem({
        w: 1000,
        h: 250,
        url: "https://j03qukjhr2obj.vcdn.cloud/image-upload/c85400d1-08fd-4493-92db-2b8304c1e1f8.png"
      })
    }
  }, [])
  const { w, h, url } = item
  return (
    <div className="relative">
      <Image src={url} className="rounded-lg" width={w} height={h} alt="banner" />
      <div className="absolute download_app flex md:block space-x-4 md:space-x-0">
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
      </div>
    </div>
  )
}

function BoxRender({ screenblock }) {
  let Component = ""
  switch (screenblock.type.code) {
    case "breaking_news":
      Component = <BoxSportLive {...screenblock} />
      break
    case "normal_1":
      Component = <BoxTopScreenBlock {...screenblock} />
      break
    case "normal_2":
      Component = <Box6 {...screenblock} />
      break
    case "normal_3":
      Component = <Box5 {...screenblock} />
      break
    case "emagazine":
      Component = <Emagazine {...screenblock} />
      break
    // case "event":
    //   Component = <BoxEvent events={events} />
    //   break
    case "identify":
      Component = <Box6 {...screenblock} />
      break
    case "top_trend":
      Component = <BoxListTrending {...screenblock} />
      break
    case "video":
      Component = <Box5 {...screenblock} />
      break
    default:
      break
  }
  return Component
}

export async function getServerSideProps({ req }) {
  let pageProps = {}
  try {
    const res = await fetch(`http://${req.headers.host}/api/home`)
    const resJson = await res.json()
    if (resJson) pageProps = resJson
  } catch (error) {
    console.log("index: page", error)
  }

  // if (!screenblocks?.length) {
  //   return {
  //     notFound: true
  //   }
  // }

  return { props: { ...pageProps } }
}

IndexPage.Layout = Layout
