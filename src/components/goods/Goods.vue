<template>
  <div class="big">
    <div class="box">
      <p class="p1">商品管理</p>
      <el-button type="primary" icon="el-icon-plus" @click="$router.push('/home/set')">添加商品</el-button>
    </div>

    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="region" size="small">
          <el-option label="按商品id查询" value="shanghai"></el-option>
          <el-option label="按商品名称查询" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user" placeholder="关键词" size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" style="width: 100%" stripe>
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="name" label="信息" width="180"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <div class="box1">
            <p class="pp">
              <span v-if="scope.row.status == 1">在售</span>
              <span v-else>已下架</span>
            </p>
            <p>
              <span v-if="scope.row.status == 1" class="sp2" @click="sx(scope.row.id,scope.row.status)">下架</span>
              <span v-else class="sp2" @click="sx(scope.row.id,scope.row.status)">上架</span>
            </p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span class="sp1 ck" @click="tz(scope.row.id)">查看</span>
          <span class="sp1" @click="bj(scope.row.id)">编辑</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="this.total"
      :current-page="this.pagenum"
      :page-size="this.pagesize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
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
      pagesize: 10,
      pagenum: 1,
      total: 0,
      status:1
    };
  },
  methods: {
    onSubmit() {
      this.$http.search("search",this.pagenum,this.user).then( (res) => {
        console.log(res)
      })
    },
    get() {
      let obj = { pageNum: this.pagenum };
      this.$http.goods(obj).then(res => {
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
    },
    sx(a,b){
      let id = a
      let st = b
      if(st == 1){
        this.status = 2
      }else if(st == 2){
        this.status == 1
      }
      if(status == 1){
        confirm("确认下架该商品？")
      }else if(status == 2){
        confirm("确认上架该商品？")
      }
      this.$http.set(id,this.status).then( (res) =>{
        console.log(res)
        confirm('修改产品销售状态成功')
        this.get()
      })
    },
    tz(id){
      this.$router.push(`/home/detail?id=${id}`)
    },
    bj(id){
      this.$router.push(`/home/set?id=${id}`)
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
.sp1 {
  color: rgb(139, 174, 226);
}
.ck {
  margin-right: 5px;
}
.sx {
  display: flex;
}
.sp2 {
  background: rgb(247, 188, 62);
  color: #fff;
  border-radius: 5px;
  display: inline-block;
  padding: 0 4px;
}
.box1 {
  display: flex;
  .pp {
    margin-right: 10px;
  }
}
</style>