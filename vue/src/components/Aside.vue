<!--
 * @Author: suzhenghui 343196323@qq.com
 * @Date: 2023-12-01 20:52:16
 * @LastEditors: 苏征辉 343196323@qq.com
 * @Description: 侧边栏组件
-->
<template>
  <el-menu
    :default-active="this.path"
    router
    style="width: 200px; height: 100%; min-height: calc(100vh - 40px)"
    unique-opened
  >
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 11px 0;
      "
    >
      <img alt="" src="@/assets/swust.jpg" style="width: 60px" />
    </div>
    <el-menu-item index="/home">
      <el-icon>
        <house />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu v-if="this.judgeIdentity() !== 0" index="2">
      <template #title>
        <el-icon>
          <user />
        </el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item v-if="this.judgeIdentity() !== 0" index="/stuInfo"
        >学生信息</el-menu-item
      >
      <el-menu-item v-if="this.judgeIdentity() === 2" index="/dormManagerInfo"
        >宿管信息</el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu v-if="this.judgeIdentity() !== 0" index="3">
      <template #title>
        <el-icon>
          <coin />
        </el-icon>
        <span>宿舍管理</span>
      </template>
      <el-menu-item v-if="this.judgeIdentity() !== 0" index="/buildingInfo"
        >楼宇信息</el-menu-item
      >
      <el-menu-item v-if="this.judgeIdentity() !== 0" index="/roomInfo"
        >房间信息</el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu v-if="this.judgeIdentity() !== 0" index="4">
      <template #title>
        <el-icon>
          <message />
        </el-icon>
        <span>信息管理</span>
      </template>
      <el-menu-item v-if="this.judgeIdentity() === 2" index="/noticeInfo"
        >公告信息</el-menu-item
      >
      <el-menu-item v-if="this.judgeIdentity() !== 0" index="/repairInfo"
        >报修信息</el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu v-if="this.judgeIdentity() !== 0" index="5">
      <template #title>
        <el-icon>
          <pie-chart />
        </el-icon>
        <span>申请管理</span>
      </template>
      <el-menu-item v-if="this.judgeIdentity() !== 0" index="/adjustRoomInfo"
        >调换宿舍</el-menu-item
      >
    </el-sub-menu>
    <el-menu-item v-if="this.judgeIdentity() === 0" index="/myRoomInfo">
      <el-icon>
        <school />
      </el-icon>
      <span>我的宿舍</span>
    </el-menu-item>
    <el-menu-item v-if="this.judgeIdentity() === 0" index="/applyChangeRoom">
      <el-icon>
        <takeaway-box />
      </el-icon>
      <span>申请调宿</span>
    </el-menu-item>
    <el-menu-item v-if="this.judgeIdentity() === 0" index="/applyRepairInfo">
      <el-icon>
        <set-up />
      </el-icon>
      <span>报修申请</span>
    </el-menu-item>
    <el-menu-item index="/selfInfo">
      <el-icon>
        <setting />
      </el-icon>
      <span>个人信息</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import request from "@/utils/request";
import { ElMessage } from "element-plus";

export default {
  name: "Aside",
  data() {
    return {
      user: {},
      identity: "",
      path: this.$route.path,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      request.get("/main/loadIdentity").then((res) => {
        if (res.code !== "0") {
          ElMessage({
            message: "用户会话过期",
            type: "error",
          });
          sessionStorage.clear();
          request.get("/main/signOut");
        }
        window.sessionStorage.setItem("identity", JSON.stringify(res.data));
        this.identity = res.data;
      });
      request.get("/main/loadUserInfo").then((result) => {
        if (result.code !== "0") {
          ElMessage({
            message: "用户会话过期",
            type: "error",
          });
          request.get("/main/signOut");
          sessionStorage.clear();
          this.$router.replace({ path: "/login" });
        }
        window.sessionStorage.setItem("user", JSON.stringify(result.data));
        this.user = result.data;
      });
    },
    judgeIdentity() {
      if (this.identity === "stu") {
        return 0;
      } else if (this.identity === "dormManager") {
        return 1;
      } else return 2;
    },
  },
};
</script>

<style scoped>
.icon {
  margin-right: 6px;
}

.el-sub-menu .el-menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0 45px;
  min-width: 199px;
}
</style>