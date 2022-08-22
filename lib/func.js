export function renderStatus({ status, match_time, pen_score, time_status }) {
  let text = time_status || ""
  let __class = ""
  if (status === 0) {
    const date = new Date(match_time * 1000)
    text = date.getHours() + ":" + addZero(date.getMinutes())
  }
  if (status === 1 || status === 3) {
    __class = "text-red font-bold"
  }
  if (status === 5) {
    text = "PEN:" + pen_score
    __class = "text-red font-bold"
  }
  if (status === -11) text = "TBD"
  return { text, class: __class }
}

function addZero(i) {
  return i < 10 ? "0" + i : i
}

// "o live talkshow"
// "1 live"
// "2 vod hightlight fullmatch"

export default function convertThumb(article) {
  const __thumb = article?.thumbnail?.includes("http")
    ? article?.thumbnail
    : article?.base_url + "1024x576/" + article?.thumbnail
  return __thumb
}

export function convertThumbNew(article) {
  const __thumb = article?.thumbnail?.includes("http")
    ? article?.thumbnail
    : article?.base_url + "416x234/" + article?.thumbnail
  return __thumb
}
