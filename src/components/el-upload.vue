<template>
  <span>
    <el-upload
      ref="myupload"
      v-bind="$props"
      action=""
      :accept="actualAccept"
      :before-upload="handleBeforeUpload"
      :http-request="customUpload"
    >
      <div :id="triggerId">
        <slot>
          <el-button size="small" type="primary" :disabled="disabled">
            点击上传
          </el-button>
        </slot>
      </div>
    </el-upload>
    <el-dialog
      :visible="dialogVisible"
      append-to-body
      title="图像剪裁"
      width="600px"
      class="cropper"
      @close="cropperMethod('close')"
    >
      <div class="cropper_main">
        <img src="" ref="CropperImg" />
      </div>
      <div class="cropper_actions flex-row align-center">
        <div class="flex-1">
          <el-button-group>
            <el-button size="small" title="左旋" @click="cropperMethod('rotateLeft')">
              <i class="el-icon-refresh-left"></i>
            </el-button>
            <el-button size="small" title="右旋" @click="cropperMethod('rotateRight')">
              <i class="el-icon-refresh-right"></i>
            </el-button>
          </el-button-group>
          <el-button-group>
            <el-button size="small" title="水平镜像" @click="cropperMethod('scaleX')">
              <i class="el-icon-sort" style="transform: rotateZ(90deg)"></i>
            </el-button>
            <el-button size="small" title="垂直镜像" @click="cropperMethod('scaleY')">
              <i class="el-icon-sort"></i>
            </el-button>
          </el-button-group>
          <el-button-group>
            <el-button size="small" title="重置" @click="cropperMethod('reset')">
              <i class="el-icon-refresh"></i>
            </el-button>
            
          </el-button-group>
          
        </div>

        <el-button size="small" type="primary" @click="cropperMethod('save')">
          确定
        </el-button>
      </div>
    </el-dialog>
  </span>
</template>

<script>
import Vue from "vue";
import { fixImgFile } from "ios-photo-repair";
import data2blob from "../assets/data2blob";

import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

let cropperInstance;

// 文件类型集合
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
  const quickType = Object.assign(
    {},
    FileTypeMap,
    Vue.$uploaderOption.quickType || {}
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
  const globalOption = Vue.$uploaderOption;
  if (Object.keys(globalOption).indexOf(key) !== -1) {
    return globalOption[key];
  }
  return defaultValue;
};

