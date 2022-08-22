import clsx from "clsx"
import ImageUploadField from "./ImageUploadField"

const pluginUpload = {
  id: "my-image",
  version: 1,
  // eslint-disable-next-line react/display-name
  Renderer: ({ data }) => {
    const { imageUrl, isOpenNewTab, description, clickUrl } = data

    const __class = clsx("react-page-plugins-content-image w-full")
    return (
      <figure>
        {clickUrl ? (
          <a href={clickUrl} target={isOpenNewTab ? "_blank" : ""} rel="noreferrer">
            <img loading="lazy" className={__class} src={imageUrl} alt="" />
          </a>
        ) : (
          <img loading="lazy" className={__class} src={imageUrl} alt="" />
        )}
        <figcaption className="text-center text-gray-400 text-sm mt-2">{description}</figcaption>
      </figure>
    )
  },
  title: "Image",
  isInlineable: true,
  description: "Loads an image from an url",
  controls: {
    type: "autoform",
    schema: {
      properties: {
        imageUrl: {
          type: "string",
          uniforms: {
            // you can pass additional props to uniforms, e.g. the component to use to render the field
            component: ImageUploadField
          }
        },
        description: {
          type: "string"
        },
        clickUrl: {
          type: "string",
          uniforms: {
            label: "Link to open upon image click"
          }
        },
        isOpenNewTab: {
          type: "boolean",
          uniforms: {
            label: "Open link new window"
          }
        }
      }
    },
    columnCount: 1
  }
}

export default pluginUpload
