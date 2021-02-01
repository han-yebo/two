<template>
  <div class="big">
    <h2 v-if="this.id">商品管理--修改商品</h2>
    <h2 v-else>商品管理--添加商品</h2>
    <div class="box">
      <el-form ref="form" label-width="80px">
        <el-form-item label="商品名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input v-model="describe"></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
          <el-select v-model="region" placeholder="请选择活动区域" @change="change($event)">
            <el-option
              :label="item.name"
              :value="item.id"
              v-for="(item,key) in region_child"
              :key="key"
            ></el-option>
          </el-select>
          <el-select placeholder="请选择活动区域" v-if="flag" v-model="region1" @change="ch($event)">
            <el-option
              :label="item.name"
              :value="item.id"
              v-for="(item,key) in region_child1"
              :key="key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input-number size="small" v-model="num"></el-input-number>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input-number size="small" v-model="num1"></el-input-number>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :http-request="afterRead"
            :show-file-list="false"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">请上传图片</div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品详情">
          <quill-editor v-model="detail"></quill-editor>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary" class="btn" @click="add">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      ids: "",
      ids1: "",
      flag: false,
      name: "",
      describe: "",
      region: "",
      region1: "",
      region_child: [],
      region_child1: [],
      num: "",
      num1: "",
      img: "",
      dialogImageUrl: "",
      dialogVisible: false,
      detail:"",
      action:""
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    this.$http.cate(0).then(res => {
      console.log(res);
      this.region_child = res.data.data;
    });
    this.$http.detail(this.id).then( (res) => {
      console.log(res)
      this.name = res.data.data.name
      this.num = res.data.data.price
      this.num1 = res.data.data.stock
      this.describe = res.data.data.subtitle
      this.detail = res.data.data.detail
      this.ids = res.data.data.parentCategoryId
      this.ids1 = res.data.data.categoryId

    })
  },
  methods: {
    afterRead(e) {
      let content = e.file;
      let data = new FormData();
      data.append("upload_file", content);
      this.$http.Img(data).then(res => {
        console.log(res);
        this.img = res.data.url;
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    change(event) {
      console.log(event);
      this.ids = event;
      if (this.ids) {
        this.flag = true;
        this.$http.cate(this.ids).then(res => {
          console.log(res);
          this.region_child1 = res.data.data;
        });
      } else {
        this.flag = false;
      }
    },
    ch(event){
      this.ids1 = event
    },
    add(){
      this.$http.add(this.ids1,this.name,this.describe,this.img,this.detail,this.num,this.num1,1).then( (res) => {
        console.log(res)
        alert('更新产品成功')
        this.$router.push('/home/goods')
      })
    }
  }
};
</script>

<style lang="scss">
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
.el-upload {
  background: #e6e6ee;
  border: none;
  width: 0;
  height: 0;
  line-height: 0;
}
.quill-editor {
  height: 200px;
}
.box {
  padding: 30px 0;
}
.btn {
  margin: 60px 0;
}
</style>