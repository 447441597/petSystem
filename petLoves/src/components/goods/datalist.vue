<template>
     <el-table
    :data="data"
    style="width: 100%">
    <el-table-column
      label="名称"
      prop="name"
      width="180">
    </el-table-column>
    <el-table-column
      label="品类"
      prop="type"
      width="180">
    </el-table-column>
      <el-table-column
      label="材质或制作方法"
      prop="material"
      width="180">
    </el-table-column>
     <el-table-column
      label="适应规格"
      prop="applyGuige"
      width="180">
    </el-table-column>
     <el-table-column
      label="专属规格"
      prop="exGuige"
      width="180">
    </el-table-column>
     <el-table-column
      label="包装规格"
      prop="Packing"
      width="180">
    </el-table-column>
     <el-table-column
      label="口味"
      prop="taste"
      width="180">
    </el-table-column>
     <el-table-column
      label="特殊功用"
      prop="specialFunc"
      width="180">
    </el-table-column>
     <el-table-column
      label="产地"
      prop="addr"
      width="180">
    </el-table-column>
     <el-table-column
      label="出厂日期"
      prop="keepDate"
      width="180">
    </el-table-column>
     <el-table-column
      label="保质期"
      prop="productionDate"
      width="180">
    </el-table-column>
     <el-table-column
      label="供应商"
      prop="provider"
      width="180">
    </el-table-column>
     <el-table-column
      label="特色说明"
      prop="features"
      width="180">
    </el-table-column>
     <el-table-column
      label="价格"
      prop="price"
      width="180">
    </el-table-column>
     <el-table-column
      label="图片"
      prop="images"
      width="180">
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
         <!-- <el-popover
            width="160"
            v-model="visible2" >
            <p>确定删除这个学生？</p>
             <div style="text-align: right; margin: 0">
             <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
             <el-button type="primary" size="mini"   @click="handleDelete(scope.$index, scope.row)">确定</el-button>
             </div>
             <el-button slot="reference"  type="danger" size="mini">删除</el-button>
          </el-popover> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
data() {
    return {
    data:[]
    };
  },
  created(){
     axios({
        method: "get",
        url: "goods/data"
      }).then(res => {
       console.log(res.data)
       this.data=res.data
      });
  }
}

</script>

<style>

</style>
