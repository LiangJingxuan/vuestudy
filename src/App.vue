<template>
  <div id="app">
    <div id="nav">
      <Tabbar v-show="isShow" />
    </div>
    <router-view/>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
import bus from '@/bus'
export default {
  data () {
    return {
      isShow: true
    }
  },
  components: {
    Tabbar
  },
  beforeMount () {
    bus.$on('navbar', (data) => {
      this.isShow = data
    })
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
