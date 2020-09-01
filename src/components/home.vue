<template>
  <div class="h7-container">
    <a-row>
      <a-col :md="8">

        <a-row>
          <a-card size="small" title="Card title" :bordered="false" style="width: 400px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-row>

        <a-row style="margin-top:15px">
          <a-card size="small" title="Card title" :bordered="false" style="width: 400px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-row>

        <a-row style="margin-top:15px">
          <a-card size="small" title="Card title" :bordered="false" style="width: 400px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-row>

        <a-row style="margin-top:15px">
          <a-card size="small" title="Card title" :bordered="false" style="width: 400px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </a-row>

      </a-col>
      <a-col :md="16">
        <a-carousel effect="fade">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </a-carousel>
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