export default {
  name: "ElUploadPlugin",
  model: {
    prop: "fileList",
    event: "change",
  },
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
    onExceed: {
      type: Function,
      required: false,
      default(files, fileList) {
        if (
          Vue.$uploaderOption &&
          typeof Vue.$uploaderOption.onExceed === "function"
        ) {
          Vue.$uploaderOption.onExceed(files, fileList);
        } else {
          this.$message.warning("文件超出上传数量限制");
        }
      },
    },
    triggerId: {
      // 配合实现富文本插件上传功能
      type: String,
      required: false,
      default: "upload_image_trigger" + parseInt(Math.random() * 1e8),
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
          width: 1000,
          height: 1000,
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
    fileSizeLimit: {
      // 文件尺寸限制
      type: Number,
      required: false,
      default() {
        return getDefaultValue("fileSizeLimit", 100 * 1024 * 1024);
      },
    },
    fileNameLengthLimit: {
      // 文件名长度限制
      type: Number,
      required: false,
      default() {
        return getDefaultValue("fileNameLengthLimit", 500);
      },
    },
    uploadRequest: {
      // 自定义上传函数 接收 formdata 参数
      type: Function,
      required: false,
    },
    responseTransfer: {
      // 接口返回数据 与 fileList 数据格式转换函数
      type: Function,
      required: false,
      default(response) {
        return response.data;
      },
    },
  },
  data() {
    return {
      dialogVisible: false,
      cropResult: null,
      uploadedFileType: null,
    };
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
    uploadFiles() {
      // 监听el-upload组件内的 uploadFiles 数据变化，同步给外部
      const ValueOfElUpload = this.$children[0]
        ? [...this.$children[0].uploadFiles]
        : [];
      this.$emit(
        "change",
        ValueOfElUpload.map((e) =>
          e.response ? this.responseTransfer(e.response) : e
        )
      );
      return ValueOfElUpload;
    },
  },
  methods: {
    handleSuccess: function (res) {
      this.$emit("success", res);
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
      if (file.size > this.fileSizeLimit) {
        this.$message.warning("文件超出最大限制");
        return false;
      }
      // 文件名不得超过500字符
      if (file.name.length > this.fileNameLengthLimit) {
        this.$message.warning(
          `文件名不得超过 ${this.fileNameLengthLimit} 字符`
        );
        return false;
      }
      // 扩展校验方法
      return this.beforeUpload(file);
    },
    customUpload: async function (params) {
      if (
        !Vue.$uploaderOption &&
        !Vue.$uploaderOption.uploadRequest &&
        !this.uploadRequest
      ) {
        return console.warn(
          "Uploader: The required configuration [uploadRequest] is missing!"
        );
      }

      const theUploadRequest =
        this.uploadRequest || Vue.$uploaderOption.uploadRequest;
      if (!typeof theUploadRequest === "function") {
        return console.warn("Uploader: [uploadRequest] must be a Function!");
      }

      let formData = new FormData();
      this.uploadedFileType = params.file.type;

      if (this.uploadedFileType.indexOf("image/") === 0) {
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
            console.log("imgCrop", imgBlob);
            formData.append(this.name, imgBlob, params.file.name);
            this.cropperMethod('close')
          }
          
        } else if (this.imgCompress) {
          // 图片压缩
          const imgBlob = await fixImgFile(
            params.file,
            this.imgCompressOption
          ).then((base64) => {
            return data2blob(base64, this.uploadedFileType);
          });

          console.log("imgCompress", imgBlob);
          formData.append(this.name, imgBlob, params.file.name);
        }
      } else {
        // 非图片文件
        formData.append(this.name, params.file);
      }
      // 扩展数据
      Object.keys(this.data).forEach((key) => {
        formData.append(key, this.data[key]);
      });
      // 上传
      return theUploadRequest(formData)
        .then((res) => {
          this.handleSuccess(res.data);
          return res.data;
        })
        .catch((err) => {
          this.handleError(err);
        });
    },
    cropperMethod(action, option) {
      switch (action) {
        // 保存剪裁
        case "save":
          const base64 = cropperInstance
            .getCroppedCanvas({
              minWidth: this.imgCropOption.minWidth,
              minHeight: this.imgCropOption.minHeight,
              maxWidth: this.imgCropOption.maxWidth || 1000,
              maxHeight: this.imgCropOption.maxHeight || 1000,
              imageSmoothingQuality: "medium",
            })
            .toDataURL("image/jpeg");
          console.log(base64)
          this.cropResult = data2blob(base64, this.uploadedFileType);
          break;
        case "close":
          this.dialogVisible = false;

          if (cropperInstance) {
            cropperInstance.destroy();
          }
          if(!this.cropResult){
            // console.log(this.$refs.myupload.abort) // element 内部报错
            // this.$refs.myupload.abort(this.fileList[0])
            this.fileList.pop()
          }
          break;
        
        case "rotateLeft":
          cropperInstance.rotate(-90)
          break;
        case "rotateRight":
          cropperInstance.rotate(90)
          break;
        case "scaleX":
          cropperInstance.scaleX(-1)
          break;
        case "scaleY":
          cropperInstance.scaleY(-1)
          break;
        case "reset":
          cropperInstance.reset()
          break;
        default:
          console.warn('cropperMethod 参数错误: ', action)
      }
    },
  },
};
</script>

<style scoped>
.cropper >>> .el-dialog__body {
  padding: 0;
}
.cropper_main {
  height: 400px;
}

.cropper_actions {
  padding: 0.5em;
}
.cropper_actions >>> .el-button-group {
  margin-right: 10px;
}
</style>

