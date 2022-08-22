import { Avatar, SearchOnnews } from "components/ui"
import { IcLive, IcUser } from "components/ui/Icons"
import Link from "next/link"
import { Fragment, useEffect, useState } from "react"
import s from "./MenuMobile.module.css"

export default function MenuMobile({ visible, wapperClassname, router, menus, showModalLogin, setOpen, userInfo }) {
  const [show, setShow] = useState(false)

  function onClose() {
    setShow(false)
  }

  useEffect(() => {
    if (show) {
      document.body.classList.add("body_scroll_hidden")
    } else {
      document.body.classList.remove("body_scroll_hidden")
    }
  }, [show])

  useEffect(() => {
    if (visible) onClose()
  }, [visible])

  return (
    <header
      style={{ top: 44 }}
      className={`${wapperClassname} fixed inset-0 flex justify-end z-20 h-screen w-full bg-gray-900 bg-opacity-50 transform duration-300 ease-out tb:hidden `}
    >
      <div className="max-w-md w-full">
        <div className="flex justify-between gap-4 bg-gray-200 p-4 py-2">
          <a href="https://tv.onsports.vn/" target="_blank" rel="noreferrer">
            <button className="py-1 px-2 bg-primary-600 text-white flex rounded gap-2 items-center">
              {IcLive} Xem Live
            </button>
          </a>
          <div className="flex gap-4">
            <SearchOnnews />
            {userInfo.fullname ? (
              <Avatar onCancel={() => setOpen(false)} />
            ) : (
              <button onClick={showModalLogin}>{IcUser}</button>
            )}
          </div>
        </div>

        <nav className={s.content}>
          {menus.map(({ name, slug, child }, k) => {
            const isSub = child && child.length > 0
            return (
              <div key={k} className="border-b border-gray-200">
                <ItemLink
                  isSub={isSub}
                  url={slug}
                  list={child}
                  asPath={router.asPath}
                  title={name}
                  onChange={onClose}
                />
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

function ItemLink({ url, list, title, isSub, onChange }) {
  const [show, setShow] = useState(false)

  function onChangeShow(e) {
    e.stopPropagation()
    setShow((c) => !c)
  }

  return (
    <Fragment>
      <div
        className="flex items-center justify-between w-full not_hover"
        onClick={onChange}
        onKeyDown={onChange}
        tabIndex="0"
        role="button"
      >
        <Link href={`/danh-muc/${url}`}>
          <div className="font-semibold px-4 py-3 flex-grow">
            <a className="text-title">{title}</a>
          </div>
        </Link>
        {isSub && (
          <div className="px-4 not_hover" onClick={onChangeShow} onKeyDown={onChangeShow} tabIndex="0" role="button">
            {show ? up : dowm}
          </div>
        )}
      </div>

      {list && show && (
        <ul className="bg-gray-50">
          {list.map((_item, kk) => {
            return (
              <Link href={`/danh-muc/${url}/${_item.slug}`} key={kk}>
                <li>
                  <div
                    onClick={onChange}
                    onKeyDown={onChange}
                    tabIndex="0"
                    role="button"
                    className="w-full font-normal px-8 py-2 cursor-pointer hover:bg-blue-300"
                  >
                    <a className="text-title">{_item.name}</a>
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
      )}
    </Fragment>
  )
}

const dowm = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
)
const up = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
)
