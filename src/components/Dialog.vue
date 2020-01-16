<template>
  <div class="dialog">
    <el-dialog title="提示" :visible.sync="showDia" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancalDia">取 消</el-button>
        <el-button type="primary" @click="trueDia">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props:{
    showDia:{
      type:Boolean,
      default:()=>(false)
    }
  },
  methods: {
    handleClose(done) {
      window.console.log(done);
    },
    cancalDia(){
      this.$emit('close');
    },
    trueDia(){
      this.$emit('done')
    }
  }
};
</script>