<template>
     <div class="block">
    <span class="demonstration">日期</span>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value:""
        }
    },
    computed:{
        vualue:{
            set(){

            },
            get(){

            }
        }
    },
    methods:{
        
    }
}
</script>

<style>
.demonstration{
    margin:20px 20px;
}
</style>
