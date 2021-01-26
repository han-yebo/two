<template>
  <div class="big">
    <p class="p1">首页</p>
    <ul>
      <li class="l1">
        <p class="p2">188</p>
        <p><i class="el-icon-user-solid"></i>
        用户总数
        </p>
      </li>
      <li class="l2">
        <p class="p2">297</p>
        <p><i class="el-icon-s-goods"></i>
        商品总数
        </p>
      </li>
      <li class="l3">
        <p class="p2">241</p>
        <p><i class="el-icon-s-order"></i>
        订单总数
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.big{
  width: 100%;
  height: 100%;
  padding: 15px 30px;
}
.p1{
  font-size: 30px;
  margin-bottom: 20px;
}
ul{
  display: flex;
  list-style: none;
  justify-content: space-between;
  li{
    text-align: center;
    width: 350px;
    // height: 100px;
    color: #fff;
    padding: 50px 0;
    .p2{
      font-size: 30px;
    }
  }
  .l1{
    background: #F0B45F;
  }
  .l2{
    background: #6BBE6B;
  }
  .l3{
    background: #5DB8D2;
  }
}
</style>