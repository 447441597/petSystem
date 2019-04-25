
     <template >
     <div>
           <el-table
    :data="shops"
    style="width: 100%">
    <el-table-column
      label="门店名称"
      prop="storeName"
      width="120">
    </el-table-column>
    <el-table-column
      label="营业执照号码"
      prop="businessNum"
      width="120">
    </el-table-column>
      <el-table-column
      label="营业执照"
      prop="businessImage"
      width="120">
       <template slot-scope="scope" >
           <img :src="'http://localhost:3005/images/'+ scope.row.businessImage" width="60" height="60" >
        </template>
    </el-table-column>
     <el-table-column
      label="地址"
      prop="address"
      width="120">
    </el-table-column>
     <el-table-column
      label="法人"
      prop="legalPerson"
      width="120">
    </el-table-column>
     <el-table-column
      label="电话"
      prop="tel"
      width="120">
    </el-table-column>
     <el-table-column
      label="门店图片"
      prop="headImage"
      width="120">
       <template slot-scope="scope" >
           <img :src="'http://localhost:3005/images/'+ scope.row.headImage" width="60" height="60" >
        </template>
    </el-table-column>
     <el-table-column
      label="特色"
      prop="feature"
      width="120">
    </el-table-column>
    <el-table-column
      label="VIP等级"
      prop="vipLeval"
      width="120">
    </el-table-column>
    <el-table-column
      label="佣金比例"
      prop="rate"
      width="120">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope" class="scope">
        <el-button
          size="mini"
          @click="handleExamine(scope.$index, scope.row)" type="danger" circle>审核</el-button>
      </template>
    </el-table-column>
     </el-table>
      <examine :info='info'></examine>
      <pagenation></pagenation>
      </div>
       </template>


<script>
import { createNamespacedHelpers } from "vuex";
import axios from "axios";
import Update from "./update.vue";
import Pagenation from "./pagenation.vue";
import Examine from "./examine.vue";
import Assistant from './assistant.vue';
import Tabstocks from './tabstocks.vue'
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      // dialogVisible: false,
      select: true,
      activeName: "first",
      info: [],
      zhiyuan:[]
    };
  },
//   created() {
//     this.getok();
   
//     // this.setshops()
//   },
  computed: {
    ...mapState(["shops", "pagiNation", "search"]),
    value: {
      get() {
        return this.search.value;
      },
      set(value) {
        this.setSearch({
          ...this.search,
          value
        });
      }
    },
    type: {
      get() {
        return this.search.type;
      },
      set(type) {
        this.setSearch({
          ...this.search,
          type
        });
      }
    }
  },
  methods: {
    ...mapActions(["setshops", "setShop","getno",'getok']),
    ...mapMutations(["setActive", "setSearch", "setVisible","setdialogVisible"]),
    selected(data) {
      this.select = data;
    },
    handleExamine(index, row) {
      this.info = [];
      this.info.push(row);
      this.setVisible(true);
    },   
  },
  components: { Update, Pagenation, Examine ,Assistant,Tabstocks}
};
</script>

<style>
.el-card {
  width: 100%;
}
.cell {
  text-align: center;
}
.el-input__inner .el-input--prefix {
  width: 200px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-row {
  display: flex;
}
.sousuo {
  margin-left: 5px;
  margin-bottom: 10px;
}
</style>
