import dynamic from "next/dynamic"
const Modal = dynamic(() => import("components/ui/Modal"), { ssr: false })
import Image from "next/image"

export default function ModalLogin({ visible, setVisible }) {
  return (
    <Modal isOpen={visible} onCancel={() => setVisible(false)} locked={false}>
      <div className="text-center p-8 max-w-md">
        <div className="text-sm text-gray-400 mb-2 ">Ứng dụng xem trực tiếp thể thao hoàn toàn miễn phí</div>
        <div className="text-xl text-gray-800 font-semibold mb-4">Tải app On Sports ngay!</div>
        <div className="flex mb-4 items-center justify-center">
          <div className="p-2 rounded-xl border border-gray-200 mr-4 fix_img">
            <Image
              src="https://j03qukjhr2obj.vcdn.cloud/image-upload/c2daf902-f809-4970-a09c-37d1ca492408.png"
              width={102}
              height={102}
            />
          </div>
          <div>
            <div className="mb-3 mt-1">
              <a
                href="https://apps.apple.com/vn/app/on-sports/id1282845933#?platform=iphone"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://j03qukjhr2obj.vcdn.cloud/image-upload/06572fd3-d278-4673-8377-909cf488cb08.png"
                  width={164.5}
                  height={45}
                />
              </a>
            </div>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.vtvcab.onsports"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://j03qukjhr2obj.vcdn.cloud/image-upload/c5f614fc-2aa8-4806-b971-bddea5b709df.png"
                  width={164.5}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-sm">
          Dùng ứng dụng QR để quét mã, hoặc tải ứng dụng từ Google Play hoặc Apple Store.{" "}
        </div>
      </div>
    </Modal>
  )
}
