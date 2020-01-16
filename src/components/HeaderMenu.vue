<template>
  <div class="header-menu">
    <el-header class="header">
      <el-row class="row" :gutter="20">
        <el-col class="flexstart" :span="16">
          <div class="logo">LOGO</div>
          <div
            :class="tabindex === item.key?'active':''"
            v-for="(item,index) of headerMenu"
            :key="index"
            :style="{display:item.isShow?'block':'none'}"
            @click="gotopage(item,index)"
          >{{item.title}}</div>
        </el-col>
        <el-col class="flexend" :span="8">
          <div class="search">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
          </div>
          <div class="msg">
            <el-badge is-dot class="item">
              <el-button icon="el-icon-message-solid" circle></el-button>
            </el-badge>
          </div>
          <div
            @click="gotopage({
                title:'用户中心',
                index:2,
                key:'user'
              },1000)"
          >
            <el-avatar size="large" :src="circleUrl"></el-avatar>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <div class="line"></div>
  </div>
</template>
<script>
import config from "../config/sildemenu";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      input2: "",
      headerMenu: config.headermenu,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  computed: {
    ...mapState(["tab",'tabIndex']),
    tabindex:{
      get(){
        return this.tabIndex
      },set(){

      }
    }
  },
  mounted() {
    window.console.log(this.tab);
    let url = window.location.href.split("#")[1];

    config.headermenu.forEach((ele, index) => {
      if ("/" + ele.key === url) {
        this.tabindex = index;
      }
    });
  },
  methods: {
    ...mapMutations(["addTabs", "changeTabIndex"]),
    handleSelect() {},
    gotopage(item, index) {
      window.console.log(item, this.tab);
      this.tabindex = index;
      this.addTabs(item);
      this.changeTabIndex(item.key)
      this.$router.push("/" + item.key);
    }
  }
};
</script>

<style lang="less" scoped>
.active {
  color: #409eff;
}
.row {
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexstart {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div {
    margin: 0 2rem;
    cursor: pointer;
  }
}
.flexend {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div {
    margin: 0 1rem;
    cursor: pointer;
  }
}
.line {
  width: 100vw;
  height: 1px;
  background: #f5f5f5;
}
.header  {
  background: #fff;
}
</style>