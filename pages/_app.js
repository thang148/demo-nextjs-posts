import "assets/main.css"
import "assets/base.css"
import "assets/editor.css"
import "swiper/swiper-bundle.min.css"
import { Head } from "components/common"
import { useEffect } from "react"
import { StoreProvider } from "components/ui/Context"
import ModalLogin from "components/ModalLogin"
import NextNprogress from "nextjs-progressbar"
const Noop = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop
  useEffect(() => {
    const el = document.getElementsByClassName("loading")[0]
    if (el) el.classList.remove("loading")
  }, [])
  return (
    <>
      <NextNprogress
        color="#002e8a"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />
      <Head />
      <StoreProvider>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>

        <ModalLogin />
        <div id="fb-root"></div>
        <div id="modal-root"></div>
        <div id="toast-root"></div>
        <div id="box_out_line"></div>
      </StoreProvider>
    </>
  )
}

export default MyApp
