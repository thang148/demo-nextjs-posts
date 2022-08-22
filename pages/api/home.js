// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const IoRedis = require("ioredis")
// const redis = new IoRedis("redis://:OGMxYjY5MWQ0NDJhMGE3ZDU4ZTYzZWI3@10.0.1.56:6379/10")
import config from "lib/config"
let propsPage = false

export default async (req, res) => {
  try {
    if (propsPage) {
      res.status(200).json(propsPage)
      return
    }
    let menus = [],
      screenblocks = []

    const __menus = fetch(`${config.BASE_API_URL}/publish/categories/all/`)
    const __screenblocks = fetch(`${config.BASE_API_URL}/publish/screenblocks/dashboard/`)
    // eslint-disable-next-line no-undef
    const response = await Promise.all([__menus, __screenblocks])

    const _menus = await response[0].json()
    if (_menus.data?.length > 0) menus = _menus.data

    const _screenblocks = await response[1].json()
    if (_screenblocks?.data?.length) screenblocks = _screenblocks.data

    const resData = {
      screenblocks,
      menus
    }
    propsPage = resData
    setTimeout(() => {
      propsPage = false
    }, config.TIME_REQUEST_HOME_PAGE)
    res.status(200).json(resData)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}
