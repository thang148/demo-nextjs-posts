import React, { useEffect } from "react"
import videojs from "video.js"
import "videojs-contrib-hls"
import "video.js/dist/video-js.css"

const MyPlayer = ({ src }) => {
  function convertLink(url) {
    if (url) {
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
  const videoJsOptions = {
    controls: true,
    responsive: true,
    playsinline: true,
    fluid: true,
    sources: [
      {
        src: convertLink(src),
        type: "application/x-mpegURL"
      }
    ]
  }

  return (
    <>
      <VideoJS options={videoJsOptions} />
    </>
  )
}

export default MyPlayer

export const VideoJS = (props) => {
  console.log("hien thi props", props)
  const videoRef = React.useRef(null)
  const { options } = props
  const VideoHtml = () => (
    <div data-vjs-player style={{ width: "400px", height: "700px" }}>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  )

  useEffect(() => {
    const videoElement = videoRef.current
    let player
    if (videoElement) {
      player = videojs(videoElement, options, () => {
        console.log("player is ready")
      })
    }
    return () => {
      if (player) {
        player.dispose()
      }
    }
  }, [options])

  return <VideoHtml />
}
