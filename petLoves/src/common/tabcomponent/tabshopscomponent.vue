<template>
    <div>
  <template>
  <el-table
    :data="orders"
    height="250"
    border
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
        <el-button v-if="(scope.row.status) == '订单未完成'" @click="handleClickok(scope.row)"  type="success" size='small' icon="el-icon-check">完成</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="~~(pagination.total)" @current-change="pageChange">
  </el-pagination>


  <el-dialog
  title="服务信息"
  :visible.sync="dialogVisible"
  width="30%">
  <div v-if="info">
    <p><span>客户姓名：</span><span>{{info.petOwns.truename}}</span></p>
        <p><span>客户电话：</span><span>{{info.petOwns.phone}}</span></p>    
    <p><span>宠物名字：</span><span>{{info.petOwns.nickname}}</span></p>
    <p><span>店铺名字：</span><span>{{info.shops.name}}</span></p>
    <p><span>店铺位置：</span><span>{{info.petOwns.address}}</span></p>
    <h3>商品信息</h3>
    <p><span>名字：</span><span>{{info.goods.type}}</span></p>
    <p><span>产地：</span><span>{{info.goods.addr}}</span></p>
    <p><span>成分：</span><span>{{info.goods.material}}</span></p>
    <p><span>适合于：</span><span>{{info.goods.exGuige}}</span></p>
    <p><span>价格：</span><span>{{info.goods.price}}</span></p>
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
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("ordrers");
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisibleok: false,
      info: ""
    };
  },
  computed: {
    ...mapState(["orders", "pagination"])
  },
  methods: {
    ...mapActions(["getOrders"]),
    pageChange(i) {
      console.log(i, "i");
      // console.log(this.pagination)
      let playload = {
        page: i,
        ordersType: 0
      };
      console.log(playload, "playload");
      this.getOrders(playload);
    },
    handleClick(row) {
      // console.log("详细信息", this.dialogVisible);
      this.info = row;
      this.dialogVisible = true;
    },
    handleClickok(row) {
      // console.log('objecthandleClickokhandleClickok',row._id)
      this.dialogVisibleok = true;
      axios({
        method: "get",
        url: "/orders/users/" + row._id
      }).then(res => {
        // console.log(res.data.status);
        if (res.data.status == 0) {
          this.$alert("用户还没有确认！", "提示");
        } else if (res.data.status == 1) {
          this.$alert("已完成", "提示");
          axios({
            method: "put",
            url: "/orders/" + row._id,
            data: {
              status: "订单已完成"
            }
          }).then(data => {
            let playload = {
              ordersType: 0
            };
            this.getOrders(playload);
            console.log(data, "修改后的");
          });
        }
      });
    }
  }
};
</script>

<style>
</style>