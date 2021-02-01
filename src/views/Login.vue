<template>
  <div class="about">
    <div class="big">
      <p>欢迎登录-MMALL管理系统</p>
      <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
      <el-input v-model="input1" placeholder="请输入内容" size="small" type="password"></el-input>
      <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "admin",
      input1: "admin"
    };
  },
  methods: {
    login() {
      let obj = { username: this.input, password: this.input1 };
      this.$http.login(obj).then(res => {
        console.log(res);
        let msg = res.data.msg;
        if (msg == "登录成功") {
          this.$router.push("/home");
          localStorage.setItem('token',"aa")
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
  position: relative;
  background: #eee;
}
.big {
  padding: 15px;
  background: #fff;
  width: 400px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-input {
  margin-top: 15px;
}
.el-button {
  margin-top: 10px;
  width: 100%;
}
</style>