import config from "lib/config"
let propsPageHome = false,
  propsPagePost = false,
  propsPageCategory = false,
  isUpdateHome = true,
  isUpdatePost = true,
  isUpdateCategory = true

export function getPropsHomePage() {
  // eslint-disable-next-line no-undef, no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    if (propsPageHome) {
      resolve(propsPageHome)
    }
    if (isUpdateHome) {
      let resData = {
        menus: [],
        screenblocks: []
      }
      try {
        const __menus = fetch(`${config.BASE_API_URL}/publish/categories/all/`)
        const __screenblocks = fetch(`${config.BASE_API_URL}/publish/screenblocks/dashboard/`)
        // eslint-disable-next-line no-undef
        const response = await Promise.all([__menus, __screenblocks])
        if (response[0].ok) {
          const _menus = await response[0].json()
          if (_menus.data?.length > 0) resData.menus = _menus.data
        }

        if (response[1].ok) {
          const _screenblocks = await response[1].json()
          if (_screenblocks?.data?.length) resData.screenblocks = _screenblocks.data
        }
        propsPageHome = resData
        isUpdateHome = false
        setTimeout(() => {
          isUpdateHome = true
        }, config.TIME_REQUEST_HOME_PAGE)
        resolve(resData)
      } catch (error) {
        console.log("getPropsHomePage", error)
        reject(resData)
      }
    }
  })
}

export function getPropsPost(slug) {
  // eslint-disable-next-line no-undef, no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    if (propsPagePost) {
      resolve(propsPagePost)
    }
    if (isUpdatePost) {
      let resData = {
        menus: [],
        articles: [],
        topNews: []
      }
      try {
        const __menus = fetch(`${config.BASE_API_URL}/publish/categories/all/`)
        const __articles = fetch(`${config.BASE_API_URL}/publish/articles/detail/relate-to-cate/${slug}/`)
        const __topNews = fetch(`${config.BASE_API_URL}/publish/articles/hot/tin-noi-bat/`)
        // eslint-disable-next-line no-undef
        const response = await Promise.all([__menus, __articles, __topNews])
        if (response[0].ok) {
          const _menus = await response[0].json()
          if (_menus.data?.length > 0) resData.menus = _menus.data
        }
        if (response[1].ok) {
          const _articles = await response[1]?.json()
          if (_articles?.data?.length) resData.articles = _articles.data
        }
        if (response[2].ok) {
          const _topNews = await response[2].json()
          if (_topNews?.data?.length) resData.topNews = _topNews.data
        }
        propsPagePost = resData
        isUpdatePost = false
        setTimeout(() => {
          isUpdatePost = true
        }, config.TIME_REQUEST_POST)
        resolve(resData)
      } catch (error) {
        console.log("getPropsPost", error)
        reject(resData)
      }
    }
  })
}

export async function getPropsCategory() {
  // eslint-disable-next-line no-undef, no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    if (propsPageCategory) {
      resolve(propsPageCategory)
    }
    if (isUpdateCategory) {
      let resData = {
        menus: [],
        topNews: []
      }
      try {
        const __menus = fetch(`${config.BASE_API_URL}/publish/categories/all/`)
        const __topNews = fetch(`${config.BASE_API_URL}/publish/articles/hot/tin-noi-bat/`)
        // eslint-disable-next-line no-undef
        const response = await Promise.all([__menus, __topNews])
        if (response[0].ok) {
          const _menus = await response[0].json()
          if (_menus.data?.length > 0) resData.menus = _menus.data
        }

        if (response[1].ok) {
          const _topNews = await response[1].json()
          if (_topNews?.data?.length) resData.topNews = _topNews.data
        }
        propsPageCategory = resData
        isUpdateCategory = false
        setTimeout(() => {
          isUpdateCategory = true
        }, config.TIME_REQUEST_CATEGORY)
        resolve(resData)
      } catch (error) {
        console.log("getPropsCategory", error)
        reject(resData)
      }
    }
  })
}
