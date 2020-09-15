<template>
  <div class="h7-container">

    <a-row :gutter="16">
      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="Board Control" :bordered="false">
          <a-row>
            <div style="margin-bottom:12px">
              <a-tag :color="bLedStat?'blue':''">
                蓝灯
                <BulbOutlined />
              </a-tag>
              <a-button :loading="control.bLedReq" type="default" size="small" style="float:right"
                @click="boardControl('dev0',!basicInfo.id14)">
                {{basicInfo.id14?"关闭":"打开"}}
              </a-button>
            </div>
          </a-row>

          <a-row>
            <div>
              <a-tag :color="rLedStat?'red':''">
                红灯
                <BulbOutlined />
              </a-tag>
              <a-button :loading="control.rLedReq" type="default" size="small" style="float:right"
                @click="boardControl('dev1',!basicInfo.id15)">
                {{basicInfo.id15?"关闭":"打开"}}
              </a-button>
            </div>
          </a-row>

          <a-row>
            <a-col :xs="12">

            </a-col>
            <a-col :xs="12">

            </a-col>
          </a-row>
        </a-card>
      </a-col>

      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="内存" :bordered="false">
          <p>
            总容量
            <span>{{ramTotalH}}</span>
          </p>
          <p>
            已使用
            <span>{{ramUsedH}}</span>
          </p>
          <p>
            <a-progress :percent="ramUsage" />
          </p>
        </a-card>
      </a-col>

      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="Norflash" :bordered="false">
          <p>
            总容量
            <span>{{norTotalH}}</span>
          </p>
          <p>
            已使用
            <span>{{norUsedH}}</span>
          </p>
          <p>
            <a-progress :percent="norflashUsage" />
          </p>
        </a-card>
      </a-col>

      <a-col :md="6">
        <a-card class="h7-head-card" size="small" title="SD" :bordered="false">
          <p>
            总容量
            <span>{{sdTotalH}}</span>
          </p>
          <p>
            已使用
            <span>{{sdUsedH}}</span>
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
        <a-descriptions title="基础信息">
          <a-descriptions-item label="固件版本">
            {{basicInfo.id12}}
          </a-descriptions-item>
          <a-descriptions-item label="网页版本">
            {{webVer}}
          </a-descriptions-item>
          <a-descriptions-item label="网络状态">
            {{basicInfo.id17?"已联网":"未联网"}}
          </a-descriptions-item>
          <a-descriptions-item label="服务器时间">
            {{basicInfo.id4}}
          </a-descriptions-item>
          <a-descriptions-item label="运行时间">
            {{serverRunTime}}
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
          RT-Thread 开源社区
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import {
    BulbOutlined
  } from '@ant-design/icons-vue';
  export default {
    components: {
      BulbOutlined,
    },
    data() {
      return {
        basicInfoTimer: null,
        control: {
          bLedReq: false, //蓝灯请求状态
          rLedReq: false, //红灯请求状态
        },
        basicInfo: {
          id0: "33968596", //total ram
          id1: "61556", //used ram
          id2: "64660", //max used ram
          id3: "8", //time zone
          id4: "2000-01-01 10:41:55", //server time
          id5: "norflash", //operation dir
          id6: "15728640", //norflash total
          id7: "32768", //norflash used
          id8: "0", //sd total
          id9: "0", //sd used
          id10: "0", //usb total 
          id11: "0", //usb used
          id12: "v1.0.0", //firmware version
          id13: " ", //RESERVE
          id14: false, //BLUE LED
          id15: false, //RED LED
          id16: false, //BEEP
          id17: false, //Internet
          id18: 0, //running time
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
        memTrendXArray: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
          '', '', '', '', '', ''
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
          this.updateChart(this.ramUsage);
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
            text: '内存走势'
          },
          grid: {
            left: '1%',
            right: '1%',
            bottom: '10%',
            containLabel: true,
          },
          tooltip: {},
          xAxis: {
            data: this.memTrendXArray
          },
          yAxis: {
            axisLabel: {
              formatter: '{value} %'
            }
          },
          series: [{
            symbol: "none",
            name: 'Mem',
            type: 'line',
            smooth: true,
            data: this.memTrendArray
          }]
        });
      },
      timeStrFormat(val) {
        if (val < 10) {
          return `0${val}`;
        } else {
          return `${val}`;
        }
      },
      updateChart(data) {
        let time = new Date();
        let timeStr = `${this.timeStrFormat(time.getMinutes())}:${this.timeStrFormat(time.getSeconds())}`;
        this.memTrendXArray.push(timeStr);
        this.memTrendXArray.shift();
        this.memTrendArray.push(data);
        this.memTrendArray.shift();
        window.memTrendchart.setOption({
          xAxis: {
            data: this.memTrendXArray
          },
          series: [{
            name: 'Mem',
            data: this.memTrendArray
          }]
        });
      },
      boardControl(id, code) {
        let params = {
          id,
          code
        }

        if (id == "dev0") {
          this.control.bLedReq = true;
        } else if (id == "dev1") {
          this.control.rLedReq = true;
        }

        this.axios({
          method: "post",
          url: "/cgi-bin/board_control",
          timeout: 1500,
          data: params,
          responseType: "json"
        }).then(data => {
          if (id == "dev0") {
            this.control.bLedReq = false;
          } else if (id == "dev1") {
            this.control.rLedReq = false;
          }
          if (data.data.code == 0) {
            this.getData();
          } else {
            //handle error
          }
        }).catch(() => {
          if (id == "dev0") {
            this.control.bLedReq = false;
          } else if (id == "dev1") {
            this.control.rLedReq = false;
          }
        });
      },
      originDataToHuman(val) {
        if (val > 1024 * 1024 * 1024) {
          return (val / 1024 / 1024 / 1024).toFixed(2) + "G";
        } else if (val > 1024 * 1024) {
          return (val / 1024 / 1024).toFixed(2) + "M";
        } else if (val > 1024) {
          return (val / 1024).toFixed(2) + "K";
        } else {
          return (val) + "B";
        }
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
      ramTotalH: function () {
        return this.originDataToHuman(this.basicInfo.id0);
      },
      ramUsedH: function () {
        return this.originDataToHuman(this.basicInfo.id1);
      },
      norTotalH: function () {
        return this.originDataToHuman(this.basicInfo.id6);
      },
      norUsedH: function () {
        return this.originDataToHuman(this.basicInfo.id7);
      },
      sdTotalH: function () {
        return this.originDataToHuman(this.basicInfo.id8);
      },
      sdUsedH: function () {
        return this.originDataToHuman(this.basicInfo.id9);
      },
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
      },
      bLedStat: function () {
        return this.basicInfo.id14;
      },
      rLedStat: function () {
        return this.basicInfo.id15;
      },
      serverRunTime: function () {
        let days = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;
        let run_time = this.basicInfo.id18;
        seconds = run_time;
        if (seconds > 59) {
          minutes = seconds / 60;
          seconds = seconds % 60;
          if (minutes > 59) {
            hours = minutes / 60;
            minutes = minutes % 60;
            if (hours > 23) {
              days = hours / 24;
              hours = hours % 24;
            }
          }
        }
        return `${parseInt(days)}天 ${parseInt(hours)}时 ${parseInt(minutes)}分 ${parseInt(seconds)}秒`;
      },
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

  .ant-tag {
    font-size: 16px;
  }
</style>