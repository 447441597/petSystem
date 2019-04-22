<template>
        <tbody>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>性别</td>
            <td>
                <button>删除</button>
                <button>修改</button>
            </td>
        </tr>
        </tbody>
</template>

<script>
export default {
  created() {
    this.show();
  },
  methods: {
    show() {
      axios({
        method: "get",
        url: "/petOwns"
      }).then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style>
</style>
