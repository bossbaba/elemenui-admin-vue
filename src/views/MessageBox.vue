<template>
  <div>
    <el-button plain @click="open1">可自动关闭</el-button>
    <el-button plain @click="open2">不会自动关闭</el-button>
    <el-button :plain="true" @click="open0">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
     open0() {
        this.$message('这是一条消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      },
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: "标题名称",
        message: h(
          "i",
          { style: "color: teal" },
          "这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案"
        )
      });
    },

    open2() {
      this.$notify({
        title: "提示",
        message: "这是一条不会自动关闭的消息",
        duration: 0
      });
    }
  }
};
</script>