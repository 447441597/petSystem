<template>
    <div>
        <h1>宠主管理</h1>
        <PetList></PetList>
        <Identity></Identity>
    </div>
</template>

<script>
import PetList from "./PetList";
import Identity from './Identity'
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("petowns");
export default {
  components: {
    PetList,Identity
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
