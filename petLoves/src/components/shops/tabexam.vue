
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
    // handleClick(value) {
    //   console.log(value.label);
    //   if(value.label == '门店审核'){
    //   this.getno();
    //   }else{
    //     this.getok()
    //   }
    // },
    // look(index,row){
    //   this.setdialogVisible(true)
    //   // let id = row._id;
    //   console.log(row.assistant,"数据")
    //   this.zhiyuan = [];
    //   this.zhiyuan.push(row.assistant)
    // },
    // handleEdit(index, row) {
    //   let id = row._id;
    //   console.log(row)
    //   this.setShop(id);
    // },
    handleExamine(index, row) {
      // let id = row._id;
      console.log(row,'row')
      this.info = [];
      this.info.push(row);
      this.setVisible(true);
      console.log(this.info, "info");
      
    },
    // handleDelete(index, row) {
    //   let id = row._id;
    //   console.log(id, "id");
    //   this.$confirm(`门店名称:${row.storeName}`, "删除提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     showClose: false,
    //     type: "warning"
    //   })
    //     .then(() => {
    //       axios({
    //         method: "delete",
    //         url: "/shops/" + id
    //       }).then(res => {
    //         console.log(res);
    //         this.getok();
    //         this.$message("删除成功");
    //       });
    //     })
    //     .catch(() => {
    //       this.$message("取消删除");
    //     });
    // },
    // searchBtn() {
    //   console.log(123123);
    //   this.getok({
    //     type: this.search.type,
    //     value: this.search.value
    //   });
    // }
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
