import React from "react"
import ReactDOM from "react-dom"

export default function Portal({ children, parent, className }) {
  const el = React.useMemo(() => document.createElement("div"), [])
  React.useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body
    const classList = ["portal-container"]
    if (className) className.split(" ").forEach((item) => classList.push(item))
    classList.forEach((item) => el.classList.add(item))
    target.appendChild(el)
    if (!document.body.classList[0]) document.body.classList.add("body_scroll_hidden")
    return () => {
      target.removeChild(el)
      document.body.classList.remove("body_scroll_hidden")
    }
  }, [el, parent, className])
  return ReactDOM.createPortal(children, el)
}
