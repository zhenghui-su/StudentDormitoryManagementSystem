<!--
 * @Author: suzhenghui 343196323@qq.com
 * @Date: 2023-11-30 23:18:34
 * @LastEditors: 苏征辉 343196323@qq.com
 * @Description: 首页柱状图组件
-->
<template>
  <div id="echarts-dom" style="width: 650px; height: 500px"></div>
</template>

<script>
import * as echarts from "echarts";
import request from "@/utils/request";

require("echarts/theme/macarons");

export default {
  name: "home_echarts",
  data() {
    return {
      option: {
        barWidth: 35,
        tooltip: {},
        xAxis: {
          name: "栋",
          data: [],
          axisLabel: {
            formatter: "{value} 栋",
          },
        },
        yAxis: {
          name: "人数",
          type: "value",
          axisLabel: {
            formatter: "{value} 人",
          },
        },
        series: [
          {
            name: "人数",
            type: "bar",
            data: [],
          },
        ],
        grid: {
          x: 40,
          y: 40,
          x2: 40,
          y2: 40,
          borderWidth: 10,
          top: "10%",
          bottom: "0%",
          containLabel: true,
        },
      },
      myEcharts: "",
      chartWidth: "",
      chartHeight: "",
    };
  },
  created() {
    this.getBuildingNum();
  },
  mounted() {
    this.createEcharts();
  },
  watch: {
    //观察option的变化
    option: {
      handler(newVal, oldVal) {
        if (this.myEcharts) {
          if (newVal) {
            this.myEcharts.setOption(newVal);
          } else {
            this.myEcharts.setOption(oldVal);
          }
        } else {
          this.createEcharts();
        }
      },
      deep: true, //对象内部属性的监听，关键。
    },
  },
  methods: {
    createEcharts() {
      const chartDmo = document.getElementById("echarts-dom");
      this.myEcharts = echarts.init(chartDmo, null);
      this.myEcharts.setOption(this.option, true);
    },
    getBuildingNum() {
      //xAxis.data
      request.get("/building/getBuildingName").then((res) => {
        if (res.code === "0") {
          this.option.xAxis.data = res.data;
          //series.data
          request
            .get("/room/getEachBuildingStuNum/" + res.data.length)
            .then((result) => {
              if (result.code === "0") {
                this.option.series[0].data = result.data;
              }
            });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>