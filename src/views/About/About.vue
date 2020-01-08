<template>
  <div class="about cinema_container" :style="{height: cinemaheight}">
    <ul v-if="list">
      <li v-for="d in list" :key="d.cinemaId">
        {{d.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      list: [],
      cinemaheight: 0
    }
  },
  mounted () {
    this.cinemaheight = document.documentElement.clientHeight - 40 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4040861',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15782798251090921693185","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.list = res.data.data.cinemas

      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BetterScroll('.cinema_container', {
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .cinema_container{
    overflow: hidden;
    position: relative;
    li {
      height: 50px;
    }
  }
</style>
