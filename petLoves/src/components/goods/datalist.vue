<template>
  <el-table :data="show" style="width: 100%">
    <el-table-column label="名称" prop="goodsName" width="180"></el-table-column>
    <el-table-column label="品类" prop="type" width="180"></el-table-column>
    <el-table-column label="材质或制作方法" prop="material" width="180"></el-table-column>
    <el-table-column label="适应规格" prop="applyGuige" width="180"></el-table-column>
    <el-table-column label="专属规格" prop="exGuige" width="180"></el-table-column>
    <el-table-column label="包装规格" prop="Packing" width="180"></el-table-column>
    <el-table-column label="口味" prop="taste" width="180"></el-table-column>
    <el-table-column label="特殊功用" prop="specialFunc" width="180"></el-table-column>
    <el-table-column label="产地" prop="addr" width="180"></el-table-column>
    <el-table-column label="出厂日期" prop="keepDate" width="180"></el-table-column>
    <el-table-column label="保质期" prop="productionDate" width="180"></el-table-column>
    <el-table-column label="供应商" prop="provider" width="180"></el-table-column>
    <el-table-column label="特色说明" prop="features" width="180"></el-table-column>
    <el-table-column label="价格" prop="price" width="180"></el-table-column>
    <el-table-column label="库存" prop="number" width="180"></el-table-column>
    <el-table-column label="图片" width="180">
        <template slot-scope="scope">
        <img :src="src+scope.row.images[0]" width="80" height="80"/>
         </template>
    </el-table-column>
    <el-table-column label="小图" width="180">
        <template slot-scope="scope">
        <img :src="src+scope.row.miniimg[0]" width="80" height="80"/>
         </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">修改</el-button>
        <el-button size="mini" type="danger" @click="del(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("goods");
export default {
  data() {
    return {
    src:'http://localhost:3005/images/',
      visible2: false
    };
  },
  computed: {
    ...mapState(["show"])
  },
  methods: {
    ...mapActions(["getshow"]),
    ...mapMutations(["setVisible"]),
    del(index, row) {
      const h = this.$createElement;
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        //   message: h('p', null, [
        //     h('p', { style: 'color: red;font-size:20px' }, '此操作将永久删除该商品, 是否继续?'),
        //     h('p', { style: 'color: red' }, `商品名字:${row.name} `),
        //     h('p', { style: 'color: red' }, `商品类型:${row.type} `),
        //      h('p', { style: 'color: red' }, `商品产地:${row.addr} `)
        //   ]),
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            method: "delete",
            url: "/goods/" + row._id
          }).then(res => {
            this.getshow();
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    ...mapActions(["Updata"]),
    handleEdit(index, row) {
      let id = row._id;
      //   console.log(id)
      this.Updata(id);
      this.setVisible();
    }
  },
  created() {
    this.getshow();
    //  axios({
    //     method: "get",
    //     url: "goods/data"
    //   }).then(res => {
    //    console.log(res.data)
    //    this.data=res.data
    //   });
  }
};
</script>

<style>
</style>
