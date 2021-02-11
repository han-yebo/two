<template>
  <div class="big">
    <div class="box">
      <p class="p1">订单详情</p>
    </div>
    <div class="box1">
      <p class="p2">
        <span class="sp1">订单号：</span>
        <span class="sp2">{{list.orderNo}}</span>
      </p>
      <p class="p2">
        <span class="sp1">创建时间：</span>
        <span class="sp2">{{list.createTime}}</span>
      </p>
      <p class="p2">
        <span class="sp1">收件人：</span>
        <span class="sp2">{{this.a}}</span>
      </p>
      <p class="p2">
        <span class="sp1">订单状态：</span>
        <span class="sp2">{{list.statusDesc}}</span>
      </p>
      <p class="p2">
        <span class="sp1">支付方式：</span>
        <span class="sp2">{{list.paymentTypeDesc}}</span>
      </p>
      <p class="p2">
        <span class="sp1">订单金额：</span>
        <span class="sp2">￥{{list.payment}}</span>
      </p>
    </div>
    <el-table :data="info" style="width: 100%">
      <el-table-column prop="date" label="商品图片" width="180">
      </el-table-column>
      <el-table-column prop="productName" label="商品信息" width="180"></el-table-column>
      <el-table-column prop="currentUnitPrice" label="单价"></el-table-column>
      <el-table-column prop="quantity" label="数量"></el-table-column>
      <el-table-column prop="totalPrice" label="合计"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      info: [],
      a: {}
    };
  },
  mounted() {
    let a = this.$route.params.a;
    this.$http.od(a).then(res => {
      console.log(res);
      this.list = res.data.data;
      let arr = [];
      arr.push(
        res.data.data.shippingVo.receiverName,
        res.data.data.shippingVo.receiverProvince,
        res.data.data.shippingVo.receiverCity,
        res.data.data.shippingVo.receiverAddress
      );
      this.a = arr.join();
      this.info = res.data.data.orderItemVoList
    });
  },
  methods: {}
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
.box1 {
  padding: 10px 40px;
}
.sp1 {
  font-weight: 600;
}
.p2 {
  margin-bottom: 30px;
}
</style>