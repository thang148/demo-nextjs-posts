import { useState, useRef, useEffect } from "react"

export default function SwiperCustom({ children, isLive, total }) {
  const [step, setStep] = useState(0)
  // const [total, setTotal] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(5)
  const [widthNext, setWidthNext] = useState(1280)
  const __time = useRef()
  const __slider = useRef()

  function onNext() {
    setStep((c) => c + 1)
  }

  function onPrev() {
    setStep(step > 0 ? step - 1 : 0)
  }

  useEffect(() => {
    const onChangeSize = () => {
      if (__time.current) {
        clearTimeout(__time.current)
        __time.current = null
      }
      __time.current = setTimeout(() => {
        let __count = 4
        if (isLive) {
          __count = 2
          if (window.innerWidth > 960) {
            __count = 3
          }
          if (window.innerWidth > 1024) {
            __count = 3
          }
          if (window.innerWidth > 1280) {
            __count = 4
          }
          if (window.innerWidth > 1800) {
            __count = 5
          }
        } else {
          if (window.innerWidth > 1024) {
            __count = 4
          }
          if (window.innerWidth > 1280) {
            __count = 5
          }
          if (window.innerWidth > 1520) {
            __count = 6
          }
        }
        const __w = (window.innerWidth - 96 - __count * 16) / __count
        const listChildren = __slider.current.children
        for (let i = 0; i < __slider.current.childElementCount; i++) {
          listChildren[i].style.width = __w + "px"
        }
        setWidthNext((__w + 16) * __count)
        setSlidesPerView(__count)
      }, 300)
    }
    if (__slider.current) {
      // setTotal(__slider.current.childElementCount)
      // console.log("__slider.current.childElementCount", __slider.current.childElementCount)
      onChangeSize()
      window.addEventListener("resize", onChangeSize)
    }
    return () => {
      window.removeEventListener("resize", onChangeSize)
    }
  }, [])
  // console.log({ total })
  // console.log({ slidesPerView })
  // console.log({ slidesPerView })
  return (
    <div className="relative wapper__swiper__custom">
      {step !== 0 && (
        <button onClick={onPrev} className="prev__swiper__custom action__swiper__custom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <div
        ref={__slider}
        className="swiper__custom space-x-4"
        style={{ transform: `translateX(${step * widthNext * -1}px)` }}
      >
        {children}
      </div>

      {(step + 1) * slidesPerView < total && (
        <button onClick={onNext} className="next__swiper__custom action__swiper__custom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}
