<template>
  <div>
     <el-row>
         <el-col :span="2"> <Add></Add></el-col>
            <el-col :span="2"> <Search></Search></el-col>
        </el-row>
    <Datalist></Datalist>
    <Updata></Updata>
    <Page></Page>
  </div>
</template>

<script>
import Add from './add'
import Updata from './updata'
import Datalist from './datalist'
import Search from './search'
import Page from './page'
export default {
  components: {
    Add,
    Datalist,
    Updata,
    Search,
    Page
  },
  data() {
    return {

    };
  },
  methods: {
   
  }
};
</script>

<style>
</style>
