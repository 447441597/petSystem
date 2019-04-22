<template>
    <div>
        <el-button type="success">服务订单</el-button>
        <el-button type="success">商品订单</el-button>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品订单</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <tabcomponent />
        </el-card>
    </div>
</template>

<script>
import tabcomponent from "../../common/tabcomponent/tabcomponent.vue";
export default {
  components: {
    tabcomponent
  }
};
</script>

<style>
</style>
