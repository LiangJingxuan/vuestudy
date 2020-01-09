<template>
  <div id="app">
    <div id="nav">
      <!-- <Tabbar v-show="isShow" /> -->
      <!-- <Tabbar v-show="$store.state.isTabbarShow" /> -->
      <!-- <Tabbar v-show="tabbarShowSet" /> -->
      <Tabbar v-show="isTabbarShow" />
    </div>
    <router-view/>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
// import bus from '@/bus'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      // isShow: true
    }
  },
  components: {
    Tabbar
  },
  // beforeMount () {
  //   // bus解决跨组件传值
  //   bus.$on('navbar', (data) => {
  //     this.isShow = data
  //   })
  // },

  // 计算属性写法1
  // computed: {
  // tabbarShowSet () {
  //   return this.$store.state.isTabbarShow
  // }
  // }

  // 计算属性写法2
  // computed: mapState(['isTabbarShow'])

  // 计算属性写法3
  computed: {
    ...mapState(['isTabbarShow']),
    ...mapGetters(['filterDataList']),
    a () {
      return '111'
    }
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
</style>
