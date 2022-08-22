import Link from "next/link"
import Image from "next/image"
import cn from "classnames"
import s from "./Footer.module.css"

const others = [
  {
    title: "onsports@vtvcab.vn",
    url: "/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9395 3C18.2805 3 19.5705 3.53 20.5195 4.481C21.4695 5.43 22.0005 6.71 22.0005 8.05V15.95C22.0005 18.74 19.7305 21 16.9395 21H7.06049C4.26949 21 2.00049 18.74 2.00049 15.95V8.05C2.00049 5.26 4.25949 3 7.06049 3H16.9395ZM18.5305 9.54L18.6105 9.46C18.8495 9.17 18.8495 8.75 18.5995 8.46C18.4605 8.311 18.2695 8.22 18.0705 8.2C17.8605 8.189 17.6605 8.26 17.5095 8.4L13.0005 12C12.4205 12.481 11.5895 12.481 11.0005 12L6.50049 8.4C6.18949 8.17 5.75949 8.2 5.50049 8.47C5.23049 8.74 5.20049 9.17 5.42949 9.47L5.56049 9.6L10.1105 13.15C10.6705 13.59 11.3495 13.83 12.0605 13.83C12.7695 13.83 13.4605 13.59 14.0195 13.15L18.5305 9.54Z"
          fill="#536EBF"
        />
      </svg>
    )
  },
  {
    title: "(0243) 771 4929 ",
    url: "/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.00846 10.6946C5.00846 10.0759 5.01591 9.45726 5.02339 8.83575L5.02339 8.83574C5.02719 8.52065 5.03099 8.20482 5.03384 7.88788C5.03384 4.48258 7.16556 1.99976 10.1094 1.99976H13.8906C16.8344 1.99976 18.9662 4.48258 18.9662 7.88788C18.9915 9.25196 19 10.616 19 11.9899C19 13.3638 18.9915 14.7475 18.9662 16.1116C18.9662 19.5169 16.8344 21.9998 13.8906 21.9998H10.1094C7.16556 21.9998 5.03384 19.5169 5.03384 16.1018C5.01692 14.8162 5 13.5012 5 12.1666L5.00846 10.6946ZM13.28 19.64V19.8C13.28 20.4736 12.7168 21 12 21C11.3003 21 10.72 20.4736 10.72 19.8V19.64C10.72 18.984 11.3003 18.44 12 18.44C12.7168 18.44 13.28 18.984 13.28 19.64ZM7.01671 8.4434C7.01136 8.84738 7.00604 9.2495 7.00604 9.65162L7 10.6084C7 11.476 7.01208 12.3307 7.02417 13.1663C7.02417 15.3862 8.54683 17 10.6495 17H13.3505C15.4532 17 16.9758 15.3862 16.9758 13.1727C16.994 12.2861 17 11.3867 17 10.4936C17 9.60059 16.994 8.71393 16.9758 7.82728C16.9758 5.61384 15.4532 4 13.3505 4H10.6495C8.54683 4 7.02417 5.61384 7.02417 7.82728C7.02214 8.0333 7.01942 8.23859 7.01671 8.4434Z"
          fill="#536EBF"
        />
      </svg>
    )
  },
  {
    title: "Tòa nhà VTVcab, số 3, ngõ 84 Ngọc Khánh, Ba Đình, Hà Nội",
    url: "/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.03 2.00002C14.29 2.01002 16.45 2.91002 18.03 4.49002C19.62 6.08002 20.51 8.23002 20.5 10.46V10.51C20.44 13.54 18.74 16.33 16.62 18.51C15.42 19.74 14.09 20.83 12.64 21.75C12.25 22.08 11.68 22.08 11.29 21.75C9.14 20.35 7.24 18.59 5.7 16.54C4.35 14.76 3.58 12.62 3.5 10.39C3.52 5.74002 7.34 1.99002 12.03 2.00002ZM12.03 13.26C12.74 13.26 13.42 12.99 13.92 12.5C14.44 11.99 14.731 11.311 14.731 10.6C14.731 9.12002 13.52 7.93002 12.03 7.93002C10.54 7.93002 9.34 9.12002 9.34 10.6C9.34 12.061 10.52 13.24 12 13.26H12.03Z"
          fill="#536EBF"
        />
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className={s.bg}>
      <div className="max-w-base p-4 m-auto">
        <div className="grid sm:grid-cols-12 gap-2 sm:gap-4">
          <div className="col-span-8">
            <div className="hidden md:block">
              <Link href="/">
                <div className="cursor-pointer">
                  <Image
                    src="https://j03qukjhr2obj.vcdn.cloud/image-upload/1445f34d-be22-47b0-9c76-89f7da58f4ab.png"
                    width={218}
                    height={60}
                  />
                </div>
              </Link>
            </div>
            <p className={cn("mb-4 mt-2 text-sm text-justify", s.maxWidth)}>
              Ứng dụng số một về Thể thao, Bóng đá Việt Nam; truyền hình trực tuyến tất cả các kênh thể thao thuộc hệ
              thống VTVcab: On Football, On Sports, On Sports News, On Sports+, On Golf.
            </p>

            <a href="http://online.gov.vn/Home/WebDetails/88056" target="__blank" className="hidden md:block">
              <Image
                src="https://j03qukjhr2obj.vcdn.cloud/image-upload/cae45c4d-9603-4048-adf7-fce15291cb88.png"
                width={100}
                height={38}
              />
            </a>
          </div>
          <div className="col-span-4 flex flex-col justify-between sm:pt-4">
            <div className="mt-4 sm:mt-0 text-sm">
              {others.map(({ title, url, icon }, k) => {
                return (
                  <div key={k} className="mb-2 flex">
                    <div className="mr-2">{icon}</div>
                    <span>{title}</span>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center space-x-4 md:mb-2">
              <div className="cursor-pointer">
                <a target="__blank" href="https://www.facebook.com/Onsportchannel/">
                  {faceBook}
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="https://www.youtube.com/channel/UCIWo7q6irZUBaoPOrlf5IVw" target="__blank">
                  {youtube}
                </a>
              </div>
              <a
                href="http://online.gov.vn/Home/WebDetails/88056"
                style={{ height: 38 }}
                target="__blank"
                className="md:hidden"
              >
                <Image
                  src="https://j03qukjhr2obj.vcdn.cloud/image-upload/cae45c4d-9603-4048-adf7-fce15291cb88.png"
                  width={100}
                  height={38}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 my-4"></div>
        <div className="flex flex-col-reverse md:grid grid-cols-3 text-sm  gap-4">
          <div className="col-span-2 text-gray-500 text-xs leading-4">
            <div className="font-semibold mb-2">Tổng Công ty Truyền hình Cáp Việt Nam.</div>
            <div>
              Địa chỉ: Số 3/84 Ngọc Khánh, quận Ba Đình, Hà Nội, Việt Nam
              <br />
              Điện thoại: 19001515 &nbsp;&nbsp;&nbsp;&nbsp; Email: info@vtvcab.vn
            </div>
            <div className={s.maxWidth}>
              Giấy chứng nhận đăng ký doanh nghiệp số 0105926285 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu
              ngày 26 tháng 6 năm 2012, thay đổi lần thứ 5 ngày 05 tháng 10 năm 2017.
            </div>

            <div className=" font-semibold mt-4">
              <Link href="/chinh-sach">
                <span className="cursor-pointer">Chính sách bảo mật</span>
              </Link>
            </div>
          </div>
          <div className="col-span-1 text-gray-500">
            <div className="mb-2">Tải ứng dụng tại:</div>
            <div className="md:flex">
              <div className="mr-6 hidden md:flex p-2 bg-white rounded">
                <Image
                  src="https://j03qukjhr2obj.vcdn.cloud/image-upload/c2daf902-f809-4970-a09c-37d1ca492408.png"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex md:block">
                <div className="mb-4 mr-6 md:mr-0">
                  <a
                    href="https://apps.apple.com/vn/app/on-sports/id1282845933#?platform=iphone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="https://j03qukjhr2obj.vcdn.cloud/image-upload/06572fd3-d278-4673-8377-909cf488cb08.png"
                      width={121}
                      height={35}
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
                      width={121}
                      height={35}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const faceBook = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
      fill="#303B50"
    />
    <path
      d="M12.9315 17.998V12.534H14.7749L15.0489 10.3947H12.9315V9.03199C12.9315 8.41466 13.1035 7.99199 13.9895 7.99199H15.1122V6.08466C14.5659 6.02612 14.0169 5.99785 13.4675 5.99999C11.8382 5.99999 10.7195 6.99466 10.7195 8.82066V10.3907H8.88818V12.53H10.7235V17.998H12.9315Z"
      fill="#0081F8"
    />
  </svg>
)

const youtube = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
      fill="#303B50"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0009 7.87464C17.5517 8.02577 17.9854 8.47108 18.1326 9.03659C18.4001 10.0615 18.4001 12.2 18.4001 12.2C18.4001 12.2 18.4001 14.3384 18.1326 15.3634C17.9854 15.9289 17.5517 16.3742 17.0009 16.5254C16.0028 16.8 12.0001 16.8 12.0001 16.8C12.0001 16.8 7.99741 16.8 6.99923 16.5254C6.44846 16.3742 6.01472 15.9289 5.86752 15.3634C5.6001 14.3384 5.6001 12.2 5.6001 12.2C5.6001 12.2 5.6001 10.0615 5.86752 9.03659C6.01472 8.47108 6.44846 8.02577 6.99923 7.87464C7.99741 7.59998 12.0001 7.59998 12.0001 7.59998C12.0001 7.59998 16.0028 7.59998 17.0009 7.87464ZM10.8001 10.3999V14.3999L14.0001 12.4L10.8001 10.3999Z"
      fill="#E10000"
    />
  </svg>
)
