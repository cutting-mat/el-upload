# @cutting-mat/el-upload

[![npm](https://img.shields.io/npm/v/@cutting-mat/el-upload.svg)](https://www.npmjs.com/package/@cutting-mat/el-upload) [![license](https://img.shields.io/github/license/cutting-mat/el-upload.svg)]()

## Feature

- [x] 支持全局配置
- [x] 支持 v-model 受控模式
- [x] 图片上传前压缩
- [ ] 图片上传前剪裁
- [x] IOS 拍照方向自动校正(需开启压缩)
- [x] 自定义文件类型
- [x] 上传文件大小限制
- [x] 上传文件名长度限制

## Quick Start

1. NPM 安装

```bash
npm i @cutting-mat/el-upload -S
```

2. 引入项目并配置

```js
import elUpload from "@cutting-mat/el-upload";
import uploadConfig from "@/upload.config"
Vue.use(elUpload, uploadConfig);

```

3. 组件内使用

```html
<el-upload-plugin>
点击上传
</el-upload-plugin>
```

## Config

``` js
/**
 * ElUploadPlugin 配置文件 
 * (el-upload文档: https://element.eleme.cn/#/zh-CN/component/upload)
 * 
 * multiple[Boolean]:           支持文件多选, 同el-upload, default: false
 * data[Object]:                随上传附带数据, 同el-upload, default: {}
 * name[String]:                上传文件的表单名, 同el-upload, default: 'file'
 * accept[String]:              允许上传的文件类型, 额外支持自定义文件类型（见下方 quickType ）, default: "*"
 * showFileList[Boolean]:       展示上传文件列表, 同el-upload, default: false
 * listType[String]:            列表类型, 同el-upload, default: "text"
 * v-model / fileList[Array]:   已上传文件数据, 同el-upload, default: []
 * disabled[Boolean]:           禁用上传功能, 同el-upload, default: false
 * limit[Number]:               最大可上传文件数, 同el-upload, default: 9
 * beforeUpload[Function]:      上传前校验方法, 同el-upload, default: (file) => true
 * onExceed[Function]:          文件超出个数限制时的钩子, 同el-upload, default: (files, fileList) => this.$message.warning('文件超出上传数量限制');
 * imgCompress[Boolean]:        开启图片上传前压缩, default: true
 * imgCompressOption[Object]:   图片压缩尺寸配置, default: 
    {
        width: 1000,
        height: 1000,
    }
 * fileSizeLimit[Number]:       允许上传文件最大尺寸, 单位 B , default: 100 * 1024 * 1024 (100M)
 * fileNameLengthLimit[Number]: 允许上传文件名最大字符长度, default: 500
 * uploadRequest[Function]:     上传处理方法, default: 无
 * quickType[Object]:           自定义文件类型, 如： {"t-word": [".docx", ".doc"]}, default: 
    {
        "t-image": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tif", ".webp"],
        "t-video": [".mp4", ".rmvb", ".avi", ".mov", "3.gp"],
        "t-word": [".docx", ".doc"],
        "t-excel": [".xlsx", ".xls"],
        "t-ppt": [".ppt", ".pptx"],
        "t-document": [".pdf", "t-word", "t-excel", "t-ppt"],
        "t-zip": [".zip", ".rar"],
    }

 * */

```
