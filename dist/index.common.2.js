((typeof self !== 'undefined' ? self : this)["webpackJsonpindex"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpindex"] || []).push([[2],{

/***/ "ca4e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getSuffix", function() { return /* reexport */ getSuffix; });
__webpack_require__.d(__webpack_exports__, "getExtByType", function() { return /* reexport */ getExtByType; });

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1465658a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/el-upload.vue?vue&type=template&id=020cd7e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-upload',{attrs:{"action":"","show-file-list":_vm.showFileList,"accept":_vm.actualAccept,"data":_vm.data,"list-type":_vm.listType,"file-list":_vm.fileList,"before-upload":_vm.handleBeforeUpload,"http-request":_vm.customUpload,"disabled":_vm.disabled,"multiple":_vm.multiple,"limit":_vm.limit,"on-exceed":_vm.handleExceed}},[_c('div',{attrs:{"id":_vm.triggerId}},[_vm._t("default",function(){return [_c('el-button',{attrs:{"size":"small","type":"primary","disabled":_vm.disabled}},[_vm._v(" 点击上传 ")])]})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/el-upload.vue?vue&type=template&id=020cd7e6&scoped=true&

// EXTERNAL MODULE: ./src/index.js
var src = __webpack_require__("b635");

// EXTERNAL MODULE: ./node_modules/ios-photo-repair/dist/module.js
var dist_module = __webpack_require__("af90");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/el-upload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// TODO 图片剪裁 https://github.com/dai-siki/vue-image-crop-upload/blob/master/upload-2.vue




/**
 * 提取文件名中的扩展名
 * @param filename[String] 要提取扩展名的字符串
 * @return 转小写后的扩展名字符串
 */
const getSuffix = (filename) => {
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
 * @return 目标类型的扩展名数组
 * */
const FileTypeMap = src["b" /* uploaderDefault */].FileTypeMap || {};

const getExtByType = (type) => {
  if (type && Array.isArray(FileTypeMap[type])) {
    let classList = [];
    let extList = [];
    FileTypeMap[type].forEach((e) => {
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

/* harmony default export */ var el_uploadvue_type_script_lang_js_ = ({
  name: "Uploader",
  props: {
    multiple: {
      type: Boolean,
      required: false,
      default: src["b" /* uploaderDefault */].multiple,
    },
    data: {
      type: Object,
      required: false,
      default: src["b" /* uploaderDefault */].data,
    },
    name: {
      type: String,
      required: false,
      default: src["b" /* uploaderDefault */].name,
    },
    showFileList: {
      type: Boolean,
      required: false,
      default: src["b" /* uploaderDefault */].showFileList,
    },
    accept: {
      type: String,
      required: false,
      default: src["b" /* uploaderDefault */].accept,
    },
    listType: {
      type: String,
      required: false,
      default: src["b" /* uploaderDefault */].listType,
    },
    fileList: {
      type: Array,
      required: false,
      default: src["b" /* uploaderDefault */].fileList,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: src["b" /* uploaderDefault */].disabled,
    },
    limit: {
      type: Number,
      required: false,
      default: src["b" /* uploaderDefault */].limit,
    },
    beforeUpload: {
      type: Function,
      required: false,
      default: src["b" /* uploaderDefault */].beforeUpload,
    },
    triggerId: {
      type: String,
      required: false,
      default: "upload_image_trigger" + parseInt(Math.random() * 1e8),
    },
    imgCompress: {
      type: Boolean,
      required: false,
      default: src["b" /* uploaderDefault */].imgCompress,
    },
    imgCompressOption: {
      type: Object,
      required: false,
      default: src["b" /* uploaderDefault */].imgCompressOption,
    },
    uploadFunc: {
      type: Function,
      required: false,
      default: src["b" /* uploaderDefault */].uploadFunc,
    },
    uploadBase64Func: {
      type: Function,
      required: false,
      default: src["b" /* uploaderDefault */].uploadBase64Func,
    },
    limitSize: {
      type: Number,
      required: false,
      default: src["b" /* uploaderDefault */].limitSize,
    },
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
      if (file.name.length > 500) {
        this.$message.warning("文件名不得超过500字符");
        return false;
      }
      // 扩展校验方法
      return this.beforeUpload(file);
    },
    customUpload: function (params) {
      if (this.imgCompress && params.file.type.indexOf("image/") === 0) {
        // 图片自动压缩
        Object(dist_module["a" /* fixImgFile */])(params.file, this.imgCompressOption).then((base64) => {
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
});

// CONCATENATED MODULE: ./src/components/el-upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_el_uploadvue_type_script_lang_js_ = (el_uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/el-upload.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_el_uploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "020cd7e6",
  null
  
)

/* harmony default export */ var el_upload = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=index.common.2.js.map