// import SelectedWidth from "./SelectedWidth"
const MaxContentPlugin = {
  id: "my-content",
  title: "Content max width",
  // eslint-disable-next-line react/display-name
  Renderer: (props) => <div className="m-auto w-full max_content">{props.children}</div>,
  version: 1
}

export default MaxContentPlugin
