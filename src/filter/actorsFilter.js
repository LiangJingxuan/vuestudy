import Vue from 'vue'
Vue.filter('actorsFilter', data => {
  if (!data) {
    return '暂无主演'
  }
  // let actors = data.map(item => item.name)
  // return actors.join(' ')
  return '测试'
})
