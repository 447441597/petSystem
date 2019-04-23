<template>
    <div>
        <AddPersons></AddPersons>
        <Table></Table>
    </div>
</template>

<script>
import AddPersons from "./AddPersons";
import Table from "./Table";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("users");
export default {
  data() {
      return {}
  },
  methods: {
    ...mapActions(["setPersons"])
  },
  created() {
    this.setPersons();
  },
  components: {
    AddPersons,
    Table
  }
};
</script>

<style>
</style>
