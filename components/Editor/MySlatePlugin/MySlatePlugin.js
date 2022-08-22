import slate from "@react-page/plugins-slate"
import slateColor from "../plugins/Color"

const mySlatePlugin = slate((def) => ({
  ...def, // this is the default configuration
  id: "my-custom-slate-plugin", // Each slate plugin should get its own ID
  title: "Text",
  description: "An advanced rich text area",
  // Selectively enable some slate inbuilt plugins
  plugins: {
    ...def.plugins,
    custom: {
      textColor: slateColor
    }
  }
  // other overrides
}))

export default mySlatePlugin
