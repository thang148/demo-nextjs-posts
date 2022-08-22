/* eslint-disable react/display-name */
import ReactPlayer from "./Player"

const pluginVideoHLS = {
  id: "my-video-hls",
  version: 1,
  Renderer: ({ data }) => {
    const { videoUrl } = data
    return <ReactPlayer src={videoUrl} />
  },
  title: "Video media",
  description: "Loads an image from an url"
}

export default pluginVideoHLS

// function Player({ src }) {
//   const [link, setLink] = useState("")

//   useEffect(() => {
//     setTimeout(() => {
//       setLink(src)
//     }, 100)
//   }, [])

//   return <ReactPlayer src={src} />
// }
