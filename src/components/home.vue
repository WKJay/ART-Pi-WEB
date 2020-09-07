<template>
  <div class="h7-container">

    <a-row :gutter="16">
      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="Board Control" :bordered="false">
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
          <p>
            Total memory
            <span>{{basicInfo.id0}}</span>
          </p>
          <p>
            Used memory
            <span>{{basicInfo.id1}}</span>
          </p>
          <p>
            <a-progress :percent="ramUsage" />
          </p>
        </a-card>
      </a-col>

      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="Norflash" :bordered="false">
          <p>
            Total memory
            <span>{{basicInfo.id6}}</span>
          </p>
          <p>
            Used memory
            <span>{{basicInfo.id7}}</span></p>
          <p>
            <a-progress :percent="norflashUsage" />
          </p>
        </a-card>
      </a-col>

      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="SD" :bordered="false">
          <p>
            Total memory
            <span>{{basicInfo.id8}}</span>
          </p>
          <p>
            Used memory
            <span>{{basicInfo.id9}}</span>
          </p>
          <p>
            <a-progress :percent="sdUsage" />
          </p>
        </a-card>
      </a-col>
    </a-row>

    <a-row>
      <a-col :md="24">
        <a-card style="margin-bottom:15px">
          <div id="memTrendChart" style="width:100%;height:300px;">
          </div>
        </a-card>
      </a-col>
    </a-row>

    <!-- <a-row>
      <a-col :md="24">
        <a-card title="Current mods">
          <a-table :columns="modsColums" :data-source="mods">
            <template v-slot:active="{ text: active }">
              <span>
                <a-tag :color="active  ? 'green' :  'volcano'">
                  {{ active?"active":"disabled" }}
                </a-tag>
              </span>
            </template>
          </a-table>
        </a-card>
      </a-col>
    </a-row> -->

    <a-row>
      <a-card class="h7-head-card-mini" :bordered="false">
        <a-descriptions title="Basic information">
          <a-descriptions-item label="Firmware version">
            {{basicInfo.id12}}
          </a-descriptions-item>
          <a-descriptions-item label="Web version">
            {{basicInfo.id13}}
          </a-descriptions-item>
          <a-descriptions-item label="Operation directory">
            {{basicInfo.id5}}
          </a-descriptions-item>
          <a-descriptions-item label="Server Date">
            {{basicInfo.id4}}
          </a-descriptions-item>
        </a-descriptions>
      </a-card>

    </a-row>


    <a-row :gutter="16">
      <a-col :md="8">
        <a-button size="large" block href="https://www.rt-thread.org/">
          RT-Thread 官方网站
        </a-button>
      </a-col>
      <a-col :md="8">
        <a-button size="large" block href="https://www.rt-thread.org/document/site/">
          RT-Thread 文档中心
        </a-button>
      </a-col>
      <a-col :md="8">
        <a-button size="large" block href="https://club.rt-thread.org/">
          RT-Thread开源社区
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        basicInfoTimer: null,
        basicInfo: {
          id0: "33968596",
          id1: "61556",
          id2: "64660",
          id3: "8",
          id4: "2000-01-01 10:41:55",
          id5: "norflash",
          id6: "15728640",
          id7: "32768",
          id8: "0",
          id9: "0",
          id10: "0",
          id11: "0",
          id12: "v1.0.0", //firmware version
          id13: "v0.0.1", //web version
        },
        mods: [{
          key: "1",
          name: 'FTP',
          author: 'mlw',
          version: 'v1.0.0',
          active: true,
        }],
        modsColums: [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: 'Author',
            dataIndex: 'author',
            key: 'author'
          },
          {
            title: 'Version',
            dataIndex: 'version',
            key: 'version'
          },
          {
            title: 'Status',
            dataIndex: 'active',
            key: 'active',
            slots: {
              customRender: 'active'
            }
          }
        ],
        memTrendArray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        memTrendXArray: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
          '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
        ],
      }
    },
    methods: {
      getData() {
        this.axios({
          method: "get",
          url: "/cgi-bin/basic_info",
          timeout: 1000
        }).then(data => {
          for (let key in data.data.payload) {
            this.basicInfo[key] = data.data.payload[key];
          }

          this.updateChart(this.basicInfo.id1);
        }).catch(() => {});
      },
      showChart() {
        window.memTrendchart = this.echarts.init(document.getElementById("memTrendChart"));
        window.onresize = () => {
          window.memTrendchart.resize();
        }

        // 绘制图表
        window.memTrendchart.setOption({
          title: {
            text: 'Memory trend'
          },
          tooltip: {},
          xAxis: {
            data: this.memTrendXArray
          },
          yAxis: {},
          series: [{
            symbol: "none",
            name: 'Mem',
            type: 'line',
            data: this.memTrendArray
          }]
        });
      },
      updateChart(data) {
        this.memTrendArray.push(data);
        this.memTrendArray.shift();
        window.memTrendchart.setOption({
          series: [{
            name: 'Mem',
            data: this.memTrendArray
          }]
        });
      }
    },
    created() {
      this.getData();
      this.basicInfoTimer = window.setInterval(this.getData, 1200);
    },
    mounted() {
      this.showChart();
    },
    beforeUnmount() {
      window.clearInterval(this.basicInfoTimer);
    },
    computed: {
      ramUsage: function () {
        if (this.basicInfo.id0 == 0) {
          return 0;
        } else {
          let percent = parseFloat((this.basicInfo.id1 / this.basicInfo.id0 * 100).toFixed(1));
          return percent != 100 ? percent : 99.9;
        }
      },
      norflashUsage: function () {
        if (this.basicInfo.id6 == 0) {
          return 0;
        } else {
          let percent = parseFloat((this.basicInfo.id7 / this.basicInfo.id6 * 100).toFixed(1));
          return percent != 100 ? percent : 99.9;
        }
      },
      sdUsage: function () {
        if (this.basicInfo.id8 == 0) {
          return 0;
        } else {
          let percent = parseFloat((this.basicInfo.id9 / this.basicInfo.id8 * 100).toFixed(1));
          return percent != 100 ? percent : 99.9;
        }
      }
    }
  }
</script>

<style scoped>
  /* For demo */
  .ant-carousel ::v-deep(.slick-slide) {
    text-align: center;
    height: 160px;
    background: #364d79;
    overflow: hidden;
  }
</style>