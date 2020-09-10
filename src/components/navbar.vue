<template>
  <div>
    <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark" @click="menuClick">
      <span style="margin: 0 10px 0 10px;">
        RT-Thread &nbsp;&nbsp; ART PI &nbsp;&nbsp;&nbsp;
      </span>
      <a-menu-item key="/home">
        <HomeOutlined />
        主页
      </a-menu-item>
      <a-menu-item key="/plugins">
        <appstore-outlined />
        插件
      </a-menu-item>
      <!-- <a-sub-menu>
        <template v-slot:title>
          <span class="submenu-title-wrapper">
            <setting-outlined />
            Settings
          </span>
        </template>
        <a-menu-item key="setting:1">
          Option 1
        </a-menu-item>
        <a-menu-item key="setting:2">
          Option 2
        </a-menu-item>
      </a-sub-menu> -->
    </a-menu>
  </div>
</template>
<script>
  import {
    HomeOutlined,
    AppstoreOutlined,
    // SettingOutlined
  } from '@ant-design/icons-vue';
  export default {
    components: {
      HomeOutlined,
      AppstoreOutlined,
      // SettingOutlined,
    },
    data() {
      return {
        current: ['mail'],
      };
    },
    methods: {
      menuClick(data) {
        this.$router.push(data.key);
      }
    }
  };
</script>

<style>

</style>