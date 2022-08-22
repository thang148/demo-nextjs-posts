export function renderTimeFromNow(string) {
  const toDay = new Date()
  const date = new Date(string)
  const diffDate = toDay.getTime() - date.getTime()
  const day = Math.round(diffDate / (1000 * 3600 * 24))
  if (day > 30) return Math.round(day / 30) + " tháng trước"
  if (day > 1) return day + " ngày trước"
  const hour = Math.round(diffDate / (1000 * 3600))
  return Math.round(hour) + " giờ trước"
}

export function renderTime(string) {
  const date = new Date(string)
  const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  return (
    <span>
      {date.getHours()}:{minute} | {date.getDate()}/{date.getMonth() + 1}
    </span>
  )
}

export function renderHours(string) {
  const date = new Date(string)
  const minute = date.getMilliseconds() < 10 ? "0" + date.getMilliseconds() : date.getMilliseconds()
  return (
    <span>
      {date.getHours()}:{minute}
    </span>
  )
}

export function convertSeccondToTimePlay(n) {
  let h = Math.floor(n / 3600)
  let m = n % 3600
  let _m = Math.floor(m / 60)
  let s = m % 60
  if (h === 0) {
    h = ""
  } else {
    h = h + ":"
  }
  if (_m < 10) _m = "0" + _m
  if (s < 10) s = "0" + s
  return h + _m + ":" + s
}
