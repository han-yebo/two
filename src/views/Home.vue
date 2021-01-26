<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <p class="p1">
          <span class="sp1">HAPPY</span>
          <span class="sp2">MMALL</span>
        </p>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home/user">
            <i class="el-icon-s-operation"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/goods">商品管理</el-menu-item>
              <el-menu-item index="/home/category">品类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>订单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/order">订单管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/userlist">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-container>
          <el-header>
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-submenu index="1">
                <template slot="title">欢迎，admin</template>
                <el-menu-item index="1-1" @click="tui">退出</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-header>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    tui(){
      this.$router.push('/login')
    }
  }
};
</script>
<style lang="scss" scoped>
.home,
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
}

.el-aside {
  background-color: #545c64;
}

.el-main {
  background-color: #e6e6ee;
  padding: 0;
}
.p1 {
  padding: 10px;
}
.sp1 {
  font-size: 24px;
  color: #2dafc2;
}
.sp2 {
  font-size: 24px;
  color: #fff;
}

</style>
