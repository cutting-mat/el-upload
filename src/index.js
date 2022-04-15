/**
 * @cutting-mat/uploader
 * 
 * */
import Uploader from '@/components/uploader';

export default {
    install: function (app, option) {
        app.config.globalProperties.$UploaderOption = option || {}

        app.component('uploader', Uploader)
    }
}