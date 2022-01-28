/**
 * @tower1229/el-upload
 * 
 * */ 
export const uploaderDefault = {
    multiple: false,
    data() {
        return {}
    },
    name: "file",
    showFileList: true,
    accept: "*",
    listType: "text",
    fileList() {
        return [];
    },
    disabled: false,
    limit: 9,
    beforeUpload() {
        return true;
    },
    imgCompress: true,
    imgCompressOption() {
        return {
            width: 1000,
            height: 1000
        }
    },
    uploadFunc: null,
    uploadBase64Func: null,
    limitSize: 100 * 1024 * 1024,  // 100M
    FileTypeMap: {
        "t-image": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tif", ".webp"],
        "t-video": [".mp4", ".rmvb", ".avi", ".mov", "3.gp"],
        "t-word": [".docx", ".doc"],
        "t-excel": [".xlsx", ".xls"],
        "t-ppt": [".ppt", ".pptx"],
        "t-document": [".pdf", "t-word", "t-excel", "t-ppt"],
        "t-zip": [".zip", ".ar"]
    }
}


export default {
    install: function (Vue, option) {
        Object.assign(uploaderDefault, option || {})

        Vue.component('Uploader', () => import('@/components/el-upload'))
    }
}