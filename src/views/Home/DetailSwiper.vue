<template>
    <div :class="'swiper-container detail ' +this.swipername">
        <div class="swiper-wrapper">
            <slot />
        </div>
        <!-- <div class="swiper-pagination"></div> -->
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.' + this.swipername, {
      slidesPerView: this.perview,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        // el: '.swiper-pagination',
        // clickable: true
      }
    })
  },
  props: {
    perview: Number,
    swipername: String
  }
}
</script>

<style lang="scss" scoped>
  .swiper-slide{
    height: 100px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
