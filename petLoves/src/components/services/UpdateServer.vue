<template>
  <el-dialog title="添加服务" :visible.sync="dialogFormVisible">
    <el-form :model="service" ref="service">
      <el-form-item label="服务名" :label-width="formLabelWidth" prop="serviceName">
        <el-input v-model="service.serviceName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="服务类型" :label-width="formLabelWidth" prop="serverType">
        <el-select v-model="service.serverType" placeholder="请选择服务类型">
          <el-option
            v-for="item in serverTypes"
            :key="item._id"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="适用规格" :label-width="formLabelWidth" prop="applyGuige">
        <el-input v-model="service.applyGuige" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="服务规格" :label-width="formLabelWidth" prop="serverGuige">
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
      <el-form-item label="耗时" :label-width="formLabelWidth" prop="useTime">
        <el-input v-model="service.useTime" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="等级" :label-width="formLabelWidth" prop="level">
        <el-select v-model="service.level" placeholder="请选择服务类型">
          <el-option
            v-for="item in levels"
            :key="item.assistantphone"
            :label="item.assistantname"
            :value="item.assistantlevel"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格" :label-width="formLabelWidth" prop="price">
        <el-input v-model="service.price" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="update">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("services");
export default {
  created() {
    let shopId = "5cbc22270ca8acf604b3eaa6";
    console.log("haha");
    this.getTypes();
    this.getLevel(shopId);
  },
  data() {
    return {
      //   dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState(["dialogFormVisible", "service", "levels", "serverTypes"]),
    serviceName: {
      set(serviceName) {
        return this.setService({
          ...this.service,
          serviceName: serviceName
        });
      },
      get() {
        return this.service.serviceName;
      }
    },
    serverType: {
      set(serverType) {
        return this.setService({
          ...this.service,
          serverType: serverType
        });
      },
      get() {
        return this.service.serverType;
      }
    },
    applyGuige: {
      set(applyGuige) {
        return this.setService({
          ...this.services,
          applyGuige: applyGuige
        });
      },
      get() {
        return this.service.applyGuige;
      }
    },
    serverGuige: {
      set(serverGuige) {
        return this.setService({
          ...this.service,
          serverGuige: serverGuige
        });
      },
      get() {
        return this.service.applyGuige;
      }
    },
    applyGuige: {
      set(applyGuige) {
        return this.setService({
          ...this.service,
          applyGuige: applyGuige
        });
      },
      get() {
        return this.service.applyGuige;
      }
    },
    price: {
      set(price) {
        return this.setService({
          ...this.service,
          price: price
        });
      },
      get() {
        return this.service.price;
      }
    }
    // visible: {
    //   set(upvisible) {
    //     return this.setVisible(false);
    //   },
    //   get() {
    //     console.log("upVisible", this.upVisible);
    //     return this.upVisible;
    //   }
    // }
  },
  methods: {
    ...mapActions([
      "setVisible",
      "getServices",
      "setSevices",
      "getLevel",
      "getTypes"
    ]),
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
    cancel() {
      this.setVisible(false);
    },
    update() {
      // this.setVisible(false);
      console.log("这是要修改的服务", this.service);
      axios({
        method: "put",
        url: "/services/" + this.service._id,
        data: {
          price: this.service.price,
          serviceName: this.service.serviceName,
          serverType: this.service.serverType,
          typesId: this.serverType,
          time: this.service.time,
          applyGuige: this.service.applyGuige,
          serverGuige: this.service.serverGuige,
          useTime: this.service.useTime,
          shopsId: this.service.shops,
          level: this.service.level
        }
      }).then(res => {
        console.log("修改后的服务为", res.data);
        this.getServices();
        this.setVisible(false);
      });
    }
  }
};
</script>

<style>
</style>
