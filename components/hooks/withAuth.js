import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { Layout } from "components/common"
import { useEffect } from "react"

const withAuth = (Component) => {
  const Auth = (props) => {
    const history = useRouter()
    const isCheck = Cookies.get("accessToken")
    useEffect(() => {
      if (!isCheck) {
        history.push("/login")
      }
    }, [])

    return (
      <>
        {isCheck && (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      </>
    )
  }

  return Auth
}

export default withAuth
