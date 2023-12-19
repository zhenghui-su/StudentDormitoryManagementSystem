/*
 * @Author: suzhenghui 343196323@qq.com
 * @Date: 2023-11-25 18:39:42
 * @LastEditors: suzhenghui 343196323@qq.com
 * @Description: 登录界面vue的script内容
 */
import request from "@/utils/request";

const { ElMessage } = require("element-plus");
export default {
    name: "Login",
    data() {
        return {
            identity: "",
            form: {
                username: "",
                password: "",
                identity: "",
            },
            /** 规则: 必填项,提示信息,失去焦点后验证规则 */
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                ],
                password: [{ required: true, message: "请输入密码", trigger: "blur" }],
                identity: [{ required: true, message: "请选择身份", trigger: "blur" }],
            },
        };
    },
    computed: {
        /** disabled属性:收集表单,如果没有填写表单,登录按钮不解禁 */
        disabled() {
            const { username, password, identity } = this.form;
            return Boolean(username && password && identity);
        },
    },
    methods: {
        /** 登陆方法 */
        login() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.identity = this.form.identity;
                    request.post("/" + this.identity + "/login", this.form).then((res) => {
                        if (res.code === "0") {
                            ElMessage({
                                message: "登陆成功",
                                type: "success",
                            });
                            // 登陆成功跳转主页
                            window.sessionStorage.setItem("user", JSON.stringify(res.data));
                            window.sessionStorage.setItem("identity", JSON.stringify(this.form.identity));
                            this.$router.replace({ path: "/home" });
                        } else {
                            /** 错误信息 */
                            ElMessage({
                                message: res.msg,
                                type: "error",
                            });
                        }
                    });
                }
            });
        },
    },
};