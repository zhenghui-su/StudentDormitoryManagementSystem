<!--
 * @Author: suzhenghui 343196323@qq.com
 * @Date: 2023-11-26 20:25:35
 * @LastEditors: 苏征辉 343196323@qq.com
 * @Description: 首页
-->
<template>
  <el-card style="margin: 15px; min-height: calc(100vh - 80px)">
    <!-- 正部-->
    <div
      style="
        display: flex;
        width: 100%;
        margin-top: 40px;
        align-items: center;
        justify-content: center;
      "
    >
      <!--   左侧 宿舍通告-->
      <div style="margin-right: 5%">
        <span
          style="
            font-size: 22px;
            display: block;
            margin-bottom: 30px;
            margin-left: 10px;
          "
          >宿舍通告</span
        >
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities.slice(0, 8)"
            :key="index"
            :timestamp="activity.releaseTime"
          >
            <span style="font-size: 15px">{{ activity.title }}</span
            ><br />
          </el-timeline-item>
        </el-timeline>
      </div>
      <!--   中部-->
      <div style="height: 588px">
        <span
          style="
            font-size: 22px;
            display: block;
            margin-bottom: 30px;
            margin-left: 10px;
          "
          >宿舍学生人数分布</span
        >
        <home_echarts />
      </div>
      <!--  右侧-->
      <div style="margin-left: 5%">
        <el-row :gutter="20" class="topInfo">
          <el-col>
            <div id="stuNumDiv" class="el-colDiv">
              <div id="ssv1-main-text" class="nowDiv">实时</div>
              <span class="title">学生统计</span><br />
              <span class="digital">{{ this.studentNum }}</span
              ><br />
              <span class="last-span">当前分类总记录数</span>
            </div>
          </el-col>
          <el-col>
            <div id="haveRoomDiv" class="el-colDiv">
              <div id="ssv2-main-text" class="nowDiv">实时</div>
              <span class="title">住宿人数</span><br />
              <span class="digital">{{ this.haveRoomStudentNum }}</span
              ><br />
              <span class="last-span">当前分类总记录数</span>
            </div>
          </el-col>
          <el-col>
            <div id="repairNum" class="el-colDiv">
              <div id="ssv3-main-text" class="nowDiv">实时</div>
              <span class="title">报修统计</span><br />
              <span class="digital">{{ this.repairOrderNum }}</span
              ><br />
              <span class="last-span">当前分类总记录数</span>
            </div>
          </el-col>
          <el-col>
            <div id="emptyRoom" class="el-colDiv">
              <div id="ssv4-main-text" class="nowDiv">实时</div>
              <span class="title">空宿舍统计</span><br />
              <span class="digital">{{ this.noFullRoomNum }}</span
              ><br />
              <span class="last-span">当前分类总记录数</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-card>
</template>

<script src="@/assets/js/Home.js"></script>
<style scoped>
@import "../assets/css/Home.css";
</style>