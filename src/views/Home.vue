<template>
  <div class="home">
    <HeaderMenu/>
    <div class="container">
      <div class="sildeMenu">
        <sildeMenu :isCollapse="isCollapse" />
      </div>
      <div class="tabmenu">
        <div class="show-hidden-menu">
           <el-button :icon="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="triggerSilde"></el-button>
        </div>
        <tabMenu/>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sildeMenu from "@/components/SildMenu.vue";
import tabMenu from '@/components/TabMenu.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
export default {
  name: "home",
  data() {
    return {
      isCollapse: false
    };
  },
  components: {
    sildeMenu,
    tabMenu,
    HeaderMenu
  },
  methods: {
    triggerSilde() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  background: #f5f5f5;
}

.container {
  display: flex;
  padding: 10px 10px;
  box-sizing: border-box;
}
.sildeMenu {
  background: #F8FBFF;
}
.tabmenu {
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  width: 100vw;
}
.show-hidden-menu {
  margin: 10px 0;
}
</style>
