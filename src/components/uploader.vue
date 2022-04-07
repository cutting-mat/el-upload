<template>
  <el-upload
    ref="myupload"
    v-bind="$attrs"
    action
    :fileList="fileListFinnal"
    :accept="acceptFinnal"
    :before-upload="handleBeforeUpload"
    :on-exceed="handleonExceed"
    :on-change="handleChange"
    :on-remove="handleRemove"
    :http-request="customUpload"
  >
    <div :id="triggerId">
      <slot name="default">
        <el-button>点击上传</el-button>
      </slot>
      <slot name="trigger"></slot>
      <slot name="tip"></slot>
    </div>
    <!-- edit dialog -->
    <el-dialog
      :visible="dialogVisible"
      append-to-body
      title="图像剪裁"
      top="10vh"
      class="cropper"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @close="cropperMethod('close')"
    >
      <div class="cropper_main">
        <img src ref="CropperImg" />
      </div>
      <div class="cropper_actions flex-row align-center">
        <div class="flex-1">
          <el-button-group>
            <el-button size="small" title="左旋" @click="cropperMethod('rotateLeft')">
              <i class="el-icon-refresh-left"></i>
              左旋
            </el-button>
            <el-button size="small" title="右旋" @click="cropperMethod('rotateRight')">
              <i class="el-icon-refresh-right"></i>
              右旋
            </el-button>
          </el-button-group>
          <el-button-group>
            <el-button size="small" title="水平镜像" @click="cropperMethod('scaleX')">
              <i class="el-icon-sort" style="transform: rotateZ(90deg)"></i>
              水平镜像
            </el-button>
            <el-button size="small" title="垂直镜像" @click="cropperMethod('scaleY')">
              <i class="el-icon-sort"></i>
              垂直镜像
            </el-button>
          </el-button-group>
          <el-button-group>
            <el-button size="small" title="重置" @click="cropperMethod('reset')">
              <i class="el-icon-refresh"></i>
              重置
            </el-button>
          </el-button-group>
        </div>

        <el-button size="small" type="primary" plain @click="cropperMethod('save')">
          <i class="el-icon-crop"></i>
          确定
        </el-button>
      </div>
    </el-dialog>
  </el-upload>
</template>

<script>
import Vue from "vue";

import { fixImgFile } from "ios-photo-repair";

import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

let cropperInstance;

// 调试开关
const DEBUG = process.env.NODE_ENV === "development";

// 图片压缩成jpg格式
const fixJpgFileName = function (fileName) {
  if (fileName.match(/\.jpg|\.jpeg$/)) {
    return fileName;
  }
  return fileName + ".jpg";
};

// 文件类型集合
const FileTypeMap = {
  "t-image": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tif", ".webp"],
  "t-video": [".mp4", ".rmvb", ".avi", ".mov", ".3gp", ".webm"],
  "t-audio": [".wav", ".mp3", ".ogg", ".acc"],
  "t-word": [".docx", ".doc"],
  "t-excel": [".xlsx", ".xls"],
  "t-ppt": [".ppt", ".pptx"],
  "t-document": [".pdf", "t-word", "t-excel", "t-ppt"],
  "t-zip": [".zip", ".rar"],
};

/**
 * 通过文件类型获取扩展名列表
 * @param type[String] FileTypeMap 中约定的类型名
 * return[Array] 目标类型的扩展名数组
 * */
export const getExtByType = (type) => {
  const quickType = Object.assign(
    {},
    FileTypeMap,
    Vue.$UploaderOption.quickType || {}
  );
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
  const globalOption = Vue.$UploaderOption;
  if (Object.keys(globalOption).indexOf(key) !== -1) {
    return globalOption[key];
  }
  return defaultValue;
};

