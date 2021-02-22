<template>
  <header class="header">
    <Title />
  </header>
  <main class="main">
    <section class="op">
      <article class="itdc-wrapper">
        <Itdc />
      </article>
      <article class="upload-wrapper">
        <Upload />
      </article>
    </section>
    <section class="choice">
      <Choice />
    </section>
  </main>
  <footer class="footer">
    <GFooter />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Title from './components/title.vue';
import Itdc from './components/introduce.vue';
import Upload from './components/upload.vue';
import Export from './components/export.vue';
import GFooter from './components/footer.vue';
import Choice from './components/choice.vue';

export default defineComponent({
  name: 'App',
  components: {
    Upload,
    Export,
    Title,
    Itdc,
    GFooter,
    Choice
  }
})
</script>

<style lang="less">

body{
  background: black;
  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  min-width: 740px;
  min-height: 300px;
  // max-width: 1600px;
}

.header{
  height: 10%;
  padding-left: 5%;
  // background: red;
}

.main{
  height: 80%;
  padding: 5%;
  box-sizing: border-box;
  // border: 1px white solid;
  // background: white;

  .op{
    height: 70%;
    display: flex;
    // background: green; 

    .itdc-wrapper{
      width: 50%;
    }

    .upload-wrapper{
      width: 50%;
    }
  }

  .choice{
    height: 30%;
    overflow: hidden;
  }
}

.footer{
  // background: yellow;
  height: 10%;
}


</style>