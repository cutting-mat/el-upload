/**
 * @cutting-mat/uploader
 *
 * */
import Uploader from "@/components/uploader";

export default {
  install: function (app, option) {
    app.config.globalProperties.$UploaderOption = option || {};

    setTimeout(() => {
      app.component("uploader", Uploader);
    }, 0);
  },
};
