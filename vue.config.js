module.exports = {
  css: {
    sourceMap: true,
    extract: false
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/uploader/' : '/',

}