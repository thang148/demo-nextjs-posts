import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Fragment, useEffect, useState } from "react"

// function convertLink(url) {
//   var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
//   var match = url.match(regExp)

//   if (match && match[2].length === 11) {
//     const link = `https://www.youtube.com/embed/${match[2]}`
//     console.log({ link })
//     return link
//   } else {
//     return url
//   }
// }
function convertLink(url) {
  const inputUrl = url
  const baseUrl = "https://www.tiktok.com/embed/"
  if (inputUrl?.indexOf("https://www.tiktok.com") >= 0) {
    if (inputUrl.length > 0 && inputUrl.includes("video/")) {
      const handerUrl = inputUrl?.split("video/")[1]?.split("?")[0]
      const resultUrl = baseUrl + handerUrl
      return resultUrl
    }
    if (inputUrl.length > 0 && inputUrl.includes("https://www.tiktok.com/embed/")) {
      const resultUrl = inputUrl
      return resultUrl
    }
  }

  // var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  // var match = url.match(regExp)
  // if (match && match[2].length === 11) {
  //   const link = `https://www.youtube.com/embed/${match[2]}`
  //   console.log({ link })
  //   return link
  // } else {
  //   return url
  // }
}

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 64,
    minWidth: 64,
    maxHeight: 256
  },
  layoutVideo: {
    position: "relative",
    height: 700,
    paddingBottom: "90.25%"
  }
}))

const pluginTiktok = {
  id: "my-video-tiktok",
  version: 1,
  // eslint-disable-next-line react/display-name
  Renderer: ({ data, isEditMode }) => {
    const [videoUrl, setVideoUrl] = useState()
    const classes = useStyles()
    useEffect(() => {
      setVideoUrl(data?.videoUrl)
    }, [data])
    return (
      <Fragment>
        {!videoUrl ? (
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={clsx("fill-current w-full h-auto p-0 text-gray-400 text-center", classes.root)}
          >
            <path d="M8 5v14l11-7z"></path>
          </svg>
        ) : (
          <div className="flex flex-col h-full">
            <div className={classes.layoutVideo}>
              {isEditMode && <div className="absolute inset-0 z-10 w-full h-full"></div>}
              <div className="absolute inset-0 w-full h-full flex justify-center items-center">
                <iframe
                  width="100%"
                  height="100%"
                  src={convertLink(videoUrl)}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    )
  },
  title: "Nhúng link Tiktok",
  isInlineable: true,
  description: "Copy link tiktok",
  controls: {
    type: "autoform",
    schema: {
      properties: {
        videoUrl: {
          type: "string",
          uniforms: {
            label: "Nhập link"
          }
        }
      }
    },
    columnCount: 1
  }
}

export default pluginTiktok
