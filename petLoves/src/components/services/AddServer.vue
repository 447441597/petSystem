<template>
  <div style="margin: 15px 0;">
    <el-button type="primary" @click="click">添加服务</el-button>

    <el-dialog title="添加服务" :visible.sync="dialogFormVisible">
      <el-form :model="service">
        <el-form-item label="服务名" :label-width="formLabelWidth">
          <el-input v-model="service.serviceName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务类型" :label-width="formLabelWidth">
          <el-select v-model="service.serverType" placeholder="请选择服务类型">
            <el-option
              v-for="item in serverTypes"
              :key="item.tyName"
              :label="item.typeName"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="适用规格" :label-width="formLabelWidth">
          <el-input v-model="service.applyGuige" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务规格" :label-width="formLabelWidth">
          <el-input v-model="service.serverGuige" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(time, index) in service.time"
          :label="'排期' + index"
          :key="time.key"
          :prop="'time.' + index + '.timeSlot'"
          :label-width="formLabelWidth"
        >
          <el-input v-model="time.timeSlot"></el-input>
          <el-button @click.prevent="removeTime(time)">删除</el-button>
          <el-button @click="addTime">增加排期</el-button>
        </el-form-item>
        <el-form-item></el-form-item>
        <el-form-item label="耗时" :label-width="formLabelWidth">
          <el-input v-model="service.useTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="等级" :label-width="formLabelWidth">
          <el-select v-model="service.level" placeholder="请选择服务类型">
            <el-option
              v-for="item in levels"
              :key="item.assistantphone"
              :label="item.assistantname+item.assistantlevel"
              :value="item.assistantlevel"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="service.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addService">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>



<script>
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
const { mapState, mapActions } = createNamespacedHelpers("services");
export default {
  data() {
    return {
      dialogFormVisible: false,
      service: {
        serviceName: "",
        serverType: "",
        applyGuige: "",
        serverGuige: "",
        useTime: "",
        level: "",
        price: "",
        
        time: [
          {
            timeSlot: ""
          }
        ]
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    // console.log(this.services,"添加")
  },
  computed: {
    ...mapState(["serverTypes", "services","levels","serverDate","shopsId"])
  },
  methods: {
    ...mapActions(["getTypes", "getServices","getLevel"]),
    click() {
      let shopId = "5cbc22270ca8acf604b3eaa6";
      if(this.serverDate){
         (this.dialogFormVisible = true), this.getTypes();
      this.getLevel(shopId);
      console.log(this.services,"11","levels");
      } else {
          this.$message({
          showClose: true,
          message: '请先选择日期',
          type: 'error'
        });
      }
     
    },
    removeTime(item) {
      var index = this.service.time.indexOf(item);
      if (index !== -1) {
        this.service.time.splice(index, 1);
      }
    },
    addTime() {
      this.service.time.push({
        timeSlot: "",
        key: Date.now()
      });
    },
    addService() {
      console.log(this.service,"插入的数据");
        (this.dialogFormVisible = false);
        let serverDate = this.serverDate
        console.log(serverDate,"11111111")
        
          axios({
            method: "post",
            url: "/services",
            data: {
              serverDate:serverDate,
              price:this.service.price,
              serviceName: this.service.serviceName,
              serverTypeId:this.service.serverType,
              // typesId: this.serverType,
              time: this.service.time,
              applyGuige: this.service.applyGuige,
              serverGuige: this.service.serverGuige,
              useTime: this.service.useTime,
              shopsId: this.shopsId,
              level: this.service.level,
              // seviceType:this.service.serverType
            }
          }).then(res => {
            console.log(res);
            this.getServices();
          });
       
    }
  }
};
</script>