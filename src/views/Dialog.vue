<template>
  <div class="dialog">
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <Dialog :showDia='dialogVisible' @close='closeEvent' @done='doneEvent'/>
  </div>
</template>
<script>
import Dialog from '@/components/Dialog.vue'
export default {
  data() {
    return {
      dialogVisible:false
    };
  },
  components:{
    Dialog
  },
  methods: {
    closeEvent () {
      this.dialogVisible = false
    },
    doneEvent () {
      this.dialogVisible = false
    }
  }
};
</script>
