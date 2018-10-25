const menu = [
  {
    icon: 'apps',
    title: '欢迎页',
    name: 'home',
    to: '/',
  },
  {
    icon: 'apps',
    'icon-alt': 'keyboard_arrow_down',
    title: '数据管理',
    name: 'data',
    children: [
      {
        title: '数据列表',
        name: 'dataList',
        to: '/dataList'
      }
    ]
  }
]

export default menu
