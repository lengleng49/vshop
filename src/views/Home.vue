<template>
  <div>
    <!-- 首页头部 -->
    <div class="header">
      <header-top title="巴南区箭河路上城时代">
        <div class="search" slot="left">
          <span class="iconfont icon-sousuo"></span>
        </div>
        <div class="login" slot="right">登录</div>
      </header-top>
    </div>

    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/image/nav/1.jpg"></div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
import HeaderTop from "../components/headerTop.vue";
//轮播组件
import Swiper, {Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper.use([Pagination])

export default {
  components: {
    HeaderTop
  },
  mounted(){
     new Swiper('.swiper-container', {
        loop: true, //可以循环轮播
        //分页器
         pagination: {
            el: '.swiper-pagination',
            
         }
     })
  }
};
</script>

<style lang="scss">
.header {
  .search {
    .iconfont {
      font-size: 25px;
    }
  }
}
//轮播图
.swiper-container{
   height: 220px;
   --swiper-pagination-color: #bfa;
}
</style>