<template>
  <div class="big">
    <div class="box">
      <p class="p1">品类管理</p>
      <el-button type="primary" icon="el-icon-plus" @click="$router.push('/home/add')">添加商品</el-button>
    </div>
    <p>当前商品分类ID：{{this.id}}</p>
    <el-table :data="list" style="width: 100%" stripe>
      <el-table-column prop="id" label="品类ID"></el-table-column>
      <el-table-column prop="name" label="品类名称"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span class="sp1" id="sp1" @click="xiu(scope.row.id)">修改名称</span>
          <span class="sp1" @click="cha(scope.row.id)">查看其子类品类</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="box1" v-show="flag">
      <p>请输入新的品类名称</p>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      flag: false,
      input: "",
      id:0
    };
  },
  methods: {
    get() {
      this.$http.cate(0).then(res => {
        console.log(res);
        this.list = res.data.data;
      });
    },
    xiu(id) {
      this.flag=true
    },
    cha(id){
      this.id = id
      this.$http.cate(this.id).then( (res) => {
        console.log(res)
        this.list = res.data.data
      })
    }
  },
  mounted() {
    this.get();
  }
};
</script>

<style lang="scss">
.big {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
}
.box {
  display: flex;
  justify-content: space-between;
}
.p1 {
  font-size: 30px;
}
.sp1 {
  color: rgb(141, 198, 245);
}
#sp1 {
  margin-right: 8px;
}
.box1{
  width: 400px;
  height:150px;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 0 2px #ccc;
}
</style>