import { createApp } from 'vue'
import App from './App.vue'
import { Button, Menu } from 'ant-design-vue';
import 'ant-design-vue/lib/button/style';
import 'ant-design-vue/lib/menu/style';

const app = createApp(App);
app.use(Button);
app.use(Menu);
app.mount('#app');
