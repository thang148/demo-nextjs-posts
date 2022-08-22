import Link from "next/link"
// import Image from "next/image"
import useStore from "components/ui/Context"
// import { DfAvatar } from "components/ui/Icons"

function convertName(name) {
  let _name = name
  if (name.includes("@")) {
    const list = name.split("@")
    _name = list[0]
  }
  return _name
}
export default function Avatar({ onCancel }) {
  const { userInfo } = useStore()

  function onClick() {
    if (onCancel) onCancel()
  }
  const { fullname, avatar } = userInfo
  return (
    <div className="relative flex items-center" onClick={onClick} onKeyDown={onClick} tabIndex="0" role="button">
      <Link href="/profile">
        <div className="flex items-center capitalize">
          {/* <div className="flex items-center">
            {avatar ? <Image className="rounded-full" src={avatar} width={32} height={32} /> : DfAvatar}
          </div> */}

          {convertName(fullname).substring(0, 10)}
          {fullname.length > 10 && "..."}
        </div>
      </Link>
    </div>
  )
}
