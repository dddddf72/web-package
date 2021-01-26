import './assets/index.css';
//console.log("hello world");
import App from './App.vue';
import Vue from 'vue';
new Vue({
    render:h=>h(App)
}).$mount("#app");