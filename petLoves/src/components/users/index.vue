<template>
    <div>
        <!-- <AddPersons></AddPersons>
        <SearchPerson></SearchPerson> -->
        <el-row>
         <el-col :span="2"><AddPersons  ></AddPersons></el-col>
          <el-col :span="2"> <SearchPerson  ></SearchPerson></el-col>
        </el-row>
        <Table></Table>
        <Updateperson></Updateperson>
    </div>
</template>

<script>
import AddPersons from "./AddPersons";
import Updateperson from "./Updateperson";
import SearchPerson from "./SearchPerson";
import Table from "./Table";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("users");
export default {
  components: {
    AddPersons,
    Table,
    Updateperson,
    SearchPerson
  }
};
</script>

<style>
</style>