export default {
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Array,
      required: false,
      default() {
        return getDefaultValue("value", []);
      },
    },
    triggerId: {
      // 配合实现富文本插件上传功能
      type: String,
      required: false,
      default: "upload_image_trigger" + parseInt(Math.random() * 1e8),
    },
    limitSize: {
      // 文件尺寸限制
      type: Number,
      required: false,
      default() {
        return getDefaultValue("limitSize", 100 * 1024 * 1024);
      },
    },
    imgCompress: {
      // 开启图片压缩
      type: Boolean,
      required: false,
      default() {
        return getDefaultValue("imgCompress", true);
      },
    },
    imgCompressOption: {
      // 图片压缩配置
      type: Object,
      required: false,
      default() {
        return getDefaultValue("imgCompressOption", {
          maxWidth: 1000,
          maxHeight: 1000,
        });
      },
    },
    imgCrop: {
      // 开启图片剪裁
      type: Boolean,
      required: false,
      default() {
        return getDefaultValue("imgCrop", false);
      },
    },
    imgCropOption: {
      // 图片剪裁配置
      type: Object,
      required: false,
      default() {
        return getDefaultValue("imgCropOption", {
          ratio: 1,
          minWidth: 0,
          minHeight: 0,
          maxWidth: 1000,
          maxHeight: 1000,
        });
      },
    },
    uploadMethod: {
      // 自定义上传方法，参数（file/blob, fileName）
      type: Function,
      required: false,
    },
    responseTransfer: {
      // 接口返回数据 与 fileList 数据格式转换函数
      type: Function,
      required: false,
      default(response) {
        if (
          Vue.$UploaderOption &&
          typeof Vue.$UploaderOption.responseTransfer === "function"
        ) {
          return Vue.$UploaderOption.responseTransfer(response);
        } else {
          return response;
        }
      },
    },
  },
  data() {
    return {
      dialogVisible: false,
      cropResult: null,
      fileListFinnal: [],
    };
  },
  computed: {
    acceptFinnal() {
      if (this.$attrs.accept && this.$attrs.accept.indexOf("t-") !== -1) {
        const typeArray = this.$attrs.accept.split(",");
        let result = [];
        typeArray.forEach((type) => {
          result = result.concat(getExtByType(type));
        });
        return result.join(",");
      } else {
        return this.$attrs.accept || "*";
      }
    },
  },
  watch: {
    value: {
      handler() {
        this.fileListFinnal = this.$attrs.fileList || this.value || [];
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleBeforeUpload: function (file) {
      // 尺寸校验
      if (file.size > this.limitSize) {
        Vue.prototype.$message.warning("文件大小超出限制");
        return false;
      }

      if (typeof this.$attrs["before-upload"] === "function") {
        return this.$attrs["before-upload"](file);
      } else if (
        Vue.$UploaderOption &&
        typeof Vue.$UploaderOption.beforeUpload === "function"
      ) {
        return Vue.$UploaderOption.beforeUpload(file);
      } else {
        return true;
      }
    },
    handleonExceed: function (file, fileList) {
      if (typeof this.$attrs["on-exceed"] === "function") {
        this.$attrs["on-exceed"](file, fileList);
      } else if (
        Vue.$UploaderOption &&
        typeof Vue.$UploaderOption.onExceed === "function"
      ) {
        Vue.$UploaderOption.onExceed(file, fileList);
      }
    },
    handleChange: function (file, fileList) {
      const doneFiles = fileList.filter((e) => e.status === "success");
      if (doneFiles.length === fileList.length) {
        this.$emit(
          "change",
          doneFiles.map((e) => {
            let data = e.response ? this.responseTransfer(e.response) : e;
            // 扩展字段
            data.uid = e.uid;
            data.status = e.status;
            return data;
          })
        );
      }

      if (typeof this.$refs["on-change"] === "function") {
        this.$refs["on-change"](file, fileList);
      }
    },
    handleRemove: function (file, fileList) {
      this.$emit(
        "change",
        fileList.map((e) => {
          let data = e.response ? this.responseTransfer(e.response) : e;
          data.uid = e.uid;
          return data;
        })
      );

      if (typeof this.$refs["on-remove"] === "function") {
        this.$refs["on-remove"](file, fileList);
      }

    },
    customUpload: async function (params) {
      if (
        !Vue.$UploaderOption &&
        !Vue.$UploaderOption.uploadMethod &&
        !this.uploadMethod
      ) {
        return console.warn(
          "Uploader: The required configuration [uploadMethod] is missing!"
        );
      }

      const theUploadRequest =
        this.uploadMethod || Vue.$UploaderOption.uploadMethod;
      if (typeof theUploadRequest !== "function") {
        return console.warn("Uploader: [uploadMethod] must be a Function!");
      }

      const uploadedFileType = params.file.type;
      DEBUG && console.log("uploadedFileType", uploadedFileType);

      let formDataFileObj = params.file;
      let formDataFileName = params.file.name;

      if (uploadedFileType.indexOf("image/") === 0) {
        if (this.imgCrop) {
          // 图片剪裁
          this.cropResult = null;
          this.dialogVisible = true;

          const imgBlob = await new Promise((resolve) => {
            let oReader = new FileReader();
            oReader.onload = (e) => {
              let base64 = e.target.result;
              let img = this.$refs.CropperImg;
              img.src = base64;
              //
              if (cropperInstance) {
                cropperInstance.destroy();
              }

              cropperInstance = new Cropper(img, {
                viewMode: 1,
                dragMode: "none",
                movable: false,
                zoomOnTouch: false,
                zoomOnWheel: false,
                toggleDragModeOnDblclick: false,
                aspectRatio: this.imgCropOption.ratio,
              });
            };
            oReader.readAsDataURL(params.file);

            this.$watch("cropResult", resolve);
          });

          if (imgBlob) {
            DEBUG && console.log("imgCrop", imgBlob);
            formDataFileObj = imgBlob;
            formDataFileName = fixJpgFileName(formDataFileName);
            this.cropperMethod("close");
          }
        } else if (this.imgCompress) {
          // 图片压缩
          const imgBlob = await fixImgFile(
            params.file,
            Object.assign({}, this.imgCompressOption, {
              outType: "blob",
            })
          );

          DEBUG && console.log("imgCompress", imgBlob);
          formDataFileObj = imgBlob;
          formDataFileName = fixJpgFileName(formDataFileName);
        }
      }

      // 上传
      DEBUG && console.log('upload params', formDataFileName, formDataFileObj);
      return theUploadRequest(formDataFileObj, formDataFileName).then((res) => {
        return res.data;
      });
    },
    cropperMethod(action) {
      // 剪裁相关处理方法
      switch (action) {
        case "save":
          cropperInstance
            .getCroppedCanvas({
              minWidth: this.imgCropOption.minWidth,
              minHeight: this.imgCropOption.minHeight,
              maxWidth: this.imgCropOption.maxWidth || 1000,
              maxHeight: this.imgCropOption.maxHeight || 1000,
              imageSmoothingQuality: "medium",
            })
            .toBlob((blob) => {
              this.cropResult = blob;
            }, "image/jpeg");
          break;
        case "close":
          this.dialogVisible = false;
          if (cropperInstance) {
            cropperInstance.destroy();
          }
          if (!this.cropResult) {
            const newValue = this.value.pop();
            this.$emit("change", newValue);
          }
          break;
        case "rotateLeft":
          cropperInstance.rotate(-90);
          break;
        case "rotateRight":
          cropperInstance.rotate(90);
          break;
        case "scaleX":
          cropperInstance.scaleX(-1);
          break;
        case "scaleY":
          cropperInstance.scaleY(-1);
          break;
        case "reset":
          cropperInstance.reset();
          break;
        default:
          console.warn("cropperMethod 参数错误: ", action);
      }
    },
  },
  mounted() {
    // 外部数据变更同步给 el-upload
    this.$watch(
      "value",
      (newValue) => {
        this.$refs.myupload.uploadFiles = newValue.filter((ef) => {
          return newValue.findIndex((f) => f.uid === ef.uid) !== -1;
        });
      },
      {
        deep: true
      }
    );
  },
};
</script>

<style scoped>
/* 图片剪裁弹窗 */
.cropper >>> .el-dialog__body {
  padding: 0;
}
.cropper_main {
  height: 50vh;
  min-height: 500px;
}

.cropper_actions {
  padding: 0.5em;
}
.cropper_actions >>> .el-button-group {
  margin-right: 10px;
}
</style>

