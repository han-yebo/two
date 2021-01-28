<template>
  <div class="big">
    <div class="box">
      <p class="p1">商品管理</p>
      <el-button type="primary" icon="el-icon-plus">添加商品</el-button>
    </div>

    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="region" placeholder="活动区域" size="small">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user" placeholder="审批人" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" style="width: 100%" stripe>
      <el-table-column prop="date" label="id" width="180"></el-table-column>
      <el-table-column prop="name" label="信息" width="180"></el-table-column>
      <el-table-column prop="address" label="价格"></el-table-column>
      <el-table-column prop="address" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template>
          <span>查看</span>
          <span>编辑</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="this.total"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      region: "",
      user: "",
      list: [],
      pagesize: 10,
      pagenum: 1,
      total: 0
    };
  },
  methods: {
    onSubmit() {},
    get() {
      let obj = { pageSize: this.pagesize, pageNum: this.pagenum };
      this.$http.goods(obj).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.get();
  }
};
</script>

<style lang="scss" scoped>
.big {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.box {
  display: flex;
  justify-content: space-between;
}
.p1 {
  font-size: 30px;
}
</style>