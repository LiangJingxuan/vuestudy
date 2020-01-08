<template>
  <div id="app">
    <div id="nav">
      <Tabbar />
    </div>
    <router-view/>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar'
export default {
  components: {
    Tabbar
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
