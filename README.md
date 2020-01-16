# admin

## 运行本项目需要安装nodejs

[传送门](http://nodejs.cn/download/)

## 安装完成以后

## 1 安装依赖
```
npm install
```

### 2 运行开发版
```
npm run serve
```

### 3 打包
```
npm run build
```

### 4 test测试
```
npm run test
```

### 5 lint检查
```
npm run lint
```
### 路由使用
```
侧边栏菜单，请配置sildemenu下的sildemenu
顶部菜单，请配置sildemenu下的headermenu
    - headermenu中isShow决定了是否显示在左边导航栏
    - headermenu中的右边菜单按钮请自定义，但是页面路由必须在router中存在，isShow必须为false
    - 整个后台的页面全都是Home路由的子路由，请在Home路由中添加子路由
```
