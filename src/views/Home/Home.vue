<template>
  <div class="home">
    <router-link to="/index/move1">move1</router-link>
    <router-link to="/index/move2">move2</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  // 组件内拦截器
  beforeEnter: (to, from, next) => {
    // ...
  }
}
</script>
