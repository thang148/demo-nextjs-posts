/* eslint-disable react/display-name */
import ReactPlayer from "./Player"

const pluginTiktok = {
  id: "my-video-tiktok",
  version: 1,
  Renderer: ({ data }) => {
    const { videoUrl } = data
    return <ReactPlayer src={videoUrl} />
  },
  title: "Video media",
  description: "Loads an image from an url"
}

export default pluginTiktok

// function Player({ src }) {
//   const [link, setLink] = useState("")

//   useEffect(() => {
//     setTimeout(() => {
//       setLink(src)
//     }, 100)
//   }, [])

//   return <ReactPlayer src={src} />
// }
