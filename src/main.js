import Vue from 'vue';
import App from './App.vue';

//створення нового екземпляру компонента
const app = new Vue({
  render: h => h(App),
});
// монтування компонента в index.html використовуючи селектор #app
app.$mount('#app');
