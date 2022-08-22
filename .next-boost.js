// An example with custom cache adapter
// const Adapter = require('@next-boost/hybrid-disk-cache').Adapter
/** @type {import('@next-boost/next-boost/dist/types').HandlerConfig} */

module.exports = {
  rules: [
    {
      regex: "/_next.*",
      ttl: 7200,
    },
    {
      regex: "/post.*",
      ttl: 30,
    },
    {
      regex: "/video.*",
      ttl: 30,
    },
    {
      regex: "/tag.*",
      ttl: 30,
    },
    {
      regex: "/category.*",
      ttl: 30,
    },
    {
      regex: "/detail-livescore.*",
      ttl: 30,
    },
    {
      regex: "/",
      ttl: 30,
    },
    {
      regex: "/404",
      ttl: 7200,
    },
    {
      regex: "/android",
      ttl: 7200,
    },
    {
      regex: "/ios",
      ttl: 7200,
    },
    {
      regex: "/detail",
      ttl: 30,
    },
    {
      regex: "/chinh-sach",
      ttl: 7200,
    },
    {
      regex: "/chinh-sach-app",
      ttl: 7200,
    },
    {
      regex: "/dieu-khoan-app",
      ttl: 7200,
    },
    {
      regex: "/identify.*",
      ttl: 30,
    },
    {
      regex: "/profile",
      ttl: 60,
    },
    {
      regex: "/livescore",
      ttl: 30,
    },
    {
      regex: "/.*",
      ttl: 30,
    },
    {
      regex: '.*',
      ttl: 30,
    },
  ],
  paramFilter: (p) => p === 'fbclid' || p.startsWith('utm_') ? false : true,
  // cacheAdapter: new Adapter({
  //   path: '/cache/hdc',
  //   ttl: 60,
  //   tbd: 180,
  // }),
}
