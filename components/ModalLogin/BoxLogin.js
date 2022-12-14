import useStore from "components/ui/Context"
import { Avatar, SearchOnnews } from "components/ui"
import s from "./LoginSocial.module.css"
import cn from "classnames"

export default function ModalLogin({ onCancel }) {
  const { userInfo, togleModalLogin } = useStore()

  function onChangeModal() {
    togleModalLogin()
    if (onCancel) onCancel()
  }

  return (
    <div className={cn("flex justify-between items-center gap-4 w-full", s.root)}>
      <a href="https://tv.onsports.vn/" target="_blank" rel="noreferrer">
        <button className="flex bg-primary-600 px-2 py-1 gap-2 items-center rounded text-white">
          {iconLive} Xem live{" "}
        </button>
      </a>
      <div className="flex gap-4">
        <SearchOnnews />
        {userInfo.fullname ? (
          <Avatar onCancel={onCancel} />
        ) : (
          <div
            className="flex items-center"
            onClick={onChangeModal}
            role="button"
            tabIndex="0"
            onKeyDown={onChangeModal}
          >
            {icon} <div className="hidden xl:block ml-1">Đăng nhập</div>
          </div>
        )}
      </div>
    </div>
  )
}

const icon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 10.8C12.9549 10.8 13.8706 10.4207 14.5457 9.74556C15.2208 9.07043 15.6001 8.15475 15.6001 7.19998C15.6001 6.2452 15.2208 5.32952 14.5457 4.65439C13.8706 3.97926 12.9549 3.59998 12.0001 3.59998C11.0453 3.59998 10.1296 3.97926 9.45451 4.65439C8.77938 5.32952 8.4001 6.2452 8.4001 7.19998C8.4001 8.15475 8.77938 9.07043 9.45451 9.74556C10.1296 10.4207 11.0453 10.8 12.0001 10.8ZM3.6001 21.6C3.6001 20.4969 3.81737 19.4046 4.23951 18.3854C4.66165 17.3663 5.28039 16.4403 6.0604 15.6603C6.84041 14.8803 7.76642 14.2615 8.78556 13.8394C9.80469 13.4172 10.897 13.2 12.0001 13.2C13.1032 13.2 14.1955 13.4172 15.2146 13.8394C16.2338 14.2615 17.1598 14.8803 17.9398 15.6603C18.7198 16.4403 19.3385 17.3663 19.7607 18.3854C20.1828 19.4046 20.4001 20.4969 20.4001 21.6H3.6001Z"
      fill="currentColor"
    />
  </svg>
)

const iconLive = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.4765 14.6587C14.288 14.9478 14.3696 15.3351 14.6588 15.5236C14.9478 15.7122 15.3351 15.6306 15.5237 15.3414C16.5254 13.805 17.1075 11.9696 17.1075 10.0001C17.1075 8.03057 16.5254 6.19513 15.5237 4.65871C15.3351 4.36957 14.9478 4.288 14.6588 4.47653C14.3696 4.66506 14.288 5.05228 14.4765 5.34143C15.3499 6.68094 15.8575 8.28028 15.8575 10.0001C15.8575 11.7198 15.3499 13.3192 14.4765 14.6587Z"
      fill="white"
    />
    <path
      d="M5.15717 4.47653C5.44632 4.66505 5.52789 5.05228 5.33936 5.34143C4.46598 6.68094 3.95837 8.28028 3.95837 10.0001C3.95837 11.7198 4.46597 13.3192 5.33936 14.6587C5.52789 14.9478 5.44632 15.3351 5.15717 15.5236C4.86803 15.7122 4.4808 15.6306 4.29227 15.3414C3.29051 13.805 2.70837 11.9696 2.70837 10.0001C2.70837 8.03057 3.29051 6.19513 4.29227 4.65871C4.4808 4.36957 4.86803 4.288 5.15717 4.47653Z"
      fill="white"
    />
    <path
      d="M6.97769 6.99236C7.25807 7.19369 7.32217 7.58419 7.12085 7.86458C6.70379 8.44539 6.45837 9.15689 6.45837 9.92755C6.45837 10.6982 6.70379 11.4097 7.12085 11.9906C7.32217 12.271 7.25807 12.6615 6.97769 12.8628C6.6973 13.0641 6.3068 13 6.10547 12.7196C5.54092 11.9333 5.20837 10.9684 5.20837 9.92755C5.20837 8.8868 5.54092 7.92179 6.10547 7.13552C6.3068 6.85514 6.6973 6.79104 6.97769 6.99236Z"
      fill="white"
    />
    <path
      d="M10 7.7085C8.73437 7.7085 7.70837 8.7345 7.70837 10.0002C7.70837 11.2658 8.73437 12.2918 10 12.2918C11.2657 12.2918 12.2917 11.2658 12.2917 10.0002C12.2917 8.7345 11.2657 7.7085 10 7.7085Z"
      fill="white"
    />
    <path
      d="M12.8257 11.9905C12.6244 12.271 12.6885 12.6615 12.9689 12.8628C13.2492 13.0641 13.6397 13 13.8411 12.7196C14.4057 11.9334 14.7382 10.9684 14.7382 9.92754C14.7382 8.88679 14.4057 7.92179 13.8411 7.13552C13.6397 6.85513 13.2492 6.79104 12.9689 6.99236C12.6885 7.19368 12.6244 7.58419 12.8257 7.86457C13.2427 8.44546 13.4882 9.15687 13.4882 9.92754C13.4882 10.6982 13.2427 11.4097 12.8257 11.9905Z"
      fill="white"
    />
  </svg>
)
