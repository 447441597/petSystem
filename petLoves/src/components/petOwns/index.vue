<template>
    <div>
        <h1>宠主管理</h1>
        <PetList></PetList>
    </div>
</template>

<script>
import PetList from "./PetList";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("petowns");
export default {
  components: {
    PetList
  },
  created(){
    this.setPet();
  },
  methods: {
    ...mapActions(['setPet'])
  }
};
</script>

<style>
</style>
