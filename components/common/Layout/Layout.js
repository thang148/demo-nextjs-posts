import { Navbar, Footer } from "components/common"
import { ScrollToTop } from "components/ui"
import BoxEvent from "components/BoxEvent"
import { Fragment } from "react"
import { PageSEO } from "components/SEO"

export default function Layout({ children, pageProps }) {
  const menus = pageProps?.menus || []
  // console.log({ pageProps })
  return (
    <Fragment>
      <PageSEO />
      <div className="hidden lg:block">
        <BoxEvent />
      </div>
      <Navbar menus={menus} />
      <main>
        <div className="loading"></div>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </Fragment>
  )
}
