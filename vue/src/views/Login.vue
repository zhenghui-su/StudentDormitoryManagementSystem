<!--
 * @Author: suzhenghui 343196323@qq.com
 * @Date: 2023-11-25 14:08:47
 * @LastEditors: 苏征辉 343196323@qq.com
 * @Description: 登录界面
-->
<template>
  <div class="login-container">
    <div style="width: 400px; margin: 150px auto">
      <div
        style="
          color: white;
          font-size: 30px;
          text-align: center;
          padding: 30px 0;
        "
      >
        登陆
      </div>
      <el-form ref="form" :model="form" :rules="rules" size="large">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            clearable
            prefix-icon="avatar"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item :model="form" prop="identity">
          <el-radio v-model="form.identity" label="stu" style="color: skyblue"
            >学生</el-radio
          >
          <el-radio
            v-model="form.identity"
            label="dormManager"
            style="color: skyblue"
            >宿管</el-radio
          >
          <el-radio v-model="form.identity" label="admin" style="color: skyblue"
            >系统管理员</el-radio
          >
        </el-form-item>
        <el-form-item>
          <el-button
            :disabled="!disabled"
            style="width: 20%; margin: 0 auto"
            type="primary"
            @click="login"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div class="footer">©作者 苏征辉 谢俊邑 杨雨鑫</div>
</template>
<script src="@/assets/js/Login.js"></script>
<style scoped>
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: url("../assets/background.png");
  background-size: 100%;
}

.footer {
  left: 0;
  bottom: 0;
  color: #fff;
  width: 100%;
  position: absolute;
  text-align: center;
  line-height: 30px;
  padding-bottom: 10px;
  text-shadow: #000 0.1em 0.1em 0.1em;
  font-size: 14px;
}

.footer a,
.footer span {
  color: #fff;
}
</style>