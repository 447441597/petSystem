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
        <el-button v-if="(scope.row.status) == '服务未完成'" @click="handleClickok(scope.row)"  type="success" size='small' icon="el-icon-check">完成</el-button>
        
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <!-- 分页 
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination
-->
  <el-pagination
    layout="prev, pager, next"
    :total="~~(pagination.total)"
     :page-size=5
     @prev-click="prev"
     @next-click="next"
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
    prev() {
      let playload = {
        page: this.pagination.curpage-1,
        rows: this.pagination.eachpage,
        ordersType: 0
      };
      console.log(playload, "playload");
      this.getOrders(playload);
    },
    next() {
      let playload = {
        page: ~~(this.pagination.curpage)+1,
        rows: this.pagination.eachpage,
        ordersType: 0
      };
      console.log(playload, "playload");
      this.getOrders(playload);
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