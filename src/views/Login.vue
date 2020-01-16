<template>
  <div class="login">
    <div class="content">
      <transition name="el-zoom-in-center">
        <el-card class="box-card">
          <div slot="header" class="clearfix displayflex">
            <span>密码登录</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <img src="../assets/sweep.png" alt />
              <img src="../assets/tabSwp.png" alt />
            </el-button>
          </div>
          <div class="card-content-def">
            <div class="input-group">
              <el-input placeholder="请输入内容" v-model="username">
                <template slot="prepend">账号：</template>
              </el-input>
            </div>
            <div class="input-group">
              <el-input placeholder="请输入内容" type="password" v-model="password">
                <template slot="prepend">密码：</template>
              </el-input>
            </div>
            <div class="input-group">
              <el-button class="btn" type="primary" @click="submit" round>登录</el-button>
            </div>
          </div>
          <div class="bottom clearfix">
            <el-button style="float: right; padding: 3px 10px" type="text" class="button">设置密码</el-button>
          </div>
        </el-card>
      </transition>
    </div>
  </div>
</template>
<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 400px;
    height: 380px;
    .box-card {
      width: 400px;
      height: 380px;
      .displayflex {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .input-group {
        margin-top: 20px;
        .btn {
          margin-top: 20px;
          width: 100%;
        }
      }
    }
    .bottom {
      margin-top: 20px;
    }
  }
}
</style>
<script>
import {mapMutations} from 'vuex';
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {},
  methods:{
    ...mapMutations(['setToken']),
    submit () {
     this.setStorage('token','hefskdgdkfgfdk',(res)=>{
       window.console.log(res);
       this.setToken('hefskdgdkfgfdk')
       this.$router.push('/')
     })
    }
  }
};
</script>