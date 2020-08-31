import {
    createApp
} from 'vue';
import App from './App.vue';
import router from '@/router/router'
import {
    Button,
    Menu,
    Col,
    Layout,
    Card
} from 'ant-design-vue';
import 'ant-design-vue/lib/button/style';
import 'ant-design-vue/lib/menu/style';
import 'ant-design-vue/lib/col/style';
import 'ant-design-vue/lib/layout/style';
import 'ant-design-vue/lib/card/style';

import '@/assets/css/h7_web.css'

const app = createApp(App);
app.use(router);

app.use(Button);
app.use(Menu);
app.use(Col);
app.use(Layout);
app.use(Card);

app.mount('#app');