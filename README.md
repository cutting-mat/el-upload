# @cutting-mat/el-upload

[![npm](https://img.shields.io/npm/v/@cutting-mat/el-upload.svg)](https://www.npmjs.com/package/@cutting-mat/el-upload) [![license](https://img.shields.io/github/license/cutting-mat/el-upload.svg)]()

## Feature

- [x] 支持全局配置
- [x] 支持 v-model 受控模式
- [x] 图片上传前压缩
- [x] 图片上传前剪裁
- [x] IOS 拍照方向自动校正(需开启压缩或剪裁)
- [x] 自定义文件类型集合
- [x] 上传文件大小统一限制
- [x] 上传文件名长度统一限制

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
 * 支持原el-upload的所有配置，额外支持以下配置或默认值
 * (el-upload文档: https://element.eleme.cn/#/zh-CN/component/upload)
 * 
 * accept[String]:              允许上传的文件类型, 额外支持自定义文件类型（见下方 quickType ）, default: "*"
 * showFileList[Boolean]:       展示上传文件列表, 同el-upload, default: false
 * v-model / fileList[Array]:   已上传文件数据, 同el-upload, default: []
 * onExceed[Function]:          文件超出个数限制时的钩子, 同el-upload, default: (files, fileList) => this.$message.warning('文件超出上传数量限制');
 * imgCompress[Boolean]:        开启图片上传前压缩, default: true
 * imgCompressOption[Object]:   图片压缩尺寸配置, default: 
    {
        width: 1000,            // 最大宽度
        height: 1000,           // 最大高度
    }
 * imgCrop[Boolean]:            开启图片上传前剪裁, default: false
 * imgCropOption[Object]:       图片剪裁配置, default: 
    {
        ratio: 1,               // 剪裁框宽高比
        minWidth: 0,            // 最小输出宽度
        minHeight: 0,           // 最小输出高度
        maxWidth: 1000,         // 最大输出宽度
        maxHeight: 1000,        // 最大输出高度
    }
 * fileSizeLimit[Number]:       允许上传文件最大尺寸, 单位 B , default: 100 * 1024 * 1024 (100M)
 * fileNameLengthLimit[Number]: 允许上传文件名最大字符长度, default: 500
 * uploadRequest[Function]:     上传处理方法, default: 无
 * responseTransfer[Function]:  接口返回数据 与 fileList 数据格式转换函数, 同el-upload, default: (response) => return response.data;
 * quickType[Object]:           自定义文件类型集合, 如： {"t-word": [".docx", ".doc"]}, default: 
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
