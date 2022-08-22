import React from "react"
import SwiperCore, { Navigation } from "swiper"
import { Swiper } from "swiper/react"

SwiperCore.use([Navigation])

const BoxSwiper = ({ children, ...rest }) => {
  return (
    <div className="__swiper">
      <Swiper
        // zoom={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        {...rest}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default BoxSwiper
