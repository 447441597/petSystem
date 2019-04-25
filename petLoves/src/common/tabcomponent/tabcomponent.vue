<template>
    <div>
      
  <template>
    <el-button style="float: left; padding: 3px" type="success" round @click="unfinished">未完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round @click="finish">已完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round @click="allOrders">全部订单</el-button> 
            
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
        <el-button v-if="(scope.row.status) == '服务未完成'" @click="handleClickok(scope.row)"  type="success" size='small' icon="el-icon-check">完成</el-button>
        
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <!-- 分页 -->
  <el-pagination
    layout="prev, pager, next"
    :total="~~(ordersLength)"
     :page-size=3
     :current-page="~~(pagination.curpage)" 
     @current-change="pageChange">
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
import axios from "axios";
const { mapState, mapActions, mapMutations} = createNamespacedHelpers("ordrers");
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisibleok: false,
      info: "",
      // orders: []
    };
  },
  created(){
    console.log(this.orders,'///////////////')
  },
  // updated(){
  //   console.log(this.ordersData,'updataupdataupdataupdataupdataupdata')
  //   this.orders = this.ordersData[0]
  // },
  computed: {
    ...mapState(["pagination", "ordersData", "ordersLength", "tab","orders"])
  },
  methods: {
    ...mapActions(["getOrders", "getOrdersStatus"]),
    ...mapMutations(["setOrsers"]),
    unfinished() {
      // 未完成订单
      if (this.tab == "服务订单") {
        let playload = {
          ordersType: 1,
          sta: 1
        };
        this.getOrdersStatus(playload); 
      }
    },
    finish() {
      // 完成订单
      if (this.tab == "服务订单") {
      // console.log("完成订单")
        let playload = {
          ordersType: 2,
          sta: 1
        };
        this.getOrdersStatus(playload);
        // this.orders = ordersData[]
        console.log(this.ordersData,this.ordersLength,"ordersDataordersData")
      }
    },
    allOrders() {
      // 全部订单
      if (this.tab == "服务订单") {
        let playload = {
          ordersType: 0,
          sta: 1
        };
        this.getOrdersStatus(playload);
      }
    },
    pageChange(i) {
      console.log(i, "i");
      // console.log(this.pagination)

      // console.log(playload, "playload");
      // this.getOrders(playload);
      // this.orders = this.ordersData[i - 1];
      this.setOrsers(i);
      console.log(this.orders, "}}}}}}}}}}}}}}");
    },
    handleClick(row) {
      // console.log(row,'详细信息');
      this.info = row;
      // console.log(this.info)
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
          axios({
            method: "put",
            url: "/orders/" + row._id,
            data: {
              status: "服务已完成"
            }
          }).then(data => {
            let playload = {
              ordersType: 1
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