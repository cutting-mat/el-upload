module.exports = {
  transpileDependencies: [                                    // 需要babel编译的依赖包名
    'ios-photo-repair'
  ],
  css: {
    sourceMap: true                                         // 开启css map, 方便调试
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ?
    '/uploader/' : '/',
  css: {
    extract: false
  }
}