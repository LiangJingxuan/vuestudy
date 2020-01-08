<template>
  <div class="home">
    <!-- 轮播 -->
    <moveswiper :key="list.length" ref="moveswiper">
      <div class="swiper-slide" v-for="l in list" :key="l.filmsId">
        <img :src="l.poster">
      </div>
    </moveswiper>
    <ul :class=" isFixed ? 'fixed' : '' ">
      <router-link to="/index/move1" tag="li" active-class="active">正在热映</router-link>
      <router-link to="/index/move2" tag="li" active-class="active">即将上映</router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import moveswiper from './MoveSwiper.vue'

export default {
  name: 'home',
  data () {
    return {
      list: [],
      isFixed: false
    }
  },
  components: {
    moveswiper
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=4&type=1&k=661073',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15782798251090921693185","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.list = res.data.data.films
    })
    window.onscroll = this.handleScroll
  },
  methods: {
    handleScroll () {
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop > this.$refs.moveswiper.$el.offsetHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  // 组件内拦截器
  beforeEnter: (to, from, next) => {
    // ...
  }
}
</script>

<style lang="scss" scoped>
  .active{
    color: red;
    border-bottom: 2px solid red;
  }
  ul{
    display: flex;
    li{
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
  .fixed{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: white;
  }
</style>
