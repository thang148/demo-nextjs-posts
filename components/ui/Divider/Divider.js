import s from "./Divider.module.css"
import cn from "classnames"

export default function Input(props) {
  return <div className={cn(s.divider, "inline-block bg-primary mr-2")} {...props}></div>
}
