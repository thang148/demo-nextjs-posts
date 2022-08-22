import { useEffect } from "react"

export default function IndexPage({ name }) {
  useEffect(() => {
    async function func() {
      const res = await fetch(`http://localhost:4000`)
      const xx = await res.json()
      console.log("res", xx)
    }
    func()
  }, [])
  return <div>name: {name}</div>
}

export async function getStaticProps() {
  let name = ""

  try {
    const res = await fetch(`http://localhost:4000`)
    const xx = await res.json()
    name = xx.data
  } catch (error) {
    console.log("error", error)
  }

  if (!name) {
    return {
      notFound: true
    }
  }

  return { props: { name }, revalidate: 30 }
}
