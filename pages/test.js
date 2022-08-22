let x = 250
const baseUrl = "https://main.api.onsports-dev.com"
const category = "viet-nam"
export default function Test() {
  function onClickHomePage() {
    for (let i = 0; i < x; i++) {
      fetch(`${baseUrl}/api/v1/publish/screenblocks/dashboard/`)
      fetch(`${baseUrl}/api/v1/publish/categories/all/`)
      fetch(`${baseUrl}/api/v1/publish/articles/identify-by-pundit/`)
    }
  }

  function onClickHomeCategory() {
    for (let i = 0; i < x; i++) {
      fetch(`${baseUrl}/api/v1/publish/articles/national-category/${category}/?page_num=1&page_size=10`)
      fetch(`${baseUrl}/api/v1/publish/categories/all/`)
      fetch(`${baseUrl}/api/v1/publish/articles/hot/tin-noi-bat/`)
    }
  }
  function onClickPost() {
    for (let i = 0; i < x; i++) {
      fetch(
        `${baseUrl}/api/v1/publish/articles/gdandtd-quy-do-man-united-lien-tiep-don-nhan-nhung-tin-vui-tren-thi-truong-chuyen-nhuong/`
      )
      fetch(`${baseUrl}/api/v1/publish/categories/all/`)
      fetch(
        `${baseUrl}/api/v1/publish/articles/detail/relate-to-cate/gdandtd-quy-do-man-united-lien-tiep-don-nhan-nhung-tin-vui-tren-thi-truong-chuyen-nhuong/`
      )
      fetch(`${baseUrl}/api/v1/publish/articles/hot/tin-noi-bat/`)
    }
  }

  return (
    <div className="flex gap-4">
      <button className="p-2 bg-yellow-600" onClick={onClickHomePage}>
        Call API HomePgae
      </button>
      <button className="p-2 bg-yellow-600" onClick={onClickHomeCategory}>
        Call API Category
      </button>
      <button className="p-2 bg-yellow-600" onClick={onClickPost}>
        Call API Post
      </button>
    </div>
  )
}
