<template>
    <div v-if="filminfo">
      {{filminfo.name}}
      <img :src="filminfo.poster" alt="" class="poster">

      <p>演职人员</p>
      <detailswiper :perview="2" swipername="actors">
        <div class="swiper-slide" v-for="p in filminfo.actors" :key="p.avatarAddress">
          <img :src="p.avatarAddress" alt="">
        </div>
      </detailswiper>

      <p>剧照</p>
      <detailswiper :perview="4" swipername="photos">
        <div class="swiper-slide" v-for="p in filminfo.photos" :key="p">
          <img :src="p" alt="">
        </div>
      </detailswiper>

      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>

      <mt-badge type="error">2</mt-badge>
    </div>
</template>
<script>
import axios from 'axios'
import detailswiper from './DetailSwiper'
// import bus from '@/bus'
import { SHOWTABBARMUTAION, HIDETABBARMUTAION } from '@/type'
import { Button, Badge } from 'mint-ui'
export default {
  data () {
    return {
      filminfo: null
    }
  },
  mounted () {
    // bus.$emit('navbar', false)
    // this.$store.state.isTabbarShow = false
    this.$store.commit(HIDETABBARMUTAION, false)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=2472780`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15782798251090921693185","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filminfo = res.data.data.film
    })
  },
  beforeDestroy () {
    // bus解决跨组件传值
    // bus.$emit('navbar', true)

    // vuex解决跨组件传值
    // this.$store.state.isTabbarShow = false

    this.$store.commit(SHOWTABBARMUTAION, true)
  },
  components: {
    detailswiper,
    'mt-button': Button,
    'mt-badge': Badge
  }
}
</script>

<style lang="scss" scoped>
  .poster{
    width: 100%;
  }
</style>
