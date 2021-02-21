<template>
  <el-container>
    <el-header>
      <Title />
    </el-header>
    <el-container>
      <el-main class="main">
        <el-row>
          <el-col :span="9" :offset="3">
            <Itdc />
          </el-col>
          <el-col :span="9" :offset="3">
            <Upload />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-footer class="footer">
      <GFooter />
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from './components/title.vue';
import Itdc from './components/introduce.vue';
import Upload from './components/upload.vue';
import Export from './components/export.vue';
import GFooter from './components/footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Upload,
    Export,
    Title,
    Itdc,
    GFooter,
  }
})
</script>

<style>

body{
  background: black;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.main{
  /* max-width: 800px; */
}

.footer{
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>