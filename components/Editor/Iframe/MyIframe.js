const pluginUpload = {
  id: "my-iframe",
  version: 1,
  // eslint-disable-next-line react/display-name
  Renderer: ({ data }) => {
    const { linkIframe } = data
    return <div className="my_iframe" dangerouslySetInnerHTML={{ __html: linkIframe }}></div>
  },
  title: "Iframe facebook",
  isInlineable: true,
  description: "Iframe facebook",
  controls: {
    type: "autoform",
    schema: {
      properties: {
        linkIframe: {
          type: "string"
        }
      }
    },
    columnCount: 1
  }
}

export default pluginUpload
