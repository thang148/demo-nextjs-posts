import React, { useEffect } from "react"
import videojs from "video.js"
import "videojs-contrib-hls"
import "video.js/dist/video-js.css"

const MyPlayer = ({ src }) => {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    playsinline: true,
    fluid: true,
    sources: [
      {
        src: src,
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
  const videoRef = React.useRef(null)
  const { options } = props
  const VideoHtml = () => (
    <div data-vjs-player>
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
