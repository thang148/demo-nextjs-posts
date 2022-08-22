import useStore from "components/ui/Context"
import dynamic from "next/dynamic"
const Modal = dynamic(() => import("components/ui/Modal"), { ssr: false })
const LoginForm = dynamic(() => import("components/ModalLogin/LoginForm"), { ssr: false })

export default function ModalLogin() {
  const { isShowModalLogin, togleModalLogin } = useStore()
  return (
    <Modal isOpen={isShowModalLogin} onCancel={togleModalLogin} locked={true}>
      <LoginForm onCancel={togleModalLogin} />
    </Modal>
  )
}
