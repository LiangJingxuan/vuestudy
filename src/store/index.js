import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { SHOWTABBARMUTAION, HIDETABBARMUTAION } from '@/type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 共享状态
    isTabbarShow: true,
    datalist: []
  },
  mutations: {
    [SHOWTABBARMUTAION] (state, payload) {
      // 隐藏tabbar
      state.isTabbarShow = payload
    },
    [HIDETABBARMUTAION] (state, payload) {
      // 显示tabbar
      state.isTabbarShow = payload
    },
    datalistMutaion (state, payload) {
      state.datalist = payload
    }
  },
  actions: {
    getDataListAction (store) {
      // 请求数据
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=1363837',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15782798251090921693185","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res)
        store.commit('datalistMutaion', res.data.data.films)
      })
    }
  },
  getters: {
    filterDataList (state) {
      return state.datalist.filter((item, index) => index < 5)
    }
  },
  modules: {
  }
})
