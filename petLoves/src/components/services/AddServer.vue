<template>
  <div>
    <el-button type="primary" @click="click">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="添加服务" :visible.sync="dialogFormVisible">
      <el-form :model="service">
        <el-form-item label="服务名" :label-width="formLabelWidth">
          <el-input v-model="service.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务类型" :label-width="formLabelWidth">
          <el-select v-model="serverType" placeholder="请选择服务类型">
            <el-option
              v-for="item in serverTypes"
              :key="item._id"
              :label="item.name"
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
          <!-- <el-select v-model="chooseLevel" placeholder="请选择服务类型">
            <el-option
              v-for="item in services[0].level"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select> -->
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="service.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
        name: "",
        serverTypes: "",
        applyGuige: "",
        serverGuige: "",
        useTime: "",
        shops: "5cbc22270ca8acf604b3eaa6",
        level: "",
        price: "",
        chooseLevel: "",
        time: [
          {
            timeSlot: ""
          }
        ]
      },
      serverType: "",
      formLabelWidth: "120px"
    };
  },
  created() {},
  computed: {
    ...mapState(["serverTypes", "services"])
  },
  methods: {
    ...mapActions(["getTypes", "getServices"]),
    click() {
      (this.dialogFormVisible = true), this.getTypes();
      console.log(this.services.level, "services1");
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
      // console.log(this.service.name)
      // axios({
      //   method: "post",
      //   url: "/services",
      //   data: {
      //     // name: this.service.name,
      //     typesId: this.serverType,
      //     // time: this.service.time,
      //     applyGuige: applyGuige,
      //     serverGuige: serverGuige,
      //     useTime: useTime,
      //     shopsId: shops,
      //     // chooseLevel: chooseLevel
      //   }
      // }).then(res => {
      //   console.log(res);
      // });
    }
  }
};
</script>