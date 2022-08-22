const Feed = require("feed").Feed
const axios = require("axios")
const fs = require("fs")

const feed = new Feed({
  title: "Feed Title",
  description: "This is my personal feed!",
  id: "http://example.com/",
  link: "http://example.com/",
  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: "http://example.com/image.png",
  favicon: "http://example.com/favicon.ico",
  copyright: "All rights reserved 2013, John Doe",
  updated: new Date(), // optional, default = today
  generator: "awesome", // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: "https://example.com/json",
    atom: "https://example.com/atom"
  },
  author: {
    name: "John Doe",
    email: "johndoe@example.com",
    link: "https://example.com/johndoe"
  }
})
let posts = []
async function gets() {
  try {
    const { data } = await axios.get(
      "https://main.api.onsports.vn/api/v1/publish/articles/national-category/anh/?page_num=1&page_size=10"
    )
    posts = data.data
    posts.forEach((post) => {
      feed.addItem({
        title: post.title,
        id: `https://onsport.vn/post/${post?.slug}`,
        link: `https://onsport.vn/post/${post?.slug}`,
        description: post.short_description,
        content: post.short_description,
        author: [
          {
            name: "Duy Khiết",
            email: "janedoe@example.com",
            link: "https://example.com/janedoe"
          },
          {
            name: "Joe Smith",
            email: "joesmith@example.com",
            link: "https://example.com/joesmith"
          }
        ],
        date: new Date(),
        image: post.base_url.origin_url
      })
    })
    feed.addCategory("quoc-te")

    const ssr2 = feed.rss2({ indent: true })
    fs.writeFileSync("feed.ssr", ssr2)
    console.log("sdasdassa")
  } catch (error) {
    console.log(error)
  }
}
gets()
