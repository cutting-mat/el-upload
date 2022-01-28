<template>
  <div id="app">
    <label>
      切换为横向
    </label>
    <div>
      <uploader />
    </div>
    <footer class="foot">
        <p>© 2022 - 3022 Author
            <a href="https://refined-x.com/" target="_blank">雅X共赏</a> 
            Github 
            <a href="https://github.com/tower1229/el-upload" target="_blank">el-upload</a>
            Npm 
            <a href="https://github.com/tower1229/el-upload" target="_blank">@tower1229/el-upload</a>
        </p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'el-upload-demo',
  data() {
    return {
      data: {
        
      }
    }
  },
  methods: {
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .avat{border-radius: 2em;border-width:2px;}
#app .name{font-weight:700;}
#app .rootNode .name{
  color: red;
}

.foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #333;
    padding: 24px;
    overflow: hidden;
    color: #999;
    font-size: 14px;
    text-align: center;
}
.foot a{color:#fff;margin:0 .5em}
</style>
