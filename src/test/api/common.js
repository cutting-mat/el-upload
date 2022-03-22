import axios from 'axios';
import requestConfig from './request.config';
// 创建请求实例
const instance = axios.create(requestConfig);

// 上传文件
export const upload = (file, fileName) => {
    let formData = new FormData();
    formData.append('file', file, fileName);

    return instance.post(`/file/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
    })
}
