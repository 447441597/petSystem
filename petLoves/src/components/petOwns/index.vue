<template>
    <div>
        <Search></Search>
        <PetList></PetList>
        <Identity></Identity>
        <VipCard></VipCard>
        <el-pagination
         background layout="prev, pager, next" :total="total" :page-size="5"
         @prev-click="prev"
         @next-click="next"
         @current-change="change"
         :current-page="pet.curpage"
        >
        </el-pagination>
    </div>
</template>

<script>
import PetList from "./PetList";
import Identity from "./Identity";
import VipCard from "./VipCard";
import Search from "./Search";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions,mapMutations } = createNamespacedHelpers("petowns");
export default {
  components: {
    PetList,
    Identity,
    VipCard,
    Search
  },
  created() {
    this.setPet();
  },
  computed: {
    ...mapState(["pet", "total"])
  },
  methods: {
    ...mapActions(["setPet"]),
    ...mapMutations(["seti"]),
    prev() {
      this.setPet({ page: ~~this.pet.curpage - 1 });
      this.seti( ~~this.pet.curpage - 1);
    },
    change(i) {
      this.setPet({ page: i });
      this.seti(i);
    },
    next() {
      this.setPet({ page: ~~this.pet.curpage + 1 });
      this.seti(~~this.pet.curpage + 1);
    }
  }
};
</script>

<style>
</style>
