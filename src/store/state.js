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
  token:getToken()
}