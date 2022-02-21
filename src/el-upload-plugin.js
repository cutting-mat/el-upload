/**
 * @cutting-mat/el-upload
 * 
 * */ 
import Uploader from '@/components/el-upload';

export default {
    install: function (Vue, option) {
        Vue.$uploaderOption = option || {}

        Vue.component('ElUploadPlugin', Uploader)
    }
}