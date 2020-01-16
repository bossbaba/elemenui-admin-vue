<template>
  <div class="tab">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      @tab-click="changeTabs"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane v-for="(item) of tab" :key="item.name" :label="item.title" :name="item.name"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import config from "../config/sildemenu";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["tab", "tabIndex"]),
    editableTabsValue: {
      get() {
        return this.tabIndex;
      },
      set(val) {
        this.$router.push(`/${val}`);
        this.changeTabIndex(val);
      }
    }
  },
  mounted() {
    let url = window.location.href.split("#")[1];
    window.console.log(url)
    let defaultUri = "";
    let promise = new Promise((reslove,reject) => {
      let flag = "";
      config.sildemenu.forEach(ele => {
        flag = ele.children.find(item => {
          return "/" + item.key === url;
        });
        if (flag) {
          window.console.log(flag);
          reslove(flag);
        }
      });
      if(!flag){
        reject({
            msg:'当前路由不在侧边栏页面中，导航到顶栏菜单'
          })
      }
    });
    promise.then(resp => {
      if (resp) {
        window.console.log(resp);
        defaultUri = {
          title: resp.title,
          name: resp.key,
          link: "/" + resp.key
        };
        this.changeDefaultTab(defaultUri);
        this.changeTabIndex(defaultUri.name);
      }
    }).catch(e=>{
      window.console.log(e.msg)
      let flag = config.headermenu.find((ele)=>{
          return '/'+ele.key === url
        })
        defaultUri = {
          title: flag.title,
          name: flag.key,
          link: "/" + flag.key
        };
        this.changeDefaultTab(defaultUri);
        this.changeTabIndex(defaultUri.name);
    });
  },
  methods: {
    ...mapMutations(["changeTabIndex", "removeTabs", "changeDefaultTab"]),
    removeTab(e) {
      this.removeTabs({
        key: e
      });
    },
    changeTabs(item) {
      this.$router.push(`/${item.name}`);
    }
  }
};
</script>

<style lang="less" scoped>
.tab {
  min-width: calc(100vw - 250px);
  max-width: calc(100vw - 120px);
}
</style>