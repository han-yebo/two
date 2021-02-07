<template>
  <div class="big">
    <div class="box">
      <p class="p1">品类管理--添加品类</p>
    </div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="所属品类">
        <el-select v-model="region" placeholder="请选择活动区域" @change="ch($event)">
          <el-option label="/所有" value="0"></el-option>
          <el-option :label="'/所有/'+item.name" :value="item.id" v-for="(item,key) in list" :key="key" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="品类名称">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      region:"",
      list:[],
      id:0
    };
  },
  methods:{
    onSubmit(){
      this.$http.add1(this.id,this.name).then( (res) =>{
        console.log(res)
        alert('商品添加成功')
        this.$router.push('/home/category')
      })
    },
    get(){
      this.$http.cate(0).then( (res) =>{
        console.log(res)
        this.list = res.data.data
      })
    },
    ch(event){
      this.id = event
      console.log(this.id)
    }
  },
  mounted(){
    this.get()
  }
};
</script>

<style lang="scss" scoped>
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