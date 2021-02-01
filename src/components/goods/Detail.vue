<template>
  <div class="big">
    <h2>商品详情</h2>
    <div class="box">
      <p>
        <span class="sp1">商品名称</span>
        <span>{{list.name}}</span>
      </p>
      <p>
        <span class="sp1">商品描述</span>
        <span>{{list.subtitle}}</span>
      </p>
      <p>
        <span class="sp1">当前状态</span>
        <span v-if="list.status == 1">在售</span>
        <span v-if="list.status == 2">已下架</span>
      </p>
      <p>
        <span class="sp1">所属分类</span>
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-select placeholder="活动区域"  v-model="region">
              <el-option
                :label="item.name"
                :value="item.id"
                v-for="(item,key) in region_child"
                :key="key"
               
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item>
            <el-select placeholder="请选择活动区域" v-model="region1" >
              <el-option
                :label="item.name"
                :value="item.id"
                v-for="(item,key) in region_child1"
                :key="key"
              ></el-option>
            </el-select>
          </el-form-item> -->
        </el-form>
      </p>
      <p>
        <span class="sp1">商品价格</span>
        <span>{{list.price}}元</span>
      </p>
      <p>
        <span class="sp1">商品库存</span>
        <span>{{list.stock}}件</span>
      </p>
      <p>
        <span class="sp1">商品图片</span>
        <!-- <img :src="list.imageHost" alt=""> -->
      </p>
      <p>
        <span class="sp1">商品详情</span>
        <span v-html="list.detail"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      id: "",
      region1: "",
      region_child:[],
      region_child1:[],
      region: ""
    };
  },
  mounted() {
    let id = this.$route.query.id;
    // console.log(this.id)
    this.$http.detail(id).then(res => {
      console.log(res);
      this.list = res.data.data;
    });
    this.$http.cate(0).then(res => {
      console.log(res);
      this.region_child = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.big {
  padding: 0px 20px;
  width: 100%;
  height: 100%;
  h2 {
    font-size: 30px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
}
.sp1 {
  font-weight: 700;
  margin-right: 20px;
}
.box {
  padding: 30px;
  p {
    margin-bottom: 25px;
    display: flex;
  }
}
</style>