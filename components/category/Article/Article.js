import Editor from "components/Editor"
import Breadcrumb from "./Breadcrumb"
import { Tags } from "components/ui"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Fragment, useEffect } from "react"
import s from "./Article.module.css"
const SharePost = dynamic(() => import("components/SharePost"), { ssr: false })

export default function Article({ article, isEmagazine }) {
  const { content, title, created, created_by, tags, pundit, type, cates, slug } = article
  const _content = content ? JSON.parse(content) : ""
  const isNormal = article.type !== "emagazine"

  useEffect(() => {
    const list = document.getElementsByTagName("p")
    if (list?.length > 0) {
      const elParent = list[2]?.parentElement
      if (elParent) {
        let newNode = document.createElement("div")
        newNode.id = "M797638ScriptRootC1347373"
        newNode.className = "__mgbox"
        elParent.insertBefore(newNode, elParent.children[2])
        const script = document.createElement("script")
        script.src = "https://jsc.mgid.com/o/n/onsports.vn.1347373.js"
        script.async = true
        document.body.appendChild(script)
      }
    }
  }, [])
  return (
    <div className="mb-4">
      {isNormal && (
        <Fragment>
          <Breadcrumb cates={cates} />
          <h1 className="font-semibold mb-2">{title}</h1>
          <div className="text-time mb-4 text-sm">
            <time dateTime={new Date(created)}>{renderTime(new Date(created))}</time>
          </div>
          {type === "pundit" && pundit && renderPundit(pundit)}
        </Fragment>
      )}
      <Editor value={_content} />
      <div className="max_content m-auto">
        <div>
          <span className="flex items-center">
            {iconuser}&nbsp;<span className="font-semibold">{created_by?.pseudonym}</span>
          </span>
        </div>
        {tags?.length > 0 && <Tags tags={tags} />}
        <div>
          <SharePost slug={slug} isEmagazine={isEmagazine} />
        </div>
      </div>
    </div>
  )
}

function renderPundit(pundit) {
  const { avatar, name, description } = pundit
  return (
    <div className="flex space-x-2 items-center mb-4">
      <div className={s.img}>
        <Image className="rounded-full" src={avatar} alt={avatar} width={60} height={60} />
      </div>
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="text-sm text-time">{description}</h4>
      </div>
    </div>
  )
}

const iconuser = (
  <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.87012C10.6868 2.87012 9.38642 3.12877 8.17317 3.63132C6.95991 4.13387 5.85752 4.87046 4.92893 5.79905C3.05357 7.67441 2 10.218 2 12.8701C2 15.5223 3.05357 18.0658 4.92893 19.9412C5.85752 20.8698 6.95991 21.6064 8.17317 22.1089C9.38642 22.6115 10.6868 22.8701 12 22.8701C14.6522 22.8701 17.1957 21.8165 19.0711 19.9412C20.9464 18.0658 22 15.5223 22 12.8701C22 11.5569 21.7413 10.2565 21.2388 9.04328C20.7362 7.83003 19.9997 6.72764 19.0711 5.79905C18.1425 4.87046 17.0401 4.13387 15.8268 3.63132C14.6136 3.12877 13.3132 2.87012 12 2.87012ZM7.07 19.1501C7.5 18.2501 10.12 17.3701 12 17.3701C13.88 17.3701 16.5 18.2501 16.93 19.1501C15.57 20.2301 13.86 20.8701 12 20.8701C10.14 20.8701 8.43 20.2301 7.07 19.1501ZM18.36 17.7001C16.93 15.9601 13.46 15.3701 12 15.3701C10.54 15.3701 7.07 15.9601 5.64 17.7001C4.62 16.3701 4 14.6901 4 12.8701C4 8.46012 7.59 4.87012 12 4.87012C16.41 4.87012 20 8.46012 20 12.8701C20 14.6901 19.38 16.3701 18.36 17.7001ZM12 6.87012C10.06 6.87012 8.5 8.43012 8.5 10.3701C8.5 12.3101 10.06 13.8701 12 13.8701C13.94 13.8701 15.5 12.3101 15.5 10.3701C15.5 8.43012 13.94 6.87012 12 6.87012ZM12 11.8701C11.6022 11.8701 11.2206 11.7121 10.9393 11.4308C10.658 11.1495 10.5 10.7679 10.5 10.3701C10.5 9.97229 10.658 9.59076 10.9393 9.30946C11.2206 9.02815 11.6022 8.87012 12 8.87012C12.3978 8.87012 12.7794 9.02815 13.0607 9.30946C13.342 9.59076 13.5 9.97229 13.5 10.3701C13.5 10.7679 13.342 11.1495 13.0607 11.4308C12.7794 11.7121 12.3978 11.8701 12 11.8701Z"
      fill="#636F82"
    />
  </svg>
)

function getDay(number) {
  if (number === 2) return "Hai"
  if (number === 3) return "Ba"
  if (number === 4) return "Tư"
  if (number === 5) return "Năm"
  if (number === 6) return "Sáu"
  if (number === 7) return "Bảy"
}
function renderTime(date) {
  const day = date.getDay() === 0 ? "Chủ nhật" : "Thứ " + getDay(date.getDay() + 1)
  // console.log({ day })
  return (
    <span>
      {day}, {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
    </span>
  )
}
