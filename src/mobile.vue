<template>
  <header class="m-header">
    <GTitle width="30vw" height="4vh"/>
  </header>
  <main class="m-main">
      <section class="top">
        <Itdc width="60vw" height="60vw" />
      </section>
      <section class="bottom">
        <Upload width="60vw" height="60vw" />
      </section>
  </main>
  <footer class="m-footer">
    <GFooter />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GTitle from './components/title.vue';
import Itdc from './components/introduce.vue';
import Upload from './components/upload.vue';
import Export from './components/export.vue';
import GFooter from './components/footer.vue';

export default defineComponent({
  name: 'Mobile',
  components: {
    Upload,
    Export,
    GTitle,
    Itdc,
    GFooter
  }
})
</script>

<style lang="less">

.m-header{
    height: 10%;
    // background: red;
    display: flex;
    justify-content: space-around;
}

.m-main{
    height: 80%;
    overflow: hidden;
    // background: blue;

    .top{
        height: 50%;
        overflow: hidden;
    }

    .bottom{
        height: 50%;
        overflow: hidden;
    }
}

.m-footer{
    height: 10%;
    // background: yellow;
}
</style>