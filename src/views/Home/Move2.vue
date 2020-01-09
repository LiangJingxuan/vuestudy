<template>
    <div>
        <ul>
            <li v-for="l in this.$store.state.datalist" :key="l.filmId" @click="handleClick(l.filmId)">
                <div class="lazy-img" alt="film">
                <img :src="l.poster" class="target-img">
                </div>
                <div class="nowPlayingFilm-info">
                <div class="nowPlayingFilm-name info-col">
                    <span class="name">{{l.name}} </span>
                    <span class="item">{{l.filmType.name}}</span>
                </div>
                <div class="nowPlayingFilm-grade info-col" style="visibility: visible;">
                    <span class="label">观众评分 </span>
                    <span class="grade">{{l.grade}}</span>
                </div>
                <div class="nowPlayingFilm-actors info-col">
                    <span class="label">主演：{{l.actors | actorsFilter}}</span>
                </div>
                <div class="nowPlayingFilm-detail info-col">
                    <span class="label">{{l.nation}} | {{l.runtime}}分钟</span>
                </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted () {
    if (this.$store.state.datalist.length === 0) {
      // 数据请求 存储store
      this.$store.dispatch('getDataListAction', {
        id: '1000212201',
        name: '测试'
      })
    } else {
      console.log('使用缓存数据')
      console.log(this.$store.getters.filterDataList)
    }
  }
}
</script>
<style lang="scss" scoped>
  ul{
    margin-bottom: 40px;
    li{
      padding: 2%;
      border-bottom: 1px #ccc dotted;
      width: 90%;
      margin: auto;
    }
  }
  .lazy-img{
    width: 20%;
    height: 106px;
    display: inline-block;
    img{width: 100%;}
  }
  .nowPlayingFilm-info{
    float: right;
    width: 78%;
    font-size: 12px;
    line-height: 25px;
  }
</style>
