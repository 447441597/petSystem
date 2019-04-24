<template>
  <div>
    <div style="margin-top: 5px;width: 600px;">
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="商品名称" value="goodsName"></el-option>
          <el-option label="商品类型" value="type"></el-option>
          <el-option label="商品价格" value="price"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="serachstudent"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers} from 'vuex'
const { mapActions, mapState, mapMutations} = createNamespacedHelpers("goods")
import axios from "axios"
export default {
     data() {
    return {
      select: '',
      input5:"",
     }
  },
  methods:{
        ...mapActions(["getshow"]),
        serachstudent(){
         console.log(this.select)
         console.log(this.input5)   
        let type = this.select;
        let value = this.input5;
        this.getshow({type,value})
        }
  }
};
</script>

<style>
 .el-select .el-input {
    width: 120px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
