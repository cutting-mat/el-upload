/**
 * @cutting-mat/uploader
 *
 * */
import Uploader from "@/components/uploader";

export default {
  install: function (app, option) {
    app.provide("$UploaderOption", option || {});

    app.component("uploader", Uploader);
  },
};
