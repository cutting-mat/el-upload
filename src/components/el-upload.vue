<template>
  <el-upload
    action=""
    :show-file-list="showFileList"
    :accept="actualAccept"
    :data="data"
    :list-type="listType"
    :file-list="fileList"
    :before-upload="handleBeforeUpload"
    :http-request="customUpload"
    :disabled="disabled"
    :multiple="multiple"
    :limit="limit"
    :on-exceed="handleExceed"
  >
    <div :id="triggerId">
      <slot>
        <el-button size="small" type="primary" :disabled="disabled">
          点击上传
        </el-button>
      </slot>
    </div>
  </el-upload>
</template>

<script>
// TODO 图片剪裁 https://github.com/dai-siki/vue-image-crop-upload/blob/master/upload-2.vue

import Vue from "vue";
import { fixImgFile } from "ios-photo-repair";

/**
 * 提取文件名中的扩展名
 * @param filename[String] 要提取扩展名的字符串
 * @return 转小写后的扩展名字符串
*/
export const getSuffix = (filename) => {
    let pos = filename.lastIndexOf('.')
    let suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos + 1)
    }
    return suffix.toLowerCase();
}

/**
 * 通过文件类型获取扩展名列表
 * @param type[String] FileTypeMap 中约定的类型名
 * @return 目标类型的扩展名数组
 * */
const FileTypeMap = Vue.uploaderDefault.FileTypeMap || {};

export const getExtByType = (type) => {
    if (type && Array.isArray(FileTypeMap[type])) {
        let classList = [];
        let extList = [];
        FileTypeMap[type].forEach(e => {
            if (e.indexOf("t-") === 0) {
                classList.push(e)
            } else {
                extList.push(e)
            }
        })
        if (classList.length) {
            classList.forEach(classType => {
                extList = extList.concat(getExtByType(classType))
            })
        }
        return extList
    } else if(type && type.split){
        return [type.toLowerCase()]
    }
}


export default {
  props: {
    multiple: {
      type: Boolean,
      required: false,
      default: Vue.uploaderDefault.multiple
    },
    data: {
      type: Object,
      required: false,
      default: Vue.uploaderDefault.data
    },
    name: {
      type: String,
      required: false,
      default: Vue.uploaderDefault.name
    },
    showFileList: {
      type: Boolean,
      required: false,
      default: Vue.uploaderDefault.showFileList
    },
    accept: {
      type: String,
      required: false,
      default: Vue.uploaderDefault.accept
    },
    listType: {
      type: String,
      required: false,
      default: Vue.uploaderDefault.listType
    },
    fileList: {
      type: Array,
      required: false,
      default: Vue.uploaderDefault.fileList
    },
    disabled: {
      type: Boolean,
      required: false,
      default: Vue.uploaderDefault.disabled
    },
    limit: {
      type: Number,
      required: false,
      default: Vue.uploaderDefault.limit
    },
    beforeUpload: {
      type: Function,
      required: false,
      default: Vue.uploaderDefault.beforeUpload
    },
    triggerId: {
      type: String,
      required: false,
      default: "upload_image_trigger" + parseInt(Math.random() * 1e8),
    },
    imgCompress: {
      type: Boolean,
      required: false,
      default: Vue.uploaderDefault.imgCompress
    },
    imgCompressOption: {
      type: Object,
      required: false,
      default: Vue.uploaderDefault.imgCompressOption
    },
    uploadFunc: {
      type: Function,
      required: false,
      default: Vue.uploaderDefault.uploadFunc
    },
    uploadBase64Func: {
      type: Function,
      required: false,
      default: Vue.uploaderDefault.uploadBase64Func
    },
    limitSize: {
      type: Number,
      required: false,
      default: Vue.uploaderDefault.limitSize
    }
  },
  computed: {
    actualAccept() {
      if (this.accept.indexOf("t-") !== -1) {
        const typeArray = this.accept.split(",");
        let result = [];
        typeArray.forEach((type) => {
          result = result.concat(getExtByType(type));
        });
        return result.join(",");
      } else {
        return this.accept;
      }
    },
  },
  methods: {
    handleExceed() {
      this.$emit("exceed");
    },
    handleSuccess: function (res) {
      this.$emit("success", res.data);
    },
    handleError: function (err) {
      this.$emit("error", err);
    },
    handleBeforeUpload: function (file) {
      // 格式检查
      const fileExt = getSuffix(file.name);
      const extWhite = this.actualAccept.replace(/\./g, "").split(",");
      if (extWhite.findIndex((ext) => ext === "*" || ext === fileExt) === -1) {
        this.$message.warning("文件格式错误");
        return false;
      }
      // 尺寸校验
      if (file.size > this.limitSize) {
        this.$message.warning("文件超出最大限制");
        return false;
      }
      // 文件名不得超过500字符
      if(file.name.length > 500){
        this.$message.warning("文件名不得超过500字符");
        return false;
      }
      // 扩展校验方法
      return this.beforeUpload(file);
    },
    customUpload: function (params) {
      if (this.imgCompress && params.file.type.indexOf("image/") === 0) {
        // 图片自动压缩
        fixImgFile(params.file, this.imgCompressOption).then((base64) => {
          const name = params.file.name.replace(/\.[^.]+\w+$/, ".png");
          if (base64 && name) {
            this.uploadBase64Func({
              base64,
              name,
            })
              .then((res) => {
                this.handleSuccess(res.data);
              })
              .catch((err) => {
                this.handleError(err);
              });
          } else {
            console.warn("图片压缩error", base64, name);
          }
        });
      } else {
        // 非图片上传
        let formData = new FormData();
        formData.append(this.name, params.file);
        // 扩展数据
        Object.keys(this.data).forEach((key) => {
          formData.append(key, this.data[key]);
        });
        this.uploadFunc(formData)
          .then((res) => {
            this.handleSuccess(res.data);
          })
          .catch((err) => {
            this.handleError(err);
          });
      }
    },
  },
};
</script>

<style scoped>
</style>

