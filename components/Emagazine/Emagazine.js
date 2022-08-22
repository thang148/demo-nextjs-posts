// import Image from "next/image"
import { BoxSwiper } from "components/ui"
import { SwiperSlide } from "swiper/react"
import Card from "components/Card"
import Link from "next/link"

const params = {
  slidesPerView: 1.65,
  spaceBetween: 8,
  navigation: true
}

const breakpoints = {
  "640": {
    slidesPerView: 2.25,
    spaceBetween: 8
  },
  "768": {
    slidesPerView: 2.5,
    spaceBetween: 16
  },
  "1024": {
    slidesPerView: 3.25,
    spaceBetween: 16
  }
}

export default function Emagazine({ articles, slug }) {
  return (
    <div className="bg-secondary p-4 sm:p-8 space-box rounded-lg">
      <div className="flex justify-between items-center mb-2 ">
        <Link href={slug}>
          <div className="text-white __title">EMAGAZINE</div>
        </Link>
      </div>
      <div>
        <BoxSwiper className="swiper__onnews" key="swiper_emagazine" breakpoints={breakpoints} {...params}>
          {articles.map((article, k) => {
            return (
              <SwiperSlide key={k}>
                <Card type="emagazine" article={article} isBoxEmagazine={true} />
              </SwiperSlide>
            )
          })}
        </BoxSwiper>
      </div>
    </div>
  )
}
