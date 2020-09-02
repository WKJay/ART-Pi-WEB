<template>
  <div class="h7-container">
    <a-row>
      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="Board Control" :bordered="false" >
          <p>
            BLUE LED
            <a-button type="default" size="small" style="float:right">
              ON
            </a-button>
          </p>
          <p>
            RED LED
            <a-button type="default" size="small" style="float:right">
              ON
            </a-button>
          </p>
          <p>
            BEEP
            <a-button type="default" size="small" style="float:right">
              ON
            </a-button>
          </p>
        </a-card>
      </a-col>

      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="RAM" :bordered="false">
          <p>Total memory</p>
          <p>Max memory</p>
          <p>Used memory</p>
          <p></p>
        </a-card>
      </a-col>

      <a-col :md="6">
          <a-card class="h7-head-card" size="small" title="Norflash" :bordered="false" >
            <p>Total memory</p>
            <p>Used memory</p>
            <p> </p>
          </a-card>
      </a-col>

      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="SD" :bordered="false" >
          <p>Total memory</p>
          <p>Used memory</p>
          <p> </p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  /* For demo */
  .ant-carousel ::v-deep(.slick-slide) {
    text-align: center;
    height: 400px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel ::v-deep(.slick-slide h3) {
    color: #fff;
    margin-top: 60px;
  }
</style>