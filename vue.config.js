module.exports = {
  transpileDependencies: [                                    // 需要babel编译的依赖包名
    'ios-photo-repair'
  ],
  css: {
    sourceMap: true,
    extract: false
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/uploader/' : '/',

}