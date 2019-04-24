<template>
    <div>
  <template>
  <el-table
    :data="orders"
    height="250"
    border
    type="_id"
    style="width: 100%">
    <el-table-column
      prop="petOwns.nickname"
      label="客户"
      width="180">
    </el-table-column>
    <el-table-column
      prop="shops.name"
      label="门店"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
    <el-table-column
      label="订单信息">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">详细信息</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="~~(pagination.total)" @current-change="pageChange">
  </el-pagination>

  <el-dialog
  title="商品信息"
  :visible.sync="dialogVisible"
  width="30%">
  <div v-if="info">
    <p><span>客户姓名：</span><span>{{info.petOwns.truename}}</span></p>
    <p><span>客户电话：</span><span>{{info.petOwns.phone}}</span></p>    
    <p><span>宠物名字：</span><span>{{info.petOwns.nickname}}</span></p>
    <p><span>店铺名字：</span><span>{{info.shops.name}}</span></p>
    <p><span>店铺位置：</span><span>{{info.petOwns.address}}</span></p>
    <h3>服务信息</h3>
    <p><span>内容：</span><span>{{info.services.name}}</span></p>
    <p><span>时长：</span><span>{{info.services.time}}</span></p>
    <p><span>价格：</span><span>{{info.services.price}}</span></p>
    <h4>用户评价</h4>
    <p>{{info.evaluate}}</p>
    </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

</div>
</template>

    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("ordrers");
export default {
  data(){
    return {
      dialogVisible:false,
      info:'',
    }
  },
  computed: {
    ...mapState(["orders",'pagination'])
  },
  methods: {
    // ...mapActions(["getOrders"]),
    pageChange(i){
      console.log(i,'i')
      console.log(this.pagination)
    },
    handleClick(row){
      // console.log(row,'详细信息');
      this.info = row;
      console.log(this.info)
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
</style>