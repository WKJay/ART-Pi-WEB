<template>
  <div>
    <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
        <span style="margin: 0 10px 0 10px;">
            H7 WEB PREVIEW
        </span>
      <a-menu-item>
        <HomeOutlined />Home</a-menu-item>
      <a-menu-item>
        <appstore-outlined />Applications </a-menu-item>
      <a-sub-menu>
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
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
  import {
    HomeOutlined,
    AppstoreOutlined,
    SettingOutlined
  } from '@ant-design/icons-vue';
  export default {
    components: {
      HomeOutlined,
      AppstoreOutlined,
      SettingOutlined,
    },
    data() {
      return {
        current: ['mail'],
      };
    },
  };
</script>

<style >
  
</style>