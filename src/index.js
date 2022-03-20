/**
 * @cutting-mat/uploader
 * 
 * */ 
import Uploader from '@/components/uploader';

export default {
    install: function (Vue, option) {
        Vue.$UploaderOption = option || {}

        Vue.component('uploader', Uploader)
    }
}