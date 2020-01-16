// 菜单配置
export default {
  sildemenu: [{
    title: '母品管理',
    icon: 'el-icon-menu',
    index:1,
    key:'admin',
    children: [
      {
        index:1,
        title: "管理员管理",
        icon: '',
        key: 'admin',
      },
      {
        index:2,
        title: "控制台",
        icon: '',
        key: 'console',
      }
    ]
  },{
    title: '关于',
    icon: 'el-icon-menu',
    index:2,
    key:'about', 
    children: [
      {
        index:1,
        title: "关于",
        icon: '',
        key: 'about',
      }
    ]
  },{
    title: '组件列表',
    icon: 'el-icon-menu',
    index:2,
    key:'components', 
    children: [
      {
        index:1,
        title: "图表",
        icon: '',
        key: 'vcharts',
      },
      {
        index:2,
        title: "消息框",
        icon: '',
        key: 'messagebox',
      },
      {
        index:3,
        title: "Dialog",
        icon: '',
        key: 'dialog',
      },{
        index:4,
        title: "Table",
        icon: '',
        key: 'table',
      }
    ]
  }],
  headermenu:[{
    title: '首页',
    index:1,
    isShow:true,
    key:'index',
  },{
    title:'用户中心',
    index:2,
    isShow:false,
    key:'user'
  }]
}