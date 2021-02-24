import { createApp } from 'vue'
import App from './App.vue'
import Mobile from './mobile.vue';
import 'reset.css';
import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';

const isApp = window.innerWidth>800;
const app= isApp ? createApp(App): createApp(Mobile);
app.use(ElementPlus);
app.mount(`#app`);