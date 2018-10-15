const path = require('path')

module.exports = (options, ctx) => ({
  alias: {
    '@docs': path.resolve(__dirname, '../')
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    // サイドバーのすべての見出しが出ている状態になる
    // displayAllHeaders: true,
    sidebar: [
      '/',
      '/guide/',
    ]
  }
})
