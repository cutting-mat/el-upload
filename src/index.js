
export default {
    install: function (Vue, option) {
        Vue.uploaderDefault = Object.assign({
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
            limitSize: 100 * 1024 * 1024  // 100M
        }, option || {})

        Vue.component('uploader', () => import('./components/el-upload'))
    }
}