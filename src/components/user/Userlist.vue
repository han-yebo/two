<template>
  <div class="big">
    <div class="box">
      <p class="p1">用户管理</p>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="createTime" label="注册时间">
        <template slot-scope="scope">{{scope.row.createTime | dateFormat}}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.pagenum"
      :page-sizes="[3, 5, 10, 15]"
      :page-size="this.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      pagesize: 10,
      pagenum: 1,
      total: 0
    };
  },
  methods: {
    get() {
      this.$http.index(this.pagesize, this.pagenum).then(res => {
        console.log(res);
        this.list = res.data.data.list;
        this.total = res.data.data.total;
      });
    },

    handleSizeChange(now) {
      this.pagesize = now;
      this.get();
    },
    handleCurrentChange(n) {
      this.pagenum = n;
      this.get();
    }
  },
  mounted() {
    this.get();
  }
};
</script>

<style>
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
</style>