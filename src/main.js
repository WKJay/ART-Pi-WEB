import {
    createApp
} from 'vue';
import App from './App.vue';
import router from '@/router/router'
import {
    Button,
    Menu,
    Col,
    Row,
    Layout,
    Card,
    Table,
    Tag,
    Progress,
    Descriptions
    // Carousel
} from 'ant-design-vue';
import 'ant-design-vue/lib/button/style';
import 'ant-design-vue/lib/menu/style';
import 'ant-design-vue/lib/col/style';
import 'ant-design-vue/lib/layout/style';
import 'ant-design-vue/lib/card/style';
import 'ant-design-vue/lib/row/style';
import 'ant-design-vue/lib/table/style';
import 'ant-design-vue/lib/tag/style';
import 'ant-design-vue/lib/progress/style';
import 'ant-design-vue/lib/descriptions/style';
// import 'ant-design-vue/lib/carousel/style';

import '@/assets/css/h7_web.css'

const WEB_VERSION = "V0.1.0"
const app = createApp(App);
app.use(router);

app.use(Button);
app.use(Menu);
app.use(Col);
app.use(Row);
app.use(Layout);
app.use(Card);
app.use(Table);
app.use(Tag);
app.use(Progress);
app.use(Descriptions);
// app.use(Carousel);

app.config.globalProperties.axios = require('axios').default;
app.config.globalProperties.echarts = require('echarts');
app.config.globalProperties.webVer = WEB_VERSION;

app.mount('#app');