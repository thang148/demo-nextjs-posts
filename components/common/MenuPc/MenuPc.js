const { Fragment, useRef, useState, useEffect } = require("react")
import s from "./Navbar.module.css"
import cn from "classnames"
import Link from "next/link"

export default function MenuPC({ menus }) {
  const __time = useRef()
  const [path, setPath] = useState(-1)
  const [count, setCount] = useState(6)
  const _activeHome = "/" !== path && path !== -1

  useEffect(() => {
    function resize() {
      if (__time.current) {
        clearTimeout(__time.current)
        __time.current = null
      }
      __time.current = setTimeout(() => {
        setCount(Math.floor(window.innerWidth / 280))
      }, 300)
    }
    if (window?.innerWidth) setCount(Math.floor(window.innerWidth / 280))
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])
  const __menus = menus.slice(count, menus.length)
  const _menus = menus.slice(0, count)
  return (
    <Fragment>
      <div className="xl:hidden flex items-center" onMouseMove={() => setPath("/")} onMouseLeave={() => setPath(-1)}>
        <Link href="/">
          <a className={cn("text-white mx-3 flex items-center", _activeHome && "opacity-50")}>Trang chủ</a>
        </Link>
      </div>
      {_menus?.length > 0 &&
        _menus.map(({ name, slug, child }, k) => {
          const isActive = slug !== path && path !== -1
          return (
            <div
              key={k}
              onMouseMove={() => setPath(slug)}
              onMouseLeave={() => setPath(-1)}
              className={cn(s.item, "relative flex h-full items-center")}
            >
              <Link href={`/danh-muc/${slug}`}>
                <a
                  href={`/danh-muc/${slug}`}
                  className={cn("text-white mx-3 flex items-center", isActive && "opacity-50")}
                >
                  {name} <span>{child.length > 0 && downLine}</span>
                </a>
              </Link>
              {child && child.length > 0 && (
                <ul className={cn("hidden absolute w-60 text-left bg-white p-2 rounded", s.ul)}>
                  {child.map((_item, kk) => {
                    const _href = `/danh-muc/${slug}/${_item.slug}`
                    return (
                      <Link href={_href} key={kk}>
                        <a href={_href}>
                          <li className="font-normal text-title px-4 py-2 cursor-pointer rounded hover:bg-secondary hover:text-white">
                            {_item.name}
                          </li>
                        </a>
                      </Link>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}

      <SubMenus __menus={__menus} />
    </Fragment>
  )
}

function SubMenus({ __menus }) {
  return (
    <Fragment>
      {__menus?.length > 0 && (
        <div className={cn("relative h-full flex items-center", s.item)}>
          <div className="w-16 flex justify-center">{more}</div>
          <ul className={cn("absolute hidden w-48 text-left bg-white py-1 rounded", s.ul)}>
            {__menus.map(({ name, slug, child }, k) => {
              const _href = `/danh-muc/${slug}`
              return (
                <div key={k} className={cn(s.ul_sub, "relative px-2")}>
                  <Link href={_href}>
                    <a href={_href}>
                      <li className="font-normal flex justify-between items-center text-title px-4 py-2 cursor-pointer rounded hover:bg-secondary hover:text-white">
                        {name} <span>{child.length > 0 && right}</span>
                      </li>
                    </a>
                  </Link>
                  {child && child.length > 0 && (
                    <ul className={cn("hidden left-full absolute w-60 top-0 text-left px-2 rounded", s.sub_item)}>
                      <div className="px-1 py-2 bg-white rounded shadown_menu">
                        {child.map((_item, kk) => {
                          const _href = `/danh-muc/${slug}/${_item.slug}`
                          return (
                            <Link href={_href} key={kk}>
                              <a href={_href}>
                                <li className="font-normal text-title px-4 py-2 cursor-pointer rounded hover:bg-secondary hover:text-white">
                                  {_item.name}
                                </li>
                              </a>
                            </Link>
                          )
                        })}
                      </div>
                    </ul>
                  )}
                </div>
              )
            })}
          </ul>
        </div>
      )}
    </Fragment>
  )
}

const downLine = (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.94 5.72864L8 8.78864L11.06 5.72864L12 6.6753L8 10.6753L4 6.6753L4.94 5.72864Z" fill="currentColor" />
  </svg>
)
const right = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
)

const more = (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </svg>
)
