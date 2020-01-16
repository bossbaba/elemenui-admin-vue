<template>
  <div class="slider">
    
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      style="height:calc(100vh - 101px)"
      unique-opened	
      text-color="#0066FF"
      active-text-color="#fff"
    >
      <el-submenu v-for="(item,index) of menu" :key="index" :index="item.key">
        <template slot="title" v-if="item.children" >
          <i style='color:#0066FF' :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item-group v-if="item.children" >
          <el-menu-item  v-for="(sitem,sindex) of item.children" :key="sindex" @click="addPages(sitem)" :index='sitem.key'>{{sitem.title}}</el-menu-item>
        </el-menu-item-group>
        <el-menu-item v-else :index="item.key" @click="addPages(item)">
        <template slot="title">
          <i style='color:#0066FF' :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
      </el-menu-item>
      </el-submenu>
      
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item.is-active {
  background: #0066FF;
}
.el-menu-item:focus {
  background: #0066FF !important;
  color: #fff !important;
}
</style>

<script>
import config from '@/config/sildemenu.js';
import {mapMutations,mapState} from 'vuex';
export default {
  data() {
    return {
      menu:config.sildemenu
    };
  },
  props:{
    isCollapse:{
      type:Boolean,
      default:()=>(false)
    }
  },
  computed:{
    ...mapState(['tabIndex']),
    defaultActive: {
      get(){
        return this.tabIndex
      },
      set(){
      }
    }
  },
  mounted(){
    
  },
  methods: {
    ...mapMutations(['addTabs','changeTabIndex']),
    addPages(item){
      this.addTabs(item)
      this.changeTabIndex(item.key)
      this.$router.push(`/${item.key}`)
      // return 
    },
    handleOpen(key, keyPath) {
      window.console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      window.console.log(key, keyPath);
    }
  }
};
</script>