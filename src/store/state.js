function getToken () {
  return JSON.parse(localStorage.getItem('token'));
}

export default  {
  tabIndex: 'admin',
  tab: [{
    title: '管理员管理',
    name: 'admin',
    link: '/admin'
  }],
  // 这里改进思路可以配合本地缓存
  // 然后刷新的时候就可以读取所有选项卡
  token:getToken()
}