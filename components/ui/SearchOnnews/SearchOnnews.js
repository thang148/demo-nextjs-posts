import { useState } from "react"
import s from "./Search.module.css"
import cn from "classnames"
import ClickOutside from "lib/click-outside"

export default function Search() {
  const [show, setSetShow] = useState(false)
  const [text, setText] = useState("")

  function onChangeShow() {
    setText("")
    setSetShow(false)
  }

  function onSearch() {
    let input = document.getElementById("gsc-i-id1")
    input.value = text
    document.getElementsByClassName("gsc-search-button-v2")[0].click()
  }

  function onShow() {
    setSetShow(true)
  }
  function onChange(e) {
    setText(e.target.value)
  }

  const __class = show ? "w-48 sm:w-60" : "w-0"
  return (
    <div className="relative">
      <ClickOutside onClick={onChangeShow}>
        <div className={cn(__class, s.box, "absolute h-10 py-1 right-0 z-10 top-1/2 overflow-hidden")}>
          <div className="relative">
            <input
              value={text}
              onChange={onChange}
              className={cn(s.input, "text-gray-900 rounded-full h-8 px-4 pr-10 border w-full")}
              placeholder="Tìm kiếm..."
            />
            <button
              onClick={onSearch}
              className={cn("absolute text-gray-900  p-1 z-20 top-1/2 rounded cursor-pointer", s.btnSearch)}
            >
              {iconSearch}
            </button>
          </div>
        </div>
      </ClickOutside>
      <div
        tabIndex="0"
        role="button"
        className="p-1 rounded-full cursor-pointer relative"
        onKeyDown={onShow}
        onClick={onShow}
      >
        {iconSearch}
      </div>
    </div>
  )
}

const iconSearch = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)
