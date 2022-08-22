import Client from "../client/Client"
// import Auth from "../client/Auth"
const resource = "/api/v1"

// function signInBySocial(data) {
//   return clientAuth.post(`auth/social/`, data)
// }

const getCategories = () => {
  return Client().get(`${resource}/publish/categories/all/`, {
    params: {
      page_size: 50
    }
  })
}
const getScreenBlocks = () => {
  return Client().get(`${resource}/publish/screenblocks/dashboard/`)
}
const getArticleBySlug = (slug) => {
  return Client().get(`${resource}/publish/articles/${slug}/`)
}

const getScreenBlocksByCategory = (slug, params) => {
  return Client().get(`${resource}/publish/articles/national-category/${slug}/`, { params })
}

const getPundits = () => {
  return Client().get(`${resource}/publish/articles/identify-by-pundit/`)
}

const getPunditsBySlug = (slug) => {
  return Client().get(`${resource}/publish/articles/${slug}/`)
}
const getTop10Category = (slug) => {
  return Client().get(`${resource}/publish/articles/detail/relate-to-cate/${slug}/`)
}
const getListSubsCategory = (slug) => {
  return Client().get(`${resource}/publish/articles/national-category/${slug}/`)
}
const getEvents = () => {
  return Client().get(`${resource}/publish/events/`)
}
const getAllTags = (params) => {
  return Client().get(`${resource}/publish/articles-elasticsearch/`, { params })
}
const getAllPundits = () => {
  return Client().get(`${resource}/publish/pundit/pundit/`)
}
const getHotArticles = () => {
  return Client().get(`${resource}/publish/articles/hot/tin-noi-bat/`)
}

const userRepository = {
  // getMe,
  getCategories,
  getScreenBlocks,
  getScreenBlocksByCategory,
  getPundits,
  getPunditsBySlug,
  getArticleBySlug,
  getTop10Category,
  getListSubsCategory,
  getEvents,
  getAllTags,
  getAllPundits,
  getHotArticles
  // refreshToken,
  // forgotPassword,
  // setPassword,
  // signInBySocial
}
export default userRepository
