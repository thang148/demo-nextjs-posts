import { useRef } from "react"
import { Button, Input } from "@material-ui/core"
import { connectField } from "uniforms"
import { CloudUpload } from "@material-ui/icons"

const ImageUploadField = connectField(({ value, onChange }) => {
  const ref = useRef()

  async function onchangeFile(e) {
    const _url = URL.createObjectURL(e.target.files[0])
    onChange(_url)
  }

  function onChangeUrl(e) {
    onChange(e.target.value)
  }

  return (
    <div className="flex items-end space-x-2">
      <Button
        size="large"
        onClick={() => ref.current.click()}
        variant="contained"
        color="primary"
        endIcon={<CloudUpload />}
      >
        CHOOSE FOR UPLOAD
      </Button>
      <div>OR</div>
      <Input
        className="flex-grow"
        value={value || ""}
        onChange={onChangeUrl}
        label="Existings image URL"
        placeholder="http://example.com/image.png"
      />
      <input type="file" className="hidden" ref={ref} onChange={onchangeFile} />
    </div>
  )
})

export default ImageUploadField
