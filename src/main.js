import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from '@/store'

import { DatetimePicker } from 'vant';
import { Overlay } from 'vant';
import { Loading } from 'vant';
import lazyPlugin from 'vue3-lazy'
import Vconsole from 'vconsole'
// 待会注释
// let vConsole = new Vconsole();

const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  //htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
  htmlDom.style.fontSize = `20px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();

const app = createApp(App);
app.config.globalProperties.$axios = axios
// app.use(Vant);
app.directive('throttle', {
  bind: (el, binding) => {
    let throttleTime = binding.value; // 防抖时间
    if (!throttleTime) { // 用户若不设置防抖时间，则默认2s
      throttleTime = 2000;
    }
    let cbFun;
    el.addEventListener('click', event => {
      if (!cbFun) { // 第一次执行
        cbFun = setTimeout(() => {
          cbFun = null;
        }, throttleTime);
      } else {
        event && event.stopImmediatePropagation();
      }
    }, true);
  },
});

app
// 待会注释
// .use(vConsole)

.use(lazyPlugin, {
  loading: 'loading.png',
  error: 'error.png'
})
.use(Overlay)
.use(DatetimePicker)
.use(Loading)
.use(router)
.use(store)
.mount('#app')
