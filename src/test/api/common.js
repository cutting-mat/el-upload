import axios from 'axios';
import requestConfig from './request.config';
// 创建请求实例
const instance = axios.create(requestConfig);

// 上传文件
export const upload = params => {
    return instance.post(`/file/upload`, params, {
        headers: { "Content-Type": "multipart/form-data" }
    })
}
