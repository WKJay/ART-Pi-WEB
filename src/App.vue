<template>
    <navBar/>
    <mainContent/>
   
</template>
<script>
  import navBar from "@/components/navbar"
  import mainContent from "@/components/content"
  export default {
    components: {
      navBar,
      mainContent
    },
    data() {
      return {
        current: ['mail'],
      };
    },
  };
</script>

<style>
 body{
   background: #ebedef !important;
 }
</style>