import { api } from "apiServer"
import { Divider } from "components/ui"
import { Layout } from "components/common"
import Card from "components/Card"

function Pages({ articles }) {
  const list = [...articles]
  const firstElement = list.shift()

  return (
    <section className="max_layout mb-8">
      <div className="items-center mb-2 sm:mb-4">
        <div className="__title flex items-center">
          <Divider />
          <span>GÓC CHUYÊN GIA</span>
        </div>
      </div>
      <Card article={firstElement} isFull={true} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {list.length > 0 &&
          list.map((article) => {
            return <Card article={article} isFull={true} key={article.id} />
          })}
      </div>
    </section>
  )
}

export default Pages
Pages.Layout = Layout

export async function getServerSideProps() {
  let articles = [],
    menus = []
  try {
    const { data } = await api.getCategories()
    menus = data
  } catch (error) {
    console.log(error)
  }
  try {
    const { results } = await api.getAllPundits()
    articles = results
  } catch (error) {
    console.log("getScreenBlocksByCategory")
  }

  if (!articles.length) {
    return {
      notFound: true
    }
  }
  return { props: { articles, menus } }
}
