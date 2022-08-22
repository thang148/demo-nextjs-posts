import Editor from "@react-page/editor"
// import video from "@react-page/plugins-video"
import html5video from "@react-page/plugins-html5-video"
import background from "@react-page/plugins-background"
import pluginVideo from "./PluginVideo"
import mySlatePlugin from "./MySlatePlugin"
import pluginUpload from "./PluginUpload"
import maxContentPlugin from "./MaxContentPlugin"
import pluginTable from "./MyTable"
import iFrame from "./Iframe"
import PluginYoutube from "./PluginYoutube"
import pluginTiktok from "./PluginTiktok"

import "@react-page/editor/lib/index.css"
import "@react-page/plugins-video/lib/index.css"
import "@react-page/plugins-html5-video/lib/index.css"
import "@react-page/plugins-slate/lib/index.css"
import "@react-page/plugins-background/lib/index.css"
import "@react-page/plugins-spacer/lib/index.css"
import { useEffect, useState } from "react"
//  import "./Editor.module.css"

const cellPlugins = [
  maxContentPlugin,
  mySlatePlugin,
  pluginUpload,
  pluginVideo,
  PluginYoutube,
  pluginTiktok,
  html5video,
  iFrame,
  pluginTable,
  background()
]

const MyEditor = ({ value }) => {
  const [isMb, setIsMb] = useState(true)
  useEffect(() => {
    if (window && window.innerWidth > 500) {
      setIsMb(false)
    }
  }, [])
  return (
    <div className="__editor">
      <Editor value={value} cellPlugins={cellPlugins} readOnly cellSpacing={isMb ? { y: 16 } : { x: 16, y: 16 }} />
    </div>
  )
}

export default MyEditor
