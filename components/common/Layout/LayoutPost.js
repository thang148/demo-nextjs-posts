import { Navbar, Footer } from "components/common"
import { ScrollToTop } from "components/ui"
import BoxEvent from "components/BoxEvent"
import { Fragment } from "react"
import { BlogSEO } from "components/SEO"

export default function LayoutPost({ children, pageProps }) {
  const menus = pageProps?.menus || []

  return (
    <Fragment>
      {pageProps?.article?.id && <BlogSEO article={pageProps?.article} />}
      <div className="hidden lg:block">
        <BoxEvent />
      </div>
      <Navbar menus={pageProps?.menus || []} />
      <main>
        <div className="loading"></div>
        {children}
      </main>
      <Footer menus={menus} />
      <ScrollToTop />
    </Fragment>
  )
}
