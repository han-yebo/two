<template>
  <div class="big">
    <div class="box">
      <p class="p1">订单管理</p>
    </div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="region">
          <el-option label="按订单号查询" value="shanghai" size="small"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user" placeholder="订单号" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" style="width: 100%" stripe>
      <el-table-column prop="orderNo" label="订单号"></el-table-column>
      <el-table-column prop="receiverName" label="收件人"></el-table-column>
      <el-table-column prop="statusDesc" label="订单状态"></el-table-column>
      <el-table-column prop="payment" label="订单总价"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template>
          <span class="ck">查看</span>
        </template>
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
      region: "",
      user: "",
      list: [],
      pagenum: 1,
      pagesize: 10,
      total: 0
    };
  },
  methods: {
    onSubmit() {
      this.$http.orderS("search", this.pagenum, this.user).then(res => {
        console.log(res);
        let msg = res.data.msg
        if (msg == '订单不存在') {
          alert("订单不存在");
        } else {
          this.list = res.data.data.list;
          this.total = res.data.data.total;
        }
      });
    },
    get() {
      this.$http.order(this.pagenum).then(res => {
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
.ck {
  color: rgb(115, 188, 248);
}
</style>