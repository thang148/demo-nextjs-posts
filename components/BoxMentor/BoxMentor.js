import { ItemMentor } from "./Comp"
import { BoxSwiper } from "components/ui"
import { TitleByHome } from "components/ui"

const params = {
  slidesPerView: 1.5,
  spaceBetween: 8
}

const breakpoints = {
  "640": {
    slidesPerView: 2.25,
    spaceBetween: 8
  },
  "768": {
    slidesPerView: 2.75,
    spaceBetween: 16
  },
  "1024": {
    slidesPerView: 3.25,
    spaceBetween: 16
  }
}

export default function BoxMentor({ pundits }) {
  return (
    <article className="mt-4">
      <TitleByHome title="GÓC CHUYÊN GIA" href="pundit" />

      <BoxSwiper key="swiper_mentor" breakpoints={breakpoints} {...params}>
        {pundits?.results?.length &&
          pundits.results.map((item) => {
            return (
              <div key={item.id}>
                <ItemMentor {...item} />
              </div>
            )
          })}
      </BoxSwiper>
    </article>
  )
}
