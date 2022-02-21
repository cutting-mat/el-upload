<template>
  <div class="wrap">
    <div class="logo">

    </div>
    <h1 class="maintitle">@cutting-mat/el-upload</h1>
    <h2 class="subtitle">整合图片上传前压缩、IOS图片方向自动校正的 el-upload</h2>

    <a
      href="https://github.com/cutting-mat/el-upload/blob/main/README.md"
      target="_blank"
      class="myBtn"
    >
      <i class="el-icon-reading"></i>
      文档
    </a>

    <h3 class="channeltitle">示例</h3>

    <el-upload-plugin :showFileList="true" :data="{ test: 123 }" :limit="2" @exceed="handleExceed" />

    <div class="code">
      <textarea>
        <el-upload-plugin 
          :showFileList="true" 
          :data="{ test: 123 }" 
          :limit="2" 
          @exceed="handleExceed" 
        />
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleExceed(){
      this.$message.warning('超出上传数量限制')
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 1200px;
  text-align: center;
}

.maintitle {
  color: #000;
  font-size: 2.5em;
}
.subtitle {
  color: rgb(71, 101, 130);
  font-size: 1.6em;
  font-weight: normal;
  margin-bottom: 20px;
}
.channeltitle {
  font-size: 1.5em;
  color: #000;
  margin: 40px 0 20px;
  font-weight: normal;
}

.links .el-link {
  margin: 0 10px;
}

.myBtn {
  display: inline-block;
  border-radius: 6px;
  padding: 0 24px;
  line-height: 52px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #f8f8f8;
  background-color: #4abf8a;
  border: 2px solid #3eaf7c;
  transition: background-color 0.1s ease;
}

.code{
  background:#333;
  padding: 10px;
  border-radius: 8px;
  min-height: 200px;
  margin: 20px auto;
  max-width: 600px;
}
.code>textarea{
  width: 100%;
  height: 100%;
  border: 0;
  color: #fff;
  background:transparent;
  resize: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  line-height: 1.7;
}

</style>
