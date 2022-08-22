import clsx from "clsx"
import { Fragment } from "react"
function convertLink(url) {
  // eslint-disable-next-line no-useless-escape
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  var match = url.match(regExp)

  if (match && match[2].length === 11) {
    const link = `https://www.youtube.com/embed/${match[2]}`
    return link
  } else {
    return url
  }
}

const pluginVideoHLS = {
  id: "ory/editor/core/content/video",
  version: 1,
  // eslint-disable-next-line react/display-name
  Renderer: ({ data, isEditMode }) => {
    const { src } = data
    return (
      <Fragment>
        {!src ? (
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={clsx(
              "fill-current w-full h-auto p-0 text-gray-400 text-center min-h-[64px] min-w-[64px] max-height-[256px]"
            )}
          >
            <path d="M8 5v14l11-7z"></path>
          </svg>
        ) : (
          <div className="flex flex-col h-full">
            <div className="relative h-0" style={{ paddingBottom: "65.25%" }}>
              {isEditMode && <div className="absolute inset-0 z-10 w-full h-full"></div>}
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={convertLink(src)}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

export default pluginVideoHLS
