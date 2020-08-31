<template>
  <div>
    <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
      <a-menu-item>
        <mail-outlined />Navigation One </a-menu-item>
      <a-menu-item key="app" disabled>
        <appstore-outlined />Navigation Two </a-menu-item>
      <a-sub-menu>
        <template v-slot:title>
          <span class="submenu-title-wrapper">
            <setting-outlined />
            Navigation Three - Submenu
          </span>
        </template>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    MailOutlined,
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

<style>
.ant-menu-dark {
  background-color: #343a40 !important;
}
.ant-menu-sub {
  background-color: #343a40 !important;
}
</style>