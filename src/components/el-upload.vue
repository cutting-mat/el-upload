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
import data2blob from "../assets/data2blob";

// 默认配置
const FileTypeMap = {
  "t-image": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tif", ".webp"],
  "t-video": [".mp4", ".rmvb", ".avi", ".mov", "3.gp"],
  "t-word": [".docx", ".doc"],
  "t-excel": [".xlsx", ".xls"],
  "t-ppt": [".ppt", ".pptx"],
  "t-document": [".pdf", "t-word", "t-excel", "t-ppt"],
  "t-zip": [".zip", ".rar"],
};
/**
 * 提取文件名中的扩展名
 * @param filename[String] 要提取扩展名的字符串
 * return[String] 转小写后的扩展名字符串
 */
export const getSuffix = (filename) => {
  let pos = filename.lastIndexOf(".");
  let suffix = "";
  if (pos != -1) {
    suffix = filename.substring(pos + 1);
  }
  return suffix.toLowerCase();
};

/**
 * 通过文件类型获取扩展名列表
 * @param type[String] FileTypeMap 中约定的类型名
 * return[Array] 目标类型的扩展名数组
 * */
export const getExtByType = (type) => {
  const quickType = Object.assign({}, FileTypeMap, Vue.$uploaderOption.quickType || {})
  if (type && Array.isArray(quickType[type])) {
    let classList = [];
    let extList = [];
    quickType[type].forEach((e) => {
      if (e.indexOf("t-") === 0) {
        classList.push(e);
      } else {
        extList.push(e);
      }
    });
    if (classList.length) {
      classList.forEach((classType) => {
        extList = extList.concat(getExtByType(classType));
      });
    }
    return extList;
  } else if (type && type.split) {
    return [type.toLowerCase()];
  }
};
/**
 * 预先从全局用户配置中获取props默认值
 * @param key[String] prop的key
 * @param defaultValue[Any] 组件内置默认值
 * return[Any] props.key的最终默认值
*/
const getDefaultValue = function (key, defaultValue) {
  const globalOption = Vue.$uploaderOption;
  if (Object.keys(globalOption).indexOf(key) !== -1) {
    return globalOption[key];
  }
  return defaultValue;
};

export default {
  name: "ElUploadPlugin",
  props: {
    multiple: {
      type: Boolean,
      required: false,
      default() {
        return getDefaultValue("multiple", false);
      },
    },
    data: {
      type: Object,
      required: false,
      default() {
        return getDefaultValue("data", {});
      },
    },
    name: {
      type: String,
      required: false,
      default() {
        return getDefaultValue("name", "file");
      },
    },
    showFileList: {
      type: Boolean,
      required: false,
      default() {
        return getDefaultValue("showFileList", false);
      },
    },
    accept: {
      type: String,
      required: false,
      default() {
        return getDefaultValue("accept", "*");
      },
    },
    listType: {
      type: String,
      required: false,
      default() {
        return getDefaultValue("listType", "text");
      },
    },
    fileList: {
      type: Array,
      required: false,
      default() {
        return getDefaultValue("fileList", []);
      },
    },
    disabled: {
      type: Boolean,
      required: false,
      default() {
        return getDefaultValue("disabled", false);
      },
    },
    limit: {
      type: Number,
      required: false,
      default() {
        return getDefaultValue("limit", 9);
      },
    },
    beforeUpload: {
      type: Function,
      required: false,
      default(file) {
        if (
          Vue.$uploaderOption &&
          typeof Vue.$uploaderOption.beforeUpload === "function"
        ) {
          return Vue.$uploaderOption.beforeUpload(file);
        } else {
          return true;
        }
      },
    },
    triggerId: {
      type: String,
      required: false,
      default: "upload_image_trigger" + parseInt(Math.random() * 1e8),
    },
    imgCompress: {
      type: Boolean,
      required: false,
      default() {
        return getDefaultValue("imgCompress", true);
      },
    },
    imgCompressOption: {
      type: Object,
      required: false,
      default() {
        return getDefaultValue("imgCompressOption", {
          width: 1000,
          height: 1000,
        });
      },
    },
    limitSize: {
      type: Number,
      required: false,
      default() {
        return getDefaultValue("limitSize", 100 * 1024 * 1024);
      },
    },
    uploadRequest: {
      type: Function,
      required: false,
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
    ready() {
      return !!Vue.$uploaderOption;
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
      if (file.name.length > 500) {
        this.$message.warning("文件名不得超过500字符");
        return false;
      }
      // 扩展校验方法
      return this.beforeUpload(file);
    },
    customUpload: async function (params) {
      if (!Vue.$uploaderOption && !Vue.$uploaderOption.uploadRequest && !this.uploadRequest) {
        return console.warn("Uploader: The required configuration [uploadRequest] is missing!");
      }

      const theUploadRequest = this.uploadRequest || Vue.$uploaderOption.uploadRequest;
      if(!typeof(theUploadRequest)==='function'){
        return console.warn("Uploader: [uploadRequest] must be a Function!");
      }

      let formData = new FormData();

      if (this.imgCompress && params.file.type.indexOf("image/") === 0) {
        // 图片压缩
        const imgBlob = await fixImgFile(
          params.file,
          this.imgCompressOption
        ).then((base64) => {
          return data2blob(base64, "image/jpeg");
        });
        formData.append(this.name, imgBlob, params.file.name + ".jpg");
      } else {
        // 非图片文件
        formData.append(this.name, params.file);
      }
      // 扩展数据
      Object.keys(this.data).forEach((key) => {
        formData.append(key, this.data[key]);
      });
      // 上传
      Vue.$uploaderOption
        .uploadRequest(formData)
        .then((res) => {
          this.handleSuccess(res.data);
        })
        .catch((err) => {
          this.handleError(err);
        });
    },
  },
};
</script>

<style scoped>
</style>